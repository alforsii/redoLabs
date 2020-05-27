const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', event => {
  let html = '';
  memoryGame.shuffleCards()
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  let indexes = []
  const intervalId = setInterval(() => {
     if(memoryGame.isFinished()) {
        confirm(`You won with ${memoryGame.pairsClicked} pairs of clicks!!!👍.Do you wanna play again?`) ? location.reload() : ''
        clearInterval(intervalId)
        return
      }

    if(memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0]
        const card2 = memoryGame.pickedCards[1]
        const pair = memoryGame.checkIfPair(card1,card2)
        if(pair) {
          memoryGame.pickedCards = []
          indexes = []
        } else {
          setTimeout(() => {
            indexes.forEach(index => {
              document.querySelectorAll('.card')[index].classList.remove('turned')
            })
            memoryGame.pickedCards = []
            indexes = []
          }, 500)
        }
    }

    document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed
    document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked
  }, 1000)

  document.querySelectorAll('.card').forEach((card, i) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      if(memoryGame.pickedCards.length < 2) {
        card.classList.add('turned')
        indexes.push(i)
        memoryGame.pickedCards.push(card.getAttribute('data-card-name'))
      }
    });
  });
});
