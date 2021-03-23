import DOMNodeCollection from "./dom_node_collection"

window.$1 = (arg) => {
    
    let nodeList = document.querySelectorAll(arg);
    let array = Array.from(nodeList)
   
    if (array[0] instanceof HTMLElement) {
        return new DOMNodeCollection(array);
    } 
};
