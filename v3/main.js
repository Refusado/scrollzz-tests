import { createItems } from "./itemGenerator.mjs";
import { itemListener } from "./itemActions.mjs";
const startButton = document.getElementById('play-game-btn');
const startButton2 = document.getElementById('play-game-btn-2');
const startButton3 = document.getElementById('play-game-btn-3');
const startButton4 = document.getElementById('play-game-btn-4');
const startButton5 = document.getElementById('play-game-btn-5');

const itemsContainer = document.getElementById('items-container');
let items;

console.log(itemsContainer.childElementCount);

startButton.addEventListener('click', function () {
    startGame(1);
})
startButton2.addEventListener('click', function () {
    startGame(2);
})
startButton3.addEventListener('click', function () {
    startGame(3);
})
startButton4.addEventListener('click', function () {
    startGame(4);
})
startButton5.addEventListener('click', function () {
    startGame(5);
})


function startGame(level) {
    let correctPositions;

    if (itemsContainer.childElementCount) closeGame();
    
    if (level === 1) {
        correctPositions = createItems(4, 2, 8, "stars");
    }
    else if (level === 2) {
        correctPositions = createItems(6, 3, 8, "stars");
    }
    else if (level === 3) {
        correctPositions = createItems(9, 3, 8, "stars");
    }
    else if (level === 4) {
        correctPositions = createItems(12, 4, 8, "stars");
    }
    else if (level === 5) {
        correctPositions = createItems(20, 4, 8, "stars");
    }

    items = Array.from(document.querySelectorAll('.item'));
    items.map((item, key) => {
        itemListener(item, correctPositions[key], key);
    });
}

function closeGame() {
    for (const elem of items) {
        itemsContainer.removeChild(elem);
    }
}











/*

4  items = 2x2
6  items = 3x2
9  items = 3x3
8  items = 4x2
12 items = 4x3
16 items = 4x4
20 items = 4x5

*/