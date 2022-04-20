// Import HTMLElement here

import { HTMLElement } from "./HTMLElement.js";

// Define class here

class DivElement extends HTMLElement {
    constructor ( content ) {
        super();
        this.content = content;
    }
    render(tag, content) {
        super.render();
    }
}

// Export class here

export {DivElement};