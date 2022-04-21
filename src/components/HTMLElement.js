// Define class here
class HTMLElement {
    constructor (tag,content) {
        this.tag = tag;
        this.content = content;
    }
     render = function() {
        return (`<${this.tag}>${this.content}</${this.tag}>`);
    }
}
// Export class here
export default HTMLElement;

const lovelaceQauote = new HTMLElement('p','I am never so happy as when I am really engaged in good earnest...');
console.log(lovelaceQauote.render());
