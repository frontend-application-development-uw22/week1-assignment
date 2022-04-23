// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

// const p = new HTMLElement('p','heyyyy');
// console.log(p.render());

// console.log(p);
// Export class here
export default HTMLElement;
