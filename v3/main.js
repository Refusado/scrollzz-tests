const level = [
    new Level(1, "stars", 4, 2),
    new Level(2, "stars", 6, 3),
    new Level(3, "stars", 6, 6),
    // new Level(3, "stars", 9, 3),
    // new Level(4, "stars", 12, 4),
    // new Level(5, "stars", 16, 4),
    // new Level(6, "stars", 20, 4),
];

import { createItems } from "./itemGenerator.mjs";
function Level(lv, type, items, columns) {
    this.num = lv,
    this.type = type,
    this.items = items,
    this.columns = columns,
    
    this.create = () => this.corrects = createItems(this.num, this.items, this.columns, 8, this.type),

    this.open = () => {
        const container = document.getElementById("items-container");
        container.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`;

        // ESCONDE TODOS OS ELEMENTOS
        const allItems = document.querySelectorAll(".item");
        Array.from(allItems).map((e) => e.classList.add('closed-level'));

        // MOSTRA OS ELEMENTOS DO NÍVEL ATUAL
        const levelItems = Array.from(document.querySelectorAll(`.lv${this.num}`));
        Array.from(levelItems).map((e) => e.classList.remove('closed-level'));


        // const lvItems = Array.from(document.querySelectorAll(`.lv${this.num}`));
        // lvItems.map((item, key) => itemListener(item, this.corrects[key], key));
    }
}

// import { itemListener } from './itemActions.mjs';
const levelsBtns = Array.from(document.getElementsByClassName("play-game-btn"));
for (let i = 0; i < level.length; i++) {
    let currentLv = level[i];

    currentLv.create();
    levelsBtns[i].onclick = () => currentLv.open();

}

level[0].open();






