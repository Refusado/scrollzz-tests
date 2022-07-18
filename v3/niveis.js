import { createItems } from "./itemGenerator.mjs";
const levelsBtns = Array.from(document.getElementsByClassName("play-game-btn"));

function Level(lv, type, items, columns) {
    this.num = lv,
    this.type = type,
    this.items = items,
    this.columns = columns,
    
    
    this.create = function () {
        createItems(this.num, this.items, this.columns, 8, this.type);
    },

    this.open = function () {
        this.close();
        console.log("opening level " + this.num);

        const container = document.getElementById("items-container");
        const levelItems = document.querySelectorAll(`.lv${this.num}`);
        
        container.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`;
        Array.from(levelItems).map((e) => e.style.display = "flex");
    },

    this.close = function () {
        console.log("closing levels");
        
        const allItems = document.querySelectorAll(".item");
        Array.from(allItems).map((e) => e.style.display = "none");
    }
}

const level = [
    //  Level(lv, type, blocos, columns);
    new Level(1, "stars", 4, 2),
    new Level(2, "stars", 6, 3),
    new Level(3, "stars", 9, 3),
    new Level(4, "stars", 12, 4),
    new Level(5, "stars", 16, 4),
    new Level(6, "stars", 20, 4),
];


for (let i = 0; i < levelsBtns.length; i++) {

    let currentLv = level[i];
    currentLv.create();
    currentLv.close();

    levelsBtns[i].onclick = () => {
        currentLv.open();
    }
}

level[5].open();