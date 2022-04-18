import HTMLElement from './HTMLElement';

// DivElement /////////////////////////////////////////////////////////////////
// An HTML <div> and its inner [content].
class DivElement extends HTMLElement {
  // constructor ////////////////////////////////////////////////////////////
  // Constructs DivElement with given [content].
  constructor(content) {
    super();
    this.tag = 'div';
    this.content = content;
  }
}

export default { DivElement };
