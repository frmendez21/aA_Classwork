Array.prototype.bubbleSort = function() {
    let isSorted = false; 
    while(!isSorted) {
        isSorted = true;
        for(let i = 0; i < this.length - 1; i++) {
            if(this[i] > this[i + 1]) {
                [this[i], this[i+1]] = [this[i+1], this[i]];
                isSorted = false;
            }
        }
    }
    return this;
}

let arr = [3,2,3];
// console.log(arr.bubbleSort());

String.prototype.substrings = function() {
    let newArr = [];
    // for(let i = 0; i < this.length; i++) {
    //     for(let j = i; j < this.length; j++) {
    //         if(i === 0) {
    //             newArr.push(this.slice(i, j));
    //         }else if(!newArr.includes(this.slice(i, j + 1))){
    //             newArr.push(this.slice(i, j + 1));
    //         }
    //     }
    // }
    for(let i = 0; i < this.length; i++) {
        for(let j = i; j <= this.length; j++) {
            if(!newArr.includes(this.slice(i, j))) {
                newArr.push(this.slice(i, j));
            }
        }
    }
    return newArr;
}

let s = "abbc";
console.log(s.substrings());



