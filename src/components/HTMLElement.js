// Define class here
// export default class HTMLElement {
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}
// Export class here
export default HTMLElement;
const elm = new HTMLElement('p', 'I am never so happy as when I am really engaged in good earnest...');
console.log(elm.render());
