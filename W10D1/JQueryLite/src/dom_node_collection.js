export default class DOMNodeCollection {
    constructor (elements) {
        this.elements = elements;
    };

    html (str) {
        if (!str) return this.elements[0].innerHTML;
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].innerHTML = str;
        };
    };

    empty () {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].innerHTML = "";
        };
    };

    append(arg) {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].innerHTML += arg;
        };
    };

    addClass(name) {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].className = name;
        };
    };

    removeClass(name) {
        if (!name) {
            for (let i = 0; i < this.elements.length; i++) {
                this.elements[i].className = "";
            };
        } else {
            for (let i = 0; i < this.elements.length; i++) {
                if (this.elements[i].className === name) {
                    this.elements[i].className = "";
                }
            };
        }
    };

    attr(name, value) {
        if (!value) return this.elements[0].getAttribute(name);
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].setAttribute(name, value);
        };
    };

    children() {
        let childrenArr = [];
        for (let i = 0; i < this.elements.length; i++) {
            childrenArr.push(this.elements[i].children);
        };
        return new DOMNodeCollection(childrenArr);
    }
};