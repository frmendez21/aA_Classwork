class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.count = 0;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.el.on("click", "li", (e) => {
      let pos = $(e.target).attr("pos")
      pos = pos.split(",").map(x => Number(x))
      try {
        $(e.target).append(this.game.currentPlayer)
        this.game.playMove(pos)
      } catch(err) {
        alert(err.msg)
        return
      }
      $(e.target).css("background-color", "white")
      this.makeMove()
    })
  }

  makeMove() {
    let winner = this.game.winner()

    if (this.game.isOver() && winner && this.count === 0) {
      $(`<p>You win, ${winner}</p>`).appendTo($("ul"))
      this.count += 1
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
