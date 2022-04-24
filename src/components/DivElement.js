// Import HTMLElement here
import HTMLElement from './HTMLElement'

// Define class here
class DivElement extends HTMLElement {
    constructor(content) {
        super('div', content);
    }
    
    render(){
        // Instructions unclear.
        // Sounds like this is what you want:
        return `<${this.tag}>${this.content}</${this.tag}>`;

        // Easier if it was
        // return super.render();
    }
}

// Export class here
export default DivElement;