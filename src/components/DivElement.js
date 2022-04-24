// Import HTMLElement here

import HTMLElement from './HTMLElement';

// Define class here

class DivElement extends HTMLElement {
  constructor(content) {
    super();
    this.tag = 'div';
    this.content = content;
  }
}

// Export class here

export default DivElement;
