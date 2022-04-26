// Import HTMLElement here
import HTMLElement from './HTMLElement';
// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
  }

  render() {
    const { content } = this;
    const renderElement = `<div>content</div>`;
    return renderElement;
  }
}
// Export class here
export default DivElement;
