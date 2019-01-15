let cardsArray = [
 {rank: 'queen', suit: 'hearts', cardImage: "images/queen-of-hearts.png"},
 {rank:'queen', suit: 'diamonds', cardImage: "images/queen-of-diamonds.png" },
 {rank: 'king', suit: 'hearts', cardImage:"images/king-of-hearts.png"},
 {rank: 'king', suit: 'diamonds', cardImage:"images/king-of-diamonds.png" }
];

let randomIndexes = [];
let newBoard = [];

let createBoard = function () {
  let randomIndex = Math.floor(Math.random() * 4);
  randomIndexes.push(randomIndex);
  while (randomIndexes.length < 4){
    randomIndex = Math.floor(Math.random() * 4);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }
  newBoard = [cardsArray[randomIndexes[0]], cardsArray[randomIndexes[1]],
    cardsArray[randomIndexes[2]], cardsArray[randomIndexes[0]]];
}

console.log(newBoard);
createBoard();

let addListeners = function () {
  for (var i = 0; i < 4; i++) {
    let element = document.getElementById(i.toString());
    element.onclick = function () {
     element.src = newBoard[element.id].cardImage;
    }
  }
}

addListeners();
console.log(cardsArray, '*** cardsArray');
let choicesArray = [];

let flipCard = function (index) {
  choicesArray.push(cardsArray[index]);
  console.log("User flipped " + cardsArray[index].rank);
}

let findMatch = function () {
   if (choiceArray[0].rank === choicesArray[1].rank) {
     alert('You Found a Match!!!');
   } else {
     alert('It Was Not a Match!!!');
   }
}
