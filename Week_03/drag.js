let dragBox = document.querySelector(".drag-box");

// let indexX = 0, indexY = 0;

dragBox.addEventListener("mousedown", function (eve) {

    // let startX = eve.clientX, startY = eve.clientY;

    let up = event => {
        // indexX = indexX + event.clientX - startX;
        // indexY = indexY + event.clientY - startY;
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
    }

    let move = (event) => {
        // dragBox.style.transform = `translate(${indexX + event.clientX - startX}px,${indexY + event.clientY - startY}px)`
        let range = nearest(event.clientX, event.clientY);
        range.insertNode(dragBox);
    }

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);

})

let ranges = [];
let container = document.getElementById("container");

for (let i = 0; i < container.childNodes[0].textContent.length; i++) {
    let range = document.createRange();
    range.setStart(container.childNodes[0], i);
    range.setEnd(container.childNodes[0], i);
    ranges.push(range);
}


function nearest(x, y) {
    let min = Infinity;
    let minRange = null;
    for (let i of ranges) {
        let rect = i.getBoundingClientRect();
        let distance = (rect.x - x) ** 2 + (rect.y - y) ** 2;
        if (distance < min) {
            min = distance;
            minRange = i;
        }
    }
    return minRange;
}

document.addEventListener("selectstart", event => event.preventDefault());