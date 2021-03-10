Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
} 
// [1, 2, 3].myEach(num => console.log(num + num));

Array.prototype.myMap = function (callback) {
    let newArr = [];
    this.myEach(ele => newArr.push(callback(ele)));
    return newArr;
}
// console.log(array.myMap(num => num + num));

Array.prototype.myReduce = function (callback, initialVal) {
    let arr = this
    if (initialVal === undefined) {
        initialVal = arr[0];
        arr = arr.slice(1);
    }
    let acc = initialVal
    arr.myEach(ele => acc = callback(acc, ele));
    return acc;
}
// console.log(array.myReduce((acc, el) => acc + el, 2));

let array = [1, 2, 3]
console.log(array.myReduce(function(acc, el) {
    return acc + el;
}));

