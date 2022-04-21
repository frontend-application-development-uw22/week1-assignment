// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    const htmlelement = `<${this.tag}>${this.content}</${this.tag}>`;
    console.log(htmlelement);
    return htmlelement;
  }
}

// Export class here
export default HTMLElement;
