import HTMLElement from './HTMLElement';
// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

// Export class here
export default DivElement;
const divElmt = new DivElement(`What a wonderful world`);
console.log(divElmt);
console.log(divElmt.render());
