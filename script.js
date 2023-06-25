const section = document.createElement("section");
section.classList.add("memory-game");

const h1 = document.createElement("h1");
const text1 = document.createTextNode("Lives: ");
const span = document.createElement("span");
span.classList.add("playerLivesCount");
span.textContent = "9";
h1.appendChild(text1);
h1.appendChild(span);

// Add the h1 to the DOM
document.body.appendChild(h1);

const cards = [
  {
    imgSrc: "images2/aquamarine.jpeg",
    name: "aquamarine",
    alt: "aquamarine crystal",
    "data-framework": "Aquamarine",
  },
  {
    imgSrc: "images2/aquamarine.jpeg",
    name: "aquamarine",
    alt: "aquamarine crystal",
    "data-framework": "Aquamarine",
  },
  {
    imgSrc: "images2/artist.jpeg",
    name: "artist",
    alt: "artist",
    "data-framework": "Artist",
  },
  {
    imgSrc: "images2/artist.jpeg",
    name: "artist",
    alt: "artist",
    "data-framework": "Artist",
  },
  {
    imgSrc: "images2/rainbow.jpeg",
    name: "rainbow concert",
    alt: "rainbow concert",
    "data-framework": "Rainbow",
  },
  {
    imgSrc: "images2/rainbow.jpeg",
    name: "rainbow concert",
    alt: "rainbow concert",
    "data-framework": "Rainbow",
  },
  {
    imgSrc: "images2/vinyl.jpeg",
    name: "vinyl",
    alt: "a record playing, photographed from above",
    "data-framework": "Vinyl",
  },
  {
    imgSrc: "images2/vinyl.jpeg",
    name: "vinyl",
    alt: "a record playing, photographed from above",
    "data-framework": "Vinyl",
  },
  {
    imgSrc: "images2/bee.jpeg",
    name: "bee",
    alt: "a bee pollinating a flower",
    "data-framework": "Bee",
  },
  {
    imgSrc: "images2/bee.jpeg",
    name: "bee",
    alt: "a bee pollinating a flower",
    "data-framework": "Bee",
  },
  {
    imgSrc: "images2/lights.jpeg",
    name: "lights",
    alt: "Lights",
    "data-framework": "Lights",
  },
  {
    imgSrc: "images2/lights.jpeg",
    name: "lights",
    alt: "Lights",
    "data-framework": "Lights",
  },
  {
    imgSrc: "images2/sea.jpeg",
    name: "sea",
    alt: "Sea Date",
    "data-framework": "Sea",
  },
  {
    imgSrc: "images2/sea.jpeg",
    name: "sea",
    alt: "Sea Date",
    "data-framework": "Sea",
  },
  {
    imgSrc: "images2/trees.jpeg",
    name: "trees",
    alt: "moody trees",
    "data-framework": "Trees",
  },
  {
    imgSrc: "images2/trees.jpeg",
    name: "trees",
    alt: "moody trees",
    "data-framework": "Trees",
  },
  {
    imgSrc: "images2/cactus.jpeg",
    name: "cactus",
    alt: "Cactus and moon",
    "data-framework": "Cactus",
  },
  {
    imgSrc: "images2/cactus.jpeg",
    name: "cactus",
    alt: "Cactus and moon",
    "data-framework": "Cactus",
  },
  {
    imgSrc: "images2/eclipse.jpeg",
    name: "eclipse",
    alt: "solar eclipse",
    "data-framework": "Eclipse",
  },
  {
    imgSrc: "images2/eclipse.jpeg",
    name: "eclipse",
    alt: "solar eclipse",
    "data-framework": "Eclipse",
  },
  {
    imgSrc: "images2/velveteen.jpeg",
    name: "velveteen",
    alt: "soft",
    "data-framework": "Velveteen",
  },
  {
    imgSrc: "images2/velveteen.jpeg",
    name: "velveteen",
    alt: "soft",
    "data-framework": "Velveteen",
  },
  {
    imgSrc: "images2/flower.jpeg",
    name: "flower",
    alt: "a pretty flower, close up",
    "data-framework": "flower",
  },
  {
    imgSrc: "images2/flower.jpeg",
    name: "flower",
    alt: "a pretty flower, close up",
    "data-framework": "flower",
  },
];

// Create a new array to store the flipped cards
let flippedCards = [];

for (let i = cards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [cards[i], cards[j]] = [cards[j], cards[i]];
}

for (let i = 0; i < cards.length; i++) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("memory-card");
  cardDiv.setAttribute("data-framework", cards[i]["data-framework"]);
  cardDiv.innerHTML = `
  <img class="front-face" src="${cards[i].imgSrc}" alt="${cards[i].alt}">
  <img class="back-face" src="images2/pink.jpeg" alt="card back">
  `;

  // Add event listener to flip the card on click
  cardDiv.addEventListener("click", function () {
    cardDiv.classList.toggle("flip");

    // Add the data-framework value of the flipped card to the array
    flippedCards.push(cardDiv.getAttribute("data-framework"));

    // Check for a match if two cards have been flipped
    if (flippedCards.length === 2) {
      if (flippedCards[0] === flippedCards[1]) {
        // The cards match
        console.log("Match!");
      } else {
        // The cards do not match
        console.log("No match.");
      }

      // Clear the array for the next pair of flipped cards
      flippedCards = [];
    }
  });

  section.appendChild(cardDiv);
}

document.body.appendChild(section);



// let intialFlip = false;
// let hasFlippedCard = false;
// let lockBoard = false;
// let firstCard, secondCard;

// function flipCard() {
//   if (!intialFlip) {
//     intialFlip = true;
//   }

//   // locks board so you can't click more than 2 cards at a time
//   if (lockBoard) return;
//   // prevents double clicking on the same card
//   if (this === firstCard) return;
//   this.classList.add("flip");
//   // first click
//   if (!hasFlippedCard) {
//     // first click
//     hasFlippedCard = true;
//     firstCard = this;
//     return;
//   }

//   // second click
//   secondCard = this;
//   checkForMatch();
// }

// let count = 0;

// function checkForMatch() {
//   // ternary operator is if/else statement in one line
//   let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
//   // condition ? true : false
//   isMatch ? disableCards() : unflipCards();

//   function disableCards() {
//     firstCard.removeEventListener("click", flipCard);
//     secondCard.removeEventListener("click", flipCard);
//     count++;
//     console.log("Function has been called " + count + " times.");
//     if (count === 12) {
//       winGame();
//     }
//     resetBoard();
//   }

//   function unflipCards() {
//     // lock the board
//     lockBoard = true;
//     setTimeout(() => {
//       firstCard.classList.remove("flip");
//       secondCard.classList.remove("flip");
//       // unlocks board after 1.5 seconds
//       resetBoard();
//     }, 1500);
//     playerLives--;
//     playerLivesCount.textContent = playerLives;
//     if (playerLives === 0)
//       setTimeout(() => {
//         gameOver();
//       }, 500);
//   }

//   function resetBoard() {
//     [hasFlippedCard, lockBoard] = [false, false];
//     [firstCard, secondCard] = [null, null];
//   }
// }

// (function shuffle() {
//   cards.forEach((card) => {
//     let randomPos = Math.floor(Math.random() * 18);
//     card.style.order = randomPos;
//   });
// })();

// // show message function
// function showMessage(text, buttonText) {
//   setTimeout(() => {
//     const messageDiv = document.createElement("div");
//     messageDiv.setAttribute("id", "message");
//     messageDiv.textContent = text;

//     // create play again button
//     const playAgainBtn = document.createElement("button");
//     playAgainBtn.textContent = buttonText;
//     playAgainBtn.addEventListener("click", () => {
//       newGame();
//       messageDiv.style.opacity = "0";
//       setTimeout(() => {
//         messageDiv.remove();
//       }, 300);
//     });

//     // add play again button to message div
//     messageDiv.appendChild(playAgainBtn);
//     document.body.appendChild(messageDiv);

//     // animate message div
//     messageDiv.style.opacity = "1";
//   }, 500);
// }

// function gameOver() {
//   lockBoard = true;
//   showMessage("Bummer! 😵‍💫 You lose!", "Try again");
// }

// function winGame() {
//   showMessage("Awesome! 🤘 You Rock!", "Play again");
//   console.log("Count has reached 12.");
// }

// function newGame() {
//   location.reload();
// }

// cards.forEach((card) => card.addEventListener("click", flipCard));
