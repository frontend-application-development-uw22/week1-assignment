// Define class here
class HTMLElement{
    constructor (tag,content){
        this.tag = tag;
        this.content = content;
    }

    render (){
        return `<p>${this.content}</p>`;
    }
}
// Export class here
export default HTMLElement;

const lovelaceQauote = new HTMLElement('p','I am never so happy as when I am really engaged in good earnest...');
console.log(lovelaceQauote.render());
