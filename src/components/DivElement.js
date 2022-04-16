// Import HTMLElement here
import HTMLElement from './HTMLElement';

class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
    this.content = content;
  }
}
// Export class here
export default DivElement;
