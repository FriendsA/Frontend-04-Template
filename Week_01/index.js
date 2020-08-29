//棋盘 + 提示
const root = document.querySelector("#root");
let container = document.createElement("div");
let board = document.createElement("div");
board.setAttribute("class", "winner");
let next = document.createElement("div");
let span = document.createElement("span");
next.setAttribute("class", "next");
span.setAttribute("class", "next-player");
span.textContent = "X";
next.textContent = "下一位：";
next.appendChild(span);
container.setAttribute("class", "container");
for (let i = 0; i < 9; i++) {
    let item = document.createElement("div");
    item.setAttribute("class", "item");
    container.appendChild(item);
}
root.appendChild(container);
root.appendChild(next);
root.appendChild(board);
//落子
let flag = "X";

function bindHandle() {
    document.querySelectorAll(".item").forEach((value, key) => {
        value.addEventListener("click", listener);
    });
}
bindHandle();

function listener(event) {
    if (!this.textContent) {
        //落子
        this.textContent = flag;
        //找赢家
        let arr = [];
        document.querySelectorAll(".item").forEach((value, index) => {
            if (value.textContent === flag) {
                arr.push(index + 1);
            }
        });
        let winner = win(flag, arr);
        if (winner) {
            document.querySelector(".winner").textContent = "胜利者: " + winner;
            setBtn();
            document.querySelectorAll(".item").forEach((value, index) => {
                value.removeEventListener("click", listener);
            });
        }
        //判断平棋
        if (
            Array.prototype.filter.call(
                document.querySelectorAll(".item"),
                (i) => !i.textContent
            ).length === 0
        ) {
            document.querySelector(".winner").textContent = "平棋";
            setBtn();
        }
        flag = flag === "X" ? "O" : "X";
        document.querySelector(".next-player").textContent = flag;
        //预测下一步
        nextTap(flag);
    }
}
//重置按钮
function setBtn() {
    let btn = document.createElement("button");
    btn.textContent = "重置";
    btn.setAttribute("style", "margin-left:10px");
    btn.onclick = function () {
        document.querySelector(".winner").textContent = "";
        document.querySelector(".next-player").textContent = "X";
        flag = "X";
        document.querySelectorAll(".item").forEach((value, index) => {
            value.textContent = "";
        });
        bindHandle();
    };
    document.querySelector(".winner").appendChild(btn);
}
//胜利条件
function win(flag, arr) {
    const winArr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ];
    let winner = null;
    for (let i of winArr) {
        if (arr.includes(i[0]) && arr.includes(i[1]) && arr.includes(i[2])) {
            winner = flag;
            return winner;
        }
    }
    return winner;
}

//预测下一步
function nextTap(flag) {
    let arr = [], itemArr = [];
    document.querySelectorAll(".item").forEach((value, key) => {
        if (!value.textContent) {
            arr.push(key + 1);
        }
        if (value.textContent === flag) {
            itemArr.push(key + 1);
        }
    });
    for (let i of arr) {
        let tempArr = itemArr.concat([i]);
        let winner = win(flag, tempArr);
        if (winner) {
            return i;
        }
    }
    return null;
}


//最好的选择
function besWay(flag) {
    let p = nextTap(flag);
    if (p !== null) {
        return {
            point: p,
            result: 1,
        }
    }
    let result = -2;
    let point = null;
    document.querySelectorAll(".item").forEach((value, key) => {
        if (value.textContent) {
            return;
        }
        //因为是操作的实体所以没办法模拟下去了，除非创建虚拟dom来使用 ai使用失败了
    });
}