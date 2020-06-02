class Hangman {
  constructor() {
    this.words = ['ironhack', 'developer', 'wizard', 'programming'];
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.letters = [];
    this.guessedLetter = '';
    this.wrongLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90 ? true : false;
  }

  checkClickedLetters(key) {
    if (!this.letters.includes(key)) {
      this.letters.push(key);
      return true;
    }
    return false;
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.letters[i];
  }

  addWrongLetter(letter) {
    return !this.secretWord.includes(letter) ? this.errorsLeft-- : '';
  }

  checkGameOver() {
    return this.errorsLeft === 0 ? true : false;
  }

  checkWinner() {
    return this.secretWord.length === this.guessedLetter.length ? true : false;
  }
}

// document.getElementById('start-game-button').onclick = () => {
// };

let hangman = new Hangman();
document.onkeydown = (e) => {
  // console.log(event.key);
  hangman.checkIfLetter(e.keyCode);
  hangman.checkClickedLetters(`${event.key}`);
  hangman.addCorrectLetter(event.key);
  hangman.addWrongLetter(event.key);
};
