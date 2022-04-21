import HTMLElement from './HTMLElement.js';

class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
  render(){
    return `${this.content}`;
  }
}
const andIThinkToMyself = new DivElement('What a wonderful world');

console.log(andIThinkToMyself.render());
