// Import HTMLElement here
import HTMLElement from './HTMLElement';

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

// let div1 = new DivElement('test');
// console.log(div1);
// console.log(div1.render());
// Export class here
export default DivElement;
