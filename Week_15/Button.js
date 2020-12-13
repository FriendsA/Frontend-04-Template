import { Component, STATE, ATTRIBUTES, createElement } from "./framework";
import { enableGestrue } from './gesture';
import { Timeline, Animation } from './animation';

export { STATE, ATTRIBUTES } from "./framework";

export class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.childContainer = <span />;
        this.root = (<div >{this.childContainer}</div>).render();
        return this.root;
    }

    appendChild(child) {
        if (!this.childContainer) {
            this.render();
        }
        this.childContainer.appendChild(child);
    }
}

