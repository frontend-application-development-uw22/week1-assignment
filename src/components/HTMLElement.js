// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    const { tag, content } = this;
    const renderElement = `<p>content</p>`;
    return renderElement;
  }
}

const testing = new HTMLElement('tag2', 'content2');
testing.render();

// Export class here
export default HTMLElement;
