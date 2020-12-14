export function createElement(type, attributes, ...children) {
    let element;
    if (typeof type === "string") {
        element = new ElementWrapper(type);
    } else {
        element = new type;
    }
    for (let name in attributes) {
        element.setAttribute(name, attributes[name]);
    }
    for (let child of children) {
        if (typeof child === "string") {
            child = new TextWrapper(child);
        }
        element.appendChild(child);
    }
    return element;
}

export class Component {

    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }

    appendChild(child) {
        child.mountTO(this.root);
    }

    mountTO(parent) {
        parent.appendChild(this.root);
    }
}

class TextWrapper extends Component{
    constructor(text) {
        this.root = document.createTextNode(text);
    }
}

class ElementWrapper extends Component{
    constructor(type) {
        this.root = document.createElement(type);
    }
}