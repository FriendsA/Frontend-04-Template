const root = document.createElement("div");
root.setAttribute("id", "root");
let arr = localStorage.getItem("map") ? JSON.parse(localStorage.getItem("map")) : Array(10000).fill(0);
//画图
for (let i = 0; i < arr.length; i++) {
    let div = document.createElement("div");
    div.classList.add("item");
    if (arr[i] === 1) {
        div.classList.add("choose");
    }
    div.addEventListener("mousemove", function (e) {
        if (mousedown === 1) {
            this.classList.add("choose");
            arr[i] = 1;
        } else if (mousedown === 2) {
            this.classList.remove("choose");
            arr[i] = 0;
        }
    })
    root.appendChild(div);
}
document.querySelector('#map').appendChild(root);
let mousedown = 0;
root.addEventListener("mousedown", function (e) {
    if (e.which === 3) {
        mousedown = 2
    } else {
        mousedown = 1;
    }
})
root.addEventListener("mouseup", function (e) {
    mousedown = 0;
})
root.addEventListener("contextmenu", function (e) {
    e.preventDefault();
})

//搜索
async function pathFun(map, start, end) {
    let table = Object.create(null);
    let endPoint = 100 * end[0] + end[1];
    let startPoint = 100 * start[0] + start[1];
    let queue = new Sorted([startPoint], (a, b) => distance(a) - distance(b));

    const distance = (p) => {
        let a = Math.floor(p / 100), b = p % 100;

        return (a - end[0]) ** 2 + (b - end[1]) ** 2;
    }

    async function insert(p, pre) {
        if (p < 0 || p > 9999) {
            return;
        }
        if (map[p] === 2 || map[p] === 1) {
            return;
        }
        table[p] = pre;
        await sleep(1);
        document.querySelector("#root").children[p].classList.add("green");
        map[p] = 2;
        queue.give(p);
    }

    while (queue.length) {
        let point = queue.take();
        if (point === endPoint) {
            let path = [];
            while (point !== 0) {
                path.push(point);
                point = table[point];
                await sleep(1);
                document.querySelector("#root").children[point].classList.add("purple");
            }
            return path;
        }

        //左右上下
        if (point % 100 !== 0) {
            await insert(point - 1, point);
        }
        if ((point + 1) % 100 !== 0) {
            await insert(point + 1, point);
        }
        await insert(point + 100, point);
        await insert(point - 100, point);
        if (point % 100 !== 0 && point > 99) {
            await insert(point - 101, point);
        }
        if (point % 100 !== 0 && point < 9900) {
            await insert(point + 99, point);
        }

        if ((point + 1) % 100 !== 0 && point > 99) {
            await insert(point - 99, point);
        }

        if ((point + 1) % 100 !== 0 && point < 9900) {
            await insert(point + 101, point);
        }

        //顺时针
        // if ((point + 1) % 100 !== 0) {
        //     await insert(point + 1, point);
        // }
        // if ((point + 1) % 100 !== 0 && point < 9900) {
        //     await insert(point + 101, point);
        // }
        // await insert(point + 100, point);
        // if (point % 100 !== 0 && point < 9900) {
        //     await insert(point + 99, point);
        // }
        // if (point % 100 !== 0) {
        //     await insert(point - 1, point);
        // }
        // await insert(point - 100, point);
        // if ((point + 1) % 100 !== 0 && point > 99) {
        //     await insert(point - 99, point);
        // }



    }

    return null;
}

window.addEventListener("unload", function () {
    localStorage.setItem("map", JSON.stringify(arr));
})

document.querySelector("#btn").addEventListener("click", function () {
    localStorage.removeItem("map");
    arr = Array(10000).fill(0);
    window.location.reload();
})


function sleep(t) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, t);
    })
}


class Sorted {
    constructor(map, compare) {
        this.map = map.slice();
        this.compare = compare || function (a, b) { return a - b };
    }

    take() {
        let min = this.map[0];
        let minIndex = 0;
        for (let i = 0; i < this.map.length; i++) {
            if (this.compare(this.map[i], min) < 0) {
                min = this.map[i];
                minIndex = i;
            }
        }
        this.map[minIndex] = this.map[this.map.length - 1];
        this.map.pop();
        return min;
    }

    give(n) {
        this.map.push(n);
    }

    length() {
        return this.map.length;
    }
}
