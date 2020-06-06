const cards = document.querySelectorAll('.memory-card');

let hasCardFlipped = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');

  if (!hasCardFlipped ) {
    // first click
    hasCardFlipped  = true;
    firstCard = this;
  } else {
    // second click
    hasCardFlipped  = false;
    secondCard = this;

    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      // if it matches
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
    } else {
      // if it doesn't match
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
      }, 1500);
    }
  }
}

(function shuffleCards() {
  cards.forEach(card => {
  let randomShuffle = Math.floor(Math.random() * 12);
  card.style.order = randomShuffle;
  });
})()

cards.forEach(card => card.addEventListener('click', flipCard));