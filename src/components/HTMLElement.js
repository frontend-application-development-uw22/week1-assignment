// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    const element = `<${this.tag}>${this.content}</${this.tag}>`;
    return element;
  }
}

// const test = new HTMLElement('h1', 'Hello World!');
// console.log(test.render());

// Export class here
export default HTMLElement;
