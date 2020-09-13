
let callbacks = new Map();

let reactivities = new Map();

let usedEffectivities = [];

function effect(callback) {
    usedEffectivities = [];
    callback();

    for (let reactivity of usedEffectivities) {
        if (!callbacks.has(reactivity[0])) {
            callbacks.set(reactivity[0], new Map());
        }
        if (!callbacks.get(reactivity[0]).has(reactivity[1])) {
            callbacks.get(reactivity[0]).set(reactivity[1], []);
        }
        callbacks.get(reactivity[0]).get(reactivity[1]).push(callback);
    }
}

function reactive(object) {
    if (reactivities.has(object)) {
        return reactivities.get(object);
    }

    let proxy = new Proxy(object, {
        set: function (obj, prop, val) {
            obj[prop] = val;
            if (callbacks.get(obj) && callbacks.get(obj).get(prop)) {
                for (let effect of callbacks.get(obj).get(prop)) {
                    effect();
                }
            }
            return obj[prop];
        },
        get: function (obj, prop) {
            usedEffectivities.push([obj, prop]);
            if (typeof obj[prop] === "object") {
                return reactive(obj[prop]);
            }
            return obj[prop];
        }
    })

    reactivities.set(object, proxy);
    return proxy;
}

let obj = {
    r: 1,
    g: 1,
    b: 1,
}

let po = reactive(obj);

effect(() => { document.getElementById("r").value = po.r });
effect(() => { document.getElementById("g").value = po.g });
effect(() => { document.getElementById("b").value = po.b });

document.getElementById("r").addEventListener("input", event => po.r = event.target.value);
document.getElementById("g").addEventListener("input", event => po.g = event.target.value);
document.getElementById("b").addEventListener("input", event => po.b = event.target.value);


effect(() => { document.getElementById("box-top").style.backgroundColor = `rgb(${po.r},${po.g},${po.b})` });