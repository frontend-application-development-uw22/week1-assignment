// Import HTMLElement here

import HTMLElement from './HTMLElement.mjs';

// Define class here

class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
    this.tag = 'div';
    this.content = content;
  }
}

// Export class here

export default DivElement;
