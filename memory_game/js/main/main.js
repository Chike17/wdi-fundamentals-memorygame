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
  newBoard = [cardsArray[randomIndexes[0]],
              cardsArray[randomIndexes[1]],
              cardsArray[randomIndexes[2]],
              cardsArray[randomIndexes[3]]
  ];
}
createBoard();

let choices = [];
let count = 0;

let addListeners = function () {
  for (var i = 0; i < 4; i++) {
    let element = document.getElementById(i.toString());
    element.onclick = function () {
    count++;
    element.src = newBoard[element.id].cardImage;
    choices.push(newBoard[element.id].rank);
    if (count === 2) {
      setTimeout(findMatch, 100);
     }
    }
  }
}
addListeners();

let findMatch = function () {
   if (choices[0] === choices[1]) {
     alert('You Found a Match!!!');
   } else {
     alert('It Was Not a Match!!!');
   }
}
