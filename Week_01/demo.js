const pattern = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let color = 1;

function show() {
    let board = document.querySelector("#root");
    board.childNodes.forEach(value => value.remove());
    let box = document.createElement("div");
    box.classList.add("container");
    for (let i = 0; i < 9; i++) {
        let cell = document.createElement("div");
        cell.classList.add("item");
        cell.textContent = pattern[i] === 1 ? "❌" : pattern[i] === 2 ? "⭕️" : " "
        cell.addEventListener("click", () => useMove(i));
        box.appendChild(cell);
    }
    board.appendChild(box);
}

function showSome(i, color) {
    document.querySelectorAll("item").forEach((value, index) => {
        if (index === i) {
            value.textContent = color === 1 ? "❌" : "⭕️";
        }
    })
}

function useMove(i) {
    if (pattern[i]) {
        return;
    }
    pattern[i] = color;
    if (check(pattern, color)) {
        console.log(color)
    };
    color = 3 - color;
    computerMore();
    // show();
    showSome(i, 3 - color);
}


function computerMore() {
    let choice = bestchoice(pattern, color);
    if (choice.point !== null) {
        pattern[choice.point] = color;
    }
    if (check(pattern, color)) {
        console.log(color)
    }
    color = 3 - color;
    // show()
    show(choice.point, 3 - color);
}

function check(pattern, color) {

    for (let j = 0; j < 3; j++) {
        let win = true;
        for (let i = 0; i < 3; i++) {
            if (pattern[i + j * 3] !== color) {
                win = false;
            }
        }
        if (win) {
            return true;
        }
    }

    for (let j = 0; j < 3; j++) {
        let win = true;
        for (let i = 0; i < 3; i++) {
            if (pattern[j + i * 3] !== color) {
                win = false;
            }
        }
        if (win) {
            return true;
        }
    }
    {
        let win = true;
        for (let i = 0; i < 3; i++) {
            if (pattern[i * 3 + i] !== color) {
                win = false;
            }
        }
        if (win) {
            return true;
        }
    }
    {
        let win = true;
        for (let i = 0; i < 3; i++) {
            if (pattern[2 * i + 2] !== color) {
                win = false;
            }
        }
        if (win) {
            return true;
        }
    }
    return false;
}


function clone(pattern) {
    return Object.create(pattern);
}

function willwin(pattern, color) {
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i]) {
            continue;
        }
        let temp = clone(pattern);
        temp[i] = color;
        if (check(temp, color)) {
            return i;
        }
    }
    return null;
}


function bestchoice(pattern, color) {
    let p = willwin(pattern, color);
    if (p !== null) {
        return {
            point: p,
            result: 1,
        }
    }
    let result = -2;
    let point = null;
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i]) {
            continue;
        }
        let temp = clone(pattern);
        temp[i] = color;
        let r = bestchoice(temp, 3 - color).result;

        if (-r > result) {
            result = -r;
            point = i;
        }

        if (result === 1) {
            break;
        }
    }

    return {
        point: point,
        result: point !== null ? result : 0
    }
}

show();
