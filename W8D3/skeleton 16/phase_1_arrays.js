Array.prototype.uniq = function() {
    let new_arr = [];
    for(let i = 0; i < this.length; i++) {
        if(!new_arr.includes(this[i])) {
        //if(new_arr.indexOf(this[i]) === -1) {
            new_arr.push(this[i]);
        }
    }
    return new_arr; 
}

//console.log([1,2,2,3].uniq());

Array.prototype.twoSum = function() {
    let new_arr = [];
    for(let i = 0; i < this.length; i++) {
        for(let j = i + 1; j < this.length; j++) {
            if(this[i] + this[j] === 0) {
                new_arr.push([i,j]);
            }
        }
    }
    return new_arr;
}

//console.log([-2,-1,0,1,2].twoSum());

Array.prototype.transpose = function() {
    let new_arr = [];
    for(let i = 0; i < this[0].length; i++) {
        let inner_arr = [];
        for(let j = 0; j < this.length; j++) {
            inner_arr.push(this[j][i]);
        }
        new_arr.push(inner_arr);
    }
    return new_arr; 
}

console.log([[1,2,3],[4,5,6]].transpose());

