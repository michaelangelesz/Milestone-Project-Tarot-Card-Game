// const cardsRWS = [
//   { name: "The Fool", imgSrc: "images/cardsRWS/0_theFool.jpeg", },
//   { name: "The Magician", imgSrc: "images/cardsRWS/1_theMagician.jpeg", },
//   { name: "The High Priestess", imgSrc: "images/cardsRWS/2_theHighPriestess.jpeg", },
//   { name: "The Empress", imgSrc: "images/cardsRWS/3_theEmpress.jpeg", },
//   { name: "The Emperor", imgSrc: "images/cardsRWS/4_theEmperor.jpeg", },
//   { name: "The Hierophant", imgSrc: "images/cardsRWS/5_theHierophant.jpeg", },
//   { name: "The Lovers", imgSrc: "images/cardsRWS/6_theLovers.jpeg", },
//   { name: "The Chariot", imgSrc: "images/cardsRWS/7_theChariot.jpeg", },
//   { name: "Strength", imgSrc: "images/cardsRWS/8_Strength.jpeg", },
//   { name: "The Hermit", imgSrc: "images/cardsRWS/9_theHermit.jpeg", },
//   { name: "Wheel of Fortune", imgSrc: "images/cardsRWS/10_wheelOfFortune.jpeg", },
//   { name: "Justice", imgSrc: "images/cardsRWS/11_Justice.jpeg", },
//   { name: "The Hanged Man", imgSrc: "images/cardsRWS/12_theHangedMan.jpeg", },
//   { name: "Death", imgSrc: "images/cardsRWS/13_Death.jpeg", },
//   { name: "Temperance", imgSrc: "images/cardsRWS/14_Temperance.jpeg", },
//   { name: "The Devil", imgSrc: "images/cardsRWS/15_theDevil.jpeg", },
//   { name: "The Tower", imgSrc: "images/cardsRWS/16_theTower.jpeg", },
//   { name: "The Star", imgSrc: "images/cardsRWS/17_theStar.jpeg", },
//   { name: "The Moon", imgSrc: "images/cardsRWS/18_theMoon.jpeg", },
//   { name: "The Sun", imgSrc: "images/cardsRWS/19_theSun.jpeg", },
//   { name: "Judgment", imgSrc: "images/cardsRWS/20_Judgment.jpeg", },
//   { name: "The World", imgSrc: "images/cardsRWS/21_theWorld.jpeg", },
//   { name: "Ace of Wands", imgSrc: "images/cardsRWS/W_AceofWands.jpeg", },
//   { name: "Two of Wands", imgSrc: "images/cardsRWS/W_2ofWands.jpeg", },
//   { name: "Three of Wands", imgSrc: "images/cardsRWS/W_3ofWands.jpeg", },
//   { name: "Four of Wands", imgSrc: "images/cardsRWS/W_4ofWands.jpeg", },
//   { name: "Five of Wands", imgSrc: "images/cardsRWS/W_5ofWands.jpeg", },
//   { name: "Six of Wands", imgSrc: "images/cardsRWS/W_6ofWands.jpeg", },
//   { name: "Seven of Wands", imgSrc: "images/cardsRWS/W_7ofWands.jpeg", },
//   { name: "Eight of Wands", imgSrc: "images/cardsRWS/W_8ofWands.jpeg", },
//   { name: "Nine of Wands", imgSrc: "images/cardsRWS/W_9ofWands.jpeg", },
//   { name: "Ten of Wands", imgSrc: "images/cardsRWS/W_10ofWands.jpeg", },
//   { name: "Page of Wands", imgSrc: "images/cardsRWS/W_PageofWands.jpeg", },
//   { name: "Knight of Wands", imgSrc: "images/cardsRWS/W_KnightofWands.jpeg", },
//   { name: "Queen of Wands", imgSrc: "images/cardsRWS/W_QueenofWands.jpeg", },
//   { name: "King of Wands", imgSrc: "images/cardsRWS/W_KingofWands.jpeg", },
//   { name: "Ace of Cups", imgSrc: "images/cardsRWS/C_AceofCups.jpeg", },
//   { name: "Two of Cups", imgSrc: "images/cardsRWS/C_2ofCups.jpeg", },
//   { name: "Three of Cups", imgSrc: "images/cardsRWS/C_3ofCups.jpeg", },
//   { name: "Four of Cups", imgSrc: "images/cardsRWS/C_4ofCups.jpeg", },
//   { name: "Five of Cups", imgSrc: "images/cardsRWS/C_5ofCups.jpeg", },
//   { name: "Six of Cups", imgSrc: "images/cardsRWS/C_6ofCups.jpeg", },
//   { name: "Seven of Cups", imgSrc: "images/cardsRWS/C_7ofCups.jpeg", },
//   { name: "Eight of Cups", imgSrc: "images/cardsRWS/C_8ofCups.jpeg", },
//   { name: "Nine of Cups", imgSrc: "images/cardsRWS/C_9ofCups.jpeg", },
//   { name: "Ten of Cups", imgSrc: "images/cardsRWS/C_10ofCups.jpeg", },
//   { name: "Page of Cups", imgSrc: "images/cardsRWS/C_PageofCups.jpeg", },
//   { name: "Knight of Cups", imgSrc: "images/cardsRWS/C_KnightofCups.jpeg", },
//   { name: "Queen of Cups", imgSrc: "images/cardsRWS/C_QueenofCups.jpeg", },
//   { name: "King of Cups", imgSrc: "images/cardsRWS/C_KingofCups.jpeg", },
//   { name: "Ace of Swords", imgSrc: "images/cardsRWS/S_AceofSwords.jpeg", },
//   { name: "Two of Swords", imgSrc: "images/cardsRWS/S_2ofSwords.jpeg", },
//   { name: "Three of Swords", imgSrc: "images/cardsRWS/S_3ofSwords.jpeg", },
//   { name: "Four of Swords", imgSrc: "images/cardsRWS/S_4ofSwords.jpeg", },
//   { name: "Five of Swords", imgSrc: "images/cardsRWS/S_5ofSwords.jpeg", },
//   { name: "Six of Swords", imgSrc: "images/cardsRWS/S_6ofSwords.jpeg", },
//   { name: "Seven of Swords", imgSrc: "images/cardsRWS/S_7ofSwords.jpeg", },
//   { name: "Eight of Swords", imgSrc: "images/cardsRWS/S_8ofSwords.jpeg", },
//   { name: "Nine of Swords", imgSrc: "images/cardsRWS/S_9ofSwords.jpeg", },
//   { name: "Ten of Swords", imgSrc: "images/cardsRWS/S_10ofSwords.jpeg", },
//   { name: "Page of Swords", imgSrc: "images/cardsRWS/S_PageofSwords.jpeg", },
//   { name: "Knight of Swords", imgSrc: "images/cardsRWS/S_KnightofSwords.jpeg", },
//   { name: "Queen of Swords", imgSrc: "images/cardsRWS/S_QueenofSwords.jpeg", },
//   { name: "King of Swords", imgSrc: "images/cardsRWS/S_KingofSwords.jpeg", },
//   { name: "Ace of Pentacles", imgSrc: "images/cardsRWS/P_AceofPentacles.jpeg", },
//   { name: "Two of Pentacles", imgSrc: "images/cardsRWS/P_2ofPentacles.jpeg", },
//   { name: "Three of Pentacles", imgSrc: "images/cardsRWS/P_3ofPentacles.jpeg", },
//   { name: "Four of Pentacles", imgSrc: "images/cardsRWS/P_4ofPentacles.jpeg", },
//   { name: "Five of Pentacles", imgSrc: "images/cardsRWS/P_5ofPentacles.jpeg", },
//   { name: "Six of Pentacles", imgSrc: "images/cardsRWS/P_6ofPentacles.jpeg", },
//   { name: "Seven of Pentacles", imgSrc: "images/cardsRWS/P_7ofPentacles.jpeg", },
//   { name: "Eight of Pentacles", imgSrc: "images/cardsRWS/P_8ofPentacles.jpeg", },
//   { name: "Nine of Pentacles", imgSrc: "images/cardsRWS/P_9ofPentacles.jpeg", },
//   { name: "Ten of Pentacles", imgSrc: "images/cardsRWS/P_10ofPentacles.jpeg", },
//   { name: "Page of Pentacles", imgSrc: "images/cardsRWS/P_PageofPentacles.jpeg", },
//   { name: "Knight of Pentacles", imgSrc: "images/cardsRWS/P_KnightofPentacles.jpeg", },
//   { name: "Queen of Pentacles", imgSrc: "images/cardsRWS/P_QueenofPentacles.jpeg", },
//   { name: "King of Pentacles", imgSrc: "images/cardsRWS/P_KingofPentacles.jpeg", },
// ];

// // deck of 5 cards overlaid each other
// const section = document.createElement("section");

// for (let i = 0; i < 5; i++) {
//   const deckDiv = document.createElement("div");
//   deckDiv.classList.add("deck");
//   section.appendChild(deckDiv);
// }

// document.body.appendChild(section);


// 3 cards in a row

const main = document.createElement("main");
main.classList.add("memory-game");
cards = [
  { imgSrc: "images/bboys.jpeg", name: "bboys", alt: "Paul's Boutique" },
  { imgSrc: "images/bboys.jpeg", name: "bboys", alt: "Paul's Boutique" },
  { imgSrc: "images/bjork.jpeg", name: "bjork", alt: "Debut" },
  { imgSrc: "images/bjork.jpeg", name: "bjork", alt: "Debut" },
  { imgSrc: "images/cure.jpeg", name: "cure", alt: "Three Imaginary Boys" },
  { imgSrc: "images/cure.jpeg", name: "cure", alt: "Three Imaginary Boys" },
  { imgSrc: "images/doors.jpeg", name: "doors", alt: "Morrison Hotel" },
  { imgSrc: "images/doors.jpeg", name: "doors", alt: "Morrison Hotel" },
  { imgSrc: "images/floyd.jpeg", name: "floyd", alt: "Dark Side Of The Moon" },
  { imgSrc: "images/floyd.jpeg", name: "floyd", alt: "Dark Side Of The Moon" },
  { imgSrc: "images/jimi.jpeg", name: "jimi", alt: "Electric Ladyland" },
  { imgSrc: "images/jimi.jpeg", name: "jimi", alt: "Electric Ladyland" },
  { imgSrc: "images/lusciousj.jpeg", name: "lusciousj", alt: "Fever In Fever Out" },
  { imgSrc: "images/lusciousj.jpeg", name: "lusciousj", alt: "Fever In Fever Out" },
  { imgSrc: "images/madonna.jpeg", name: "madonna", alt: "Like A Virgin" },
  { imgSrc: "images/madonna.jpeg", name: "madonna", alt: "Like A Virgin" },
  { imgSrc: "images/marley.jpeg", name: "marley", alt: "Legend" },
  { imgSrc: "images/marley.jpeg", name: "marley", alt: "Legend" },
  { imgSrc: "images/redhot.jpeg", name: "redhot", alt: "One Hot Minute" },
  { imgSrc: "images/redhot.jpeg", name: "redhot", alt: "One Hot Minute" },
  { imgSrc: "images/tribe.jpeg", name: "tribe", alt: "The Low End Theory" },
  { imgSrc: "images/tribe.jpeg", name: "tribe", alt: "The Low End Theory" },
  { imgSrc: "images/u2.jpeg", name: "u2", alt: "The Joshua Tree" },
  { imgSrc: "images/u2.jpeg", name: "u2", alt: "The Joshua Tree" },
];

for (let i = 0; i < cards.length; i++) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card"); 
  main.appendChild(cardDiv);
}

document.body.appendChild(main);