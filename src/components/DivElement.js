// Import HTMLElement here
import HTMLElement from './HTMLElement';

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    /* this line refers to the HTMLElement Class */
    /* meaning that it's invoking it with the set parameters */
    super('div', content);
  }
}

// const newDiv = new DivElement('Hello World!');
// console.log(newDiv.render());

// Export class here
export default DivElement;
