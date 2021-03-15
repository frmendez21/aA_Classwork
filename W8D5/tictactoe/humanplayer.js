class HumanPlayer {
    constructor() {
        this.symbol = '';
    }

    getSymbol(reader, callback) {
        reader.question('Enter symbol: ', input => {
            this.symbol = input;
            callback();
        });
    }
}

module.exports = HumanPlayer;