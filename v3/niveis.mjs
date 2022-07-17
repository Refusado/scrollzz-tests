function closeLv() {
    itemsContainer.style.display = 'none';
}

function Level(lv, type, items, columns) {
    this.num = lv,
    this.type = type,
    this.items = items,
    this.columns = columns,

    this.created = false;
    this.opened = false;

    this.create = function () {
        console.log('creating level ' + this.num);

        this.created = true;
    },
    this.open = function () {
        console.log('opening level ' + this.num);

        this.opened = true;
    },
    this.close = function () {
        console.log('closing level ' + this.num);

        this.opened = false;
    }
}

const level = [
    //  Level(lv, type, blocos, columns);
    new Level(1, 'stars', 4, 2),
    new Level(2, 'stars', 6, 3),
    new Level(3, 'stars', 9, 3),
    new Level(4, 'stars', 12, 4),
    new Level(5, 'stars', 16, 4),
    new Level(6, 'stars', 20, 4),
];

const levelsBtns = Array.from(document.getElementsByClassName('play-game-btn'));
const LeveItems = Array.from(document.querySelectorAll('.items'));

for (let i = 0; i < levelsBtns.length; i++) {
    let currentLv = level[i];

    levelsBtns[i].onclick = () => {
        closeLv();

        if (currentLv.created) {
            currentLv.open();
        }
        else {
            currentLv.create();
            currentLv.open();
        }
    }
}
