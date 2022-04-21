// Import HTMLElement here
 import HTMLElement from './HTMLElement';

// Define class here
class DivElement extends HTMLElement {
    constructor(content) {
        super('div',content);
        this.content = content;
    }
}
// Export class here
export {DivElement,HTMLElement};


// const andIThinkToMyself = new DivElement('What a wonderful world');

// console.log(andIThinkToMyself.render());