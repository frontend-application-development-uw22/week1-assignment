// HTMLElement ////////////////////////////////////////////////////////////////
// An HTML [tag] and its inner [content].
class HTMLElement {
  // constructor ////////////////////////////////////////////////////////////
  // Constructs HTMLElement with given [tag] and [content].
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  // render /////////////////////////////////////////////////////////////////
  // Returns a string with this HTMLElement's [content] wrapped in this
  // HTMLElement's [tag].
  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

export default HTMLElement;
