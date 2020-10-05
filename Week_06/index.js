
//在字符串里找到一个字符"a"
const getChart = str => str.split("").map((i, index) => (i === "a" ? index : null)).filter(i => i);

//在字符串中找到字符"ab"
const getChart2 = str => {
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === "a" && str[i] === "b") {
            return true;
        }
    }
    return false;
}

//在字符串中找到字符"abcdef"
const getChart3 = str => {
    let flag = 0;
    for (let c of str) {
        if (c === "a") {
            flag++;
        } else if (flag === 1 && c === "b") {
            flag++;
        } else if (flag === 2 && c === "c") {
            flag++;
        } else if (flag === 3 && c === "d") {
            flag++;
        } else if (flag === 4 && c === "e") {
            flag++;
        } else if (flag === 5 && c === "f") {
            return true;
        } else {
            flag = 0;
        }
    }
    return false;
}

//用状态机实现：字符串“abcabx”的解析
const getChart4 = str => {
    let state = start;
    for (let c of str) {
        state = state(c);
    }
    if (state === end) {
        console.log(true);
        return true;
    }
    console.log(false);
    return false;
}

function start(c) {
    if (c === "a") {
        return foundA;
    } else {
        return start;
    }
}

function end() {
    return end;
}

function foundA(c) {
    if (c === "b") {
        return foundB;
    } else {
        return start(c);
    }
}

function foundB(c) {
    if (c === "c") {
        return foundC;
    } else {
        return start(c);
    }
}

function foundC(c) {
    if (c === "a") {
        return foundA2;
    } else {
        return start(c);
    }
}

function foundA2(c) {
    if (c === "b") {
        return foundB2;
    } else {
        return start(c);
    }
}

function foundB2(c) {
    if (c === "x") {
        return end;
    } else {
        return foundB(c);
    }
}

//用状态机实现：字符串“abababx”的解析
const getChart5 = str => {
    let state = start;
    for (let c of str) {
        state = state(c);
    }
    if (state === end) {
        console.log(true);
        return true;
    }
    console.log(false);
    return false;
}

function start(c) {
    if (c === "a") {
        return foundA;
    } else {
        return start;
    }
}

function end() {
    return end;
}

function foundA(c) {
    if (c === "b") {
        return foundB;
    } else {
        return start(c);
    }
}

function foundB(c) {
    if (c === "a") {
        return foundA2;
    } else {
        return start(c);
    }
}

function foundA2(c) {
    if (c === "b") {
        return foundB2;
    } else {
        return start(c);
    }
}

function foundB2(c) {
    if (c === "a") {
        return foundA3;
    } else {
        return start(c);
    }
}

function foundA3(c) {
    if (c === "b") {
        return foundB3;
    } else {
        return start(c);
    }
}

function foundB3(c) {
    if (c === "x") {
        return end;
    } else {
        return foundB2(c);
    }
}

getChart5('abababbx');