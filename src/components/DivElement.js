// Import HTMLElement here
 import HTMLElement from "./HTMLElement";

// Define class here
class DivElement extends HTMLElement{
   
    constructor (content){
        
        super(content);
        this.tag = "div"
        this.content = content;
        console.log(this);
       
    }
    
    render(){
        return `<div>${this.content}</div>`
    }
   

}
// Export class here
export {
    HTMLElement,
    DivElement
}

const andIThinkToMyself = new DivElement('What a wonderful world');

console.log(andIThinkToMyself.render());