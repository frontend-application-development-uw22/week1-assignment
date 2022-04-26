// Import HTMLElement here
import HTMLElement from './HTMLElement';

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super();
    super.tag = 'div';
    this.content = content;
  }

  render() {
    return super.render();
  }
}

// Export class here
export default DivElement;
