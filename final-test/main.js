import { createItems } from "./itemGenerator.mjs";
import { itemListener } from "./itemActions.mjs";
const startButton = document.getElementById('play-game-btn');
const startButton2 = document.getElementById('play-game-btn-2');
const itemsContainer = document.getElementById('items-container');
let items;
let isPlaying = false;

startButton.addEventListener('click', function () {
    if (isPlaying) {
        isPlaying = false;
        closeGame();
    }
    else {
        isPlaying = true;
        startGame(1);
    }
})
startButton2.addEventListener('click', function () {
    if (isPlaying) {
        isPlaying = false;
        closeGame();
    }
    else {
        isPlaying = true;
        startGame(2);
    }
})

function startGame(level) {
    let correctPositions;
    if (level === 1) {
        correctPositions = createItems(4, 2, 8, "stars");
    }
    else if (level === 2) {
        correctPositions = createItems(6, 3, 8, "stars");
    }

    items = Array.from(document.querySelectorAll('.item'));
    items.map((item, key) => {
        itemListener(item, correctPositions[key], key);
    });

    startButton.style.color = "transparent";
    startButton2.style.color = "transparent";
}
function closeGame() {
    for (const elem of items) {
        itemsContainer.removeChild(elem);
    }
    startButton.style.color = "";
    startButton2.style.color = "";
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