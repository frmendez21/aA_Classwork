const range = (start, end) => {
    if (start === end) {
        return [start];
    }
    let next = range(start, end - 1);
    next.push(end);
    return next;
    // if (start === end) {
    //     return end;
    // } else {
    //     return [start].concat(range(start + 1, end));
    // }
}

// console.log(range(2, 6));

const sumRec = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumRec(arr.slice(1));
}

// console.log(sumRec([1, 2, 3, 4]))

const exponent = (base, exp) => {
    if (exp === 0) {
        return 1;
    }
    return base * exponent(base, exp - 1);
}

// console.log(exponent(2, 3))

const exponent2 = (base, exp) => {
    if (exp === 0) {
        return 1;
    } else if (exp === 1) {
        return base;
    }
    if (exp % 2 === 0) {
        return exponent2(base, exp / 2) ** 2;
    } else {
        return base * exponent2(base, (exp -1) / 2) ** 2;
    }
}

// console.log(exponent2(2, 3));

const fibonacci = (n) => {
    if (n === 1) {
        return [1];
    } else if (n === 2) {
        return [1, 1];
    }
    let last = fibonacci(n - 1);
    last.push(last[last.length - 1] + last[last.length - 2]);
    return last
}
// console.log(fibonacci(5));

const deepDup = (arr) => {
    if (!(arr instanceof Array)) {
        return arr;
    }
    return arr.map(ele => deepDup(ele));
}
// let array = [[3], 4, [5, 6]];
// let copy = deepDup(array) // 
// copy[0][0] = 2; 
// console.log(array);
// console.log(copy); // [[2], 4, [5, 6] ]

const bsearch = (arr, target) => {
    if (arr.length === 0) {
        return -1;
    }
    let mid = Math.floor(arr.length / 2);
    let value = arr[mid];
    if (target === value) {
        return mid;
    } else if (target > value) {
        if (bsearch(arr.slice(mid + 1, target) === -1)) {
            return -1;
        }
        return mid + 1 + bsearch(arr.slice(mid + 1), target);
    } else {
        return bsearch(arr.slice(0, mid), target);
    }
}
console.log(bsearch([1, 2, 3, 4, 5, 6], 7))



// if (arr.length === 0) {
//         return -1;
//     }
//     let mid = Math.floor(arr.length / 2);
//     let value = arr[mid];
//     if (target === value) {
//         return mid;
//     } else if (target > value) {
//         let right = bsearch(arr.slice(mid + 1), target)
//         return right === -1 ? -1 : mid + 1 + right;
//     } else {
//         return bsearch(arr.slice(0, mid), target);
//     }