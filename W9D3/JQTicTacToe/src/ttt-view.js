class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.hasWon = false;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.el.on("click", "li", (e) => {
      let pos = $(e.target).attr("pos");
      pos = pos.split(",").map(x => Number(x));
      const currentPlayer = this.game.currentPlayer;
      try {
        this.game.playMove(pos);
      } catch(err) {
        alert(err.msg);
        return;
      }
      $(e.target).append(currentPlayer);
      if (currentPlayer === 'x') {
        $(e.target).css("background-color", "blue");
      } else {
        $(e.target).css("background-color", "green");
      }
      this.checkWinner();
    })
  }

  checkWinner() {
    const winner = this.game.winner()
    let $winnerMessage = $(`<p>PLAYER ${winner.toUpperCase()} WINS!</p>`)
    if (winner && !this.hasWon) {
      if (winner === 'x') {
        $winnerMessage.css('color', 'blue')
      } else {
        $winnerMessage.css('color', 'green')
      }
      $("body").append($winnerMessage);
      this.hasWon = true;
    }
  }

  setupBoard() {
    let ul = $("<ul></ul>");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = $("<li id=square></li>").attr("pos", [i, j])
        ul.append(li)
      }
    }
    this.el.append(ul)
  }
}

module.exports = View;
