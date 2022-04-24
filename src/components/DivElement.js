import HTMLElement from "./HTMLElement.js";

console.log(HTMLElement); //
class DivElement extends HTMLElement { //ESLint
  constructor(content) {
    super('div', content);
  }
  render() {
    return `${this.content}`;
  }
}
const andIThinkToMyself = new DivElement('What a wonderful world');

console.log(andIThinkToMyself.render());
