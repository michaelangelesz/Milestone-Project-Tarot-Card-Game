// create h1 element
const h1 = document.createElement("h1");
h1.textContent = "Consult the Cards";

// create div element
const div = document.createElement("div");

// create h3 element
const h3 = document.createElement("h3");
h3.innerHTML = `
  Focus on your question.
  <br />
  Thoughtfully set your intentions.
  <br />
  Click on the deck of cards to shuffle them.
  <br />
  Flip each card to reveal your tarot reading...
`;

// append h3 to div
div.appendChild(h3);

// append h1 and div to body
document.body.appendChild(h1);
document.body.appendChild(div);

// sound effects
const flipSound = new Audio("images/cardflip.mp3"); 
flipSound.volume = 0.2;
flipSound.playbackRate = 2;

const cardsRWS = [
  { name: "The Fool", imgSrc: "images/cardsRWS/0_theFool.jpeg", alt: "The Fool", },
  { name: "The Magician", imgSrc: "images/cardsRWS/1_theMagician.jpeg", alt: "The Magician", },
  { name: "The High Priestess", imgSrc: "images/cardsRWS/2_theHighPriestess.jpeg", alt: "The High Priestess", },
  { name: "The Empress", imgSrc: "images/cardsRWS/3_theEmpress.jpeg", alt: "The Empress", },
  { name: "The Emperor", imgSrc: "images/cardsRWS/4_theEmperor.jpeg", alt: "The Emperor", },
  { name: "The Hierophant", imgSrc: "images/cardsRWS/5_theHierophant.jpeg", alt: "The Hierophant", },
  { name: "The Lovers", imgSrc: "images/cardsRWS/6_theLovers.jpeg", alt: "The Lovers", }, 
  { name: "The Chariot", imgSrc: "images/cardsRWS/7_theChariot.jpeg", alt: "The Chariot", },
  { name: "Strength", imgSrc: "images/cardsRWS/8_Strength.jpeg", alt: "Strength", },
  { name: "The Hermit", imgSrc: "images/cardsRWS/9_theHermit.jpeg", alt: "The Hermit", },
  { name: "Wheel of Fortune", imgSrc: "images/cardsRWS/10_wheelOfFortune.jpeg", alt: "Wheel of Fortune", },
  { name: "Justice", imgSrc: "images/cardsRWS/11_Justice.jpeg", alt: "Justice", },
  { name: "The Hanged Man", imgSrc: "images/cardsRWS/12_theHangedMan.jpeg", alt: "The Hanged Man" },
  { name: "Death", imgSrc: "images/cardsRWS/13_Death.jpeg", alt: "Death", },
  { name: "Temperance", imgSrc: "images/cardsRWS/14_Temperance.jpeg", alt: "Temperance", },
  { name: "The Devil", imgSrc: "images/cardsRWS/15_theDevil.jpeg", alt: "The Devil", },
  { name: "The Tower", imgSrc: "images/cardsRWS/16_theTower.jpeg", alt: "The Tower", },
  { name: "The Star", imgSrc: "images/cardsRWS/17_theStar.jpeg", alt: "The Star", },
  { name: "The Moon", imgSrc: "images/cardsRWS/18_theMoon.jpeg", alt: "The Moon", },
  { name: "The Sun", imgSrc: "images/cardsRWS/19_theSun.jpeg", alt: "The Sun", },
  { name: "Judgment", imgSrc: "images/cardsRWS/20_Judgment.jpeg", alt: "Judgment", },
  { name: "The World", imgSrc: "images/cardsRWS/21_theWorld.jpeg", alt: "The World", },
  { name: "Ace of Wands", imgSrc: "images/cardsRWS/W_AceofWands.jpeg", alt: "Ace of Wands", },
  { name: "Two of Wands", imgSrc: "images/cardsRWS/W_2ofWands.jpeg", alt: "Two of Wands", },
  { name: "Three of Wands", imgSrc: "images/cardsRWS/W_3ofWands.jpeg", alt: "Three of Wands", },
  { name: "Four of Wands", imgSrc: "images/cardsRWS/W_4ofWands.jpeg", alt: "Four of Wands", },
  { name: "Five of Wands", imgSrc: "images/cardsRWS/W_5ofWands.jpeg", alt: "Five of Wands", },
  { name: "Six of Wands", imgSrc: "images/cardsRWS/W_6ofWands.jpeg", alt: "Six of Wands", },
  { name: "Seven of Wands", imgSrc: "images/cardsRWS/W_7ofWands.jpeg", alt: "Seven of Wands", },
  { name: "Eight of Wands", imgSrc: "images/cardsRWS/W_8ofWands.jpeg", alt: "Eight of Wands", },
  { name: "Nine of Wands", imgSrc: "images/cardsRWS/W_9ofWands.jpeg", alt: "Nine of Wands", },
  { name: "Ten of Wands", imgSrc: "images/cardsRWS/W_10ofWands.jpeg", alt: "Ten of Wands", },
  { name: "Page of Wands", imgSrc: "images/cardsRWS/W_PageofWands.jpeg", alt: "Page of Wands", },
  { name: "Knight of Wands", imgSrc: "images/cardsRWS/W_KnightofWands.jpeg", alt: "Knight of Wands", },
  { name: "Queen of Wands", imgSrc: "images/cardsRWS/W_QueenofWands.jpeg", alt: "Queen of Wands", },
  { name: "King of Wands", imgSrc: "images/cardsRWS/W_KingofWands.jpeg", alt: "King of Wands", },
  { name: "Ace of Cups", imgSrc: "images/cardsRWS/C_AceofCups.jpeg", alt: "Ace of Cups", },
  { name: "Two of Cups", imgSrc: "images/cardsRWS/C_2ofCups.jpeg", alt: "Two of Cups", },
  { name: "Three of Cups", imgSrc: "images/cardsRWS/C_3ofCups.jpeg", alt: "Three of Cups", },
  { name: "Four of Cups", imgSrc: "images/cardsRWS/C_4ofCups.jpeg", alt: "Four of Cups", },
  { name: "Five of Cups", imgSrc: "images/cardsRWS/C_5ofCups.jpeg", alt: "Five of Cups", },
  { name: "Six of Cups", imgSrc: "images/cardsRWS/C_6ofCups.jpeg", alt: "Six of Cups", },
  { name: "Seven of Cups", imgSrc: "images/cardsRWS/C_7ofCups.jpeg", alt: "Seven of Cups", },
  { name: "Eight of Cups", imgSrc: "images/cardsRWS/C_8ofCups.jpeg", alt: "Eight of Cups", },
  { name: "Nine of Cups", imgSrc: "images/cardsRWS/C_9ofCups.jpeg", alt: "Nine of Cups", },
  { name: "Ten of Cups", imgSrc: "images/cardsRWS/C_10ofCups.jpeg", alt: "Ten of Cups", },
  { name: "Page of Cups", imgSrc: "images/cardsRWS/C_PageofCups.jpeg", alt: "Page of Cups", },
  { name: "Knight of Cups", imgSrc: "images/cardsRWS/C_KnightofCups.jpeg", alt: "Knight of Cups", },
  { name: "Queen of Cups", imgSrc: "images/cardsRWS/C_QueenofCups.jpeg", alt: "Queen of Cups", },
  { name: "King of Cups", imgSrc: "images/cardsRWS/C_KingofCups.jpeg", alt: "King of Cups", },
  { name: "Ace of Swords", imgSrc: "images/cardsRWS/S_AceofSwords.jpeg", alt: "Ace of Swords", },
  { name: "Two of Swords", imgSrc: "images/cardsRWS/S_2ofSwords.jpeg", alt: "Two of Swords", },
  { name: "Three of Swords", imgSrc: "images/cardsRWS/S_3ofSwords.jpeg", alt: "Three of Swords", },
  { name: "Four of Swords", imgSrc: "images/cardsRWS/S_4ofSwords.jpeg", alt: "Four of Swords", },
  { name: "Five of Swords", imgSrc: "images/cardsRWS/S_5ofSwords.jpeg", alt: "Five of Swords", },
  { name: "Six of Swords", imgSrc: "images/cardsRWS/S_6ofSwords.jpeg", alt: "Six of Swords", },
  { name: "Seven of Swords", imgSrc: "images/cardsRWS/S_7ofSwords.jpeg", alt: "Seven of Swords", },
  { name: "Eight of Swords", imgSrc: "images/cardsRWS/S_8ofSwords.jpeg", alt: "Eight of Swords", },
  { name: "Nine of Swords", imgSrc: "images/cardsRWS/S_9ofSwords.jpeg", alt: "Nine of Swords", },
  { name: "Ten of Swords", imgSrc: "images/cardsRWS/S_10ofSwords.jpeg", alt: "Ten of Swords", },
  { name: "Page of Swords", imgSrc: "images/cardsRWS/S_PageofSwords.jpeg", alt: "Page of Swords", },
  { name: "Knight of Swords", imgSrc: "images/cardsRWS/S_KnightofSwords.jpeg", alt: "Knight of Swords", },  
  { name: "Queen of Swords", imgSrc: "images/cardsRWS/S_QueenofSwords.jpeg", alt: "Queen of Swords", },
  { name: "King of Swords", imgSrc: "images/cardsRWS/S_KingofSwords.jpeg", alt: "King of Swords", },
  { name: "Ace of Pentacles", imgSrc: "images/cardsRWS/P_AceofPentacles.jpeg", alt: "Ace of Pentacles", },
  { name: "Two of Pentacles", imgSrc: "images/cardsRWS/P_2ofPentacles.jpeg", alt: "Two of Pentacles", },
  { name: "Three of Pentacles", imgSrc: "images/cardsRWS/P_3ofPentacles.jpeg", alt: "Three of Pentacles", },
  { name: "Four of Pentacles", imgSrc: "images/cardsRWS/P_4ofPentacles.jpeg", alt: "Four of Pentacles", },
  { name: "Five of Pentacles", imgSrc: "images/cardsRWS/P_5ofPentacles.jpeg", alt: "Five of Pentacles", },
  { name: "Six of Pentacles", imgSrc: "images/cardsRWS/P_6ofPentacles.jpeg", alt: "Six of Pentacles", },
  { name: "Seven of Pentacles", imgSrc: "images/cardsRWS/P_7ofPentacles.jpeg", alt: "Seven of Pentacles", },
  { name: "Eight of Pentacles", imgSrc: "images/cardsRWS/P_8ofPentacles.jpeg", alt: "Eight of Pentacles", },
  { name: "Nine of Pentacles", imgSrc: "images/cardsRWS/P_9ofPentacles.jpeg", alt: "Nine of Pentacles", },
  { name: "Ten of Pentacles", imgSrc: "images/cardsRWS/P_10ofPentacles.jpeg", alt: "Ten of Pentacles", },
  { name: "Page of Pentacles", imgSrc: "images/cardsRWS/P_PageofPentacles.jpeg", alt: "Page of Pentacles", },
  { name: "Knight of Pentacles", imgSrc: "images/cardsRWS/P_KnightofPentacles.jpeg", alt: "Knight of Pentacles", },
  { name: "Queen of Pentacles", imgSrc: "images/cardsRWS/P_QueenofPentacles.jpeg", alt: "Queen of Pentacles", },
  { name: "King of Pentacles", imgSrc: "images/cardsRWS/P_KingofPentacles.jpeg", alt: "King of Pentacles", },
];

// deck of 5 cards overlaid each other
const section = document.createElement("section");

for (let i = 0; i < 5; i++) {
  const deckDiv = document.createElement("div");
  deckDiv.classList.add("deck");
  deckDiv.addEventListener("click", () => {
    location.reload();
  });
  section.appendChild(deckDiv);
}

document.body.appendChild(section);


// create main element
const mainElement = document.createElement("main");

// add "spread" class to main element
mainElement.classList.add("spread");

// create three cards with labels
const cards = ["past", "present", "future"];
for (let i = 0; i < cards.length; i++) {
  // create card element
  const card = document.createElement("div");
  card.classList.add("card");

  // create label element
  const label = document.createElement("div");
  label.classList.add("label");
  label.textContent = cards[i];

  // append label to card
  card.appendChild(label);

  // append card to main element
  mainElement.appendChild(card);
}

// add main element to the document
document.body.appendChild(mainElement); 

// add event listener to each card
const cardElements = document.querySelectorAll(".card");
cardElements.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    console.log("Card flipped!");
    flipSound.play();
    const randomIndex = Math.floor(Math.random() * cardsRWS.length);
    const randomCard = cardsRWS[randomIndex];
    card.style.backgroundImage = `url(${randomCard.imgSrc})`;
    card.querySelector(".label").textContent = "";
  });
});