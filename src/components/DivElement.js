// Import HTMLElement here
import HTMLElement from "./HTMLElement";

// Define class here
class DivElement extends HTMLElement {
    constructor(content) {
        super('div', content);
        this.content = content;
      }
  
      render() {
          return `<div>${this.content}</div>`;
      }
}

const andIThinkToMyself = new DivElement('What a wonderful world');

console.log(andIThinkToMyself.render());
// Export class here
export default DivElement;
