class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.hangman = new Hangman();
  }

  getWord() {}

  createBoard() {}

  drawLines() {}

  writeCorrectLetter(index) {}

  writeWrongLetter(letter, errorsLeft) {}

  drawHangman(shape) {}

  gameOver() {}

  winner() {}
}
