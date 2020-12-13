import { Component, STATE, ATTRIBUTES, createElement } from "./framework";
import { enableGestrue } from './gesture';
import { Timeline, Animation } from './animation';

export { STATE, ATTRIBUTES } from "./framework";

export class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.children = this[ATTRIBUTES].data.map(this.template);
        this.root = (<div >{this.children}</div>).render();
        return this.root;
    }

    appendChild(child) {
        this.template = (child);
    }
}

