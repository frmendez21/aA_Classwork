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
        let right = bsearch(arr.slice(mid + 1), target)
        return right === -1 ? -1 : mid + 1 + right;
    } else {
        return bsearch(arr.slice(0, mid), target);
    }
}
// console.log(bsearch([1, 2, 3, 4, 5, 6], 7))

const mergesort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    let sortedLeft = mergesort(left);
    let sortedRight = mergesort(right);
    return merge(sortedLeft, sortedRight)
};

const merge = (left, right) => {
    let result = [];
    while (left.length > 0 || right.length > 0) {
        if (left[0] < right[0] || right == false) {
            result.push(left.shift());
        } else if (left[0] > right[0] || left == false) {
            result.push(right.shift());
        }
    }
    return result;
};

// console.log(mergesort([5, 3, 7, 2, -1, -9]))

const subsets = (arr) => {
    if (arr.length === 1) {
        return arr;
    };
    let first = arr.shift()
    let last = arr.pop()
    arr.push(last, first)
    return [first].concat([subsets(arr.slice(1))])
};

console.log(subsets([1, 2, 3]))

