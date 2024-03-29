//CLOCK

class Clock {
    constructor () {
        let date = new Date();  
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.printTime();
        setInterval(() => {
            this._tick();
        },1000);
    }
    printTime() {
        let dateString = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(dateString);
    }
    _tick() {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours += 1;
                this.hours %= 24;
            }
        }
        this.printTime(); 
    }
}

// let clock = new Clock();

// addNumbers

const readline = require('readline');

const reader = readline.createInterface({
    // it's okay if this part is magic; it just says that we want to
    // 1. output the prompt to the standard output (console)
    // 2. read input from the standard input (again, console)

    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question('Enter a number: ', function (input) {
            const num = parseInt(input);
            sum += num;
            console.log(sum); 
            addNumbers(sum, numsLeft - 1, completionCallback);
        });
    } else if (numsLeft === 0) {
        completionCallback(sum);
        reader.close();
    }
};
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`is ${el1} > ${el2}?`, function (input) {
        if (input === 'yes') {
            callback(true);
        } else if (input === 'no') {
            callback(false);
        }
    });
};
function innerBubbleSortLoop(arr, i, madeAnyswaps, outerBubbleSortLoop) {
    // madeAnyswaps = false;
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
            if (isGreaterThan) {
                madeAnyswaps = true;
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
            innerBubbleSortLoop(arr, i + 1, madeAnyswaps, outerBubbleSortLoop)
        });
    } else {
        outerBubbleSortLoop(madeAnyswaps);
    }
};

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps === true) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
    }

    outerBubbleSortLoop(true);
    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
// });

// myBind

Function.prototype.myBind = function(context) {
    debugger
    return () => {
        that.apply(context)
    }
};

// Below is alternative way that we should never do after the test
// Function.prototype.myBind = function(context) {
//     debugger
//     let that = this
//     return function() {
//         that.apply(context)
//     }
// };

Function.prototype.myThrottle = function(intv) {
    let tooSoon = false;
    return () => { 
        if (tooSoon === false) {
            tooSoon = true;
            setTimeout( () => {
            tooSoon = false;
            }, intv);
                // debugger
            this();
        
        }
    }
};

// Function.prototype.myDebounce = function(interval) {
//   let timeout = 0;
//   const debounced = () => {
//     timeout += inteveral;
//   };
//   return setTimeout(function () {
//     debounced();
//   }, interval);
//   // when invoked set a timeout that invoke soriginal func after intv if invoked early reset timeout
// };

// class SearchBar {
//   constructor() {
//     this.query = "";

//     this.type = this.type.bind(this);
//     this.search = this.search.bind(this);
//   }

//   type(letter) {
//     this.query += letter;
//     this.search();
//   }

//   search() {
//     console.log(`searching for ${this.query}`);
//   }
// }
// const searchBar = new SearchBar();

// const queryForHelloWorld = () => {
//   searchBar.type("h");
//   searchBar.type("e");
//   searchBar.type("l");
//   searchBar.type("l");
//   searchBar.type("o");
//   searchBar.type(" ");
//   searchBar.type("w");
//   searchBar.type("o");
//   searchBar.type("r");
//   searchBar.type("l");
//   searchBar.type("d");
// };

// queryForHelloWorld();
// searchBar.search = searchBar.search.myDebounce(500);
