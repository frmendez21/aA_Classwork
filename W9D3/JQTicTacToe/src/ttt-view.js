class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;

    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let ul = $("<ul></ul>");
    let lis = $("<li></li><li></li><li></li>");
    ul.append(lis);
    this.el.append(ul)
  }
}

module.exports = View;
