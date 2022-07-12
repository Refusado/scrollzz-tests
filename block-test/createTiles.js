let container   = document.getElementById('tiles-container');
let imageSrc    = "../img/stars/star-piece-1.png";

let newPiece, newTile, containerWidth;

function createTiles(tilesNo, columns, imagesNo) {
    let tileWidth = 100 / columns;
    let tileHeight = 100 / (tilesNo / columns);

    switch (tilesNo) {
        case 4:
            containerWidth = 68; break;
        case 6: case 9:
            containerWidth = 76; break;
        default:
            containerWidth = 84; break;
    }

    for (let i = 0; i < tilesNo; i++) {
        newTile = document.createElement('div');
        newTile.setAttribute('class', 'tile');

        for (let i = 1; i <= imagesNo; i++) {
            newPiece = document.createElement('img');
            newPiece.setAttribute('src', imageSrc);
            newPiece.setAttribute('alt', 'Piece Image ' + i);
            newTile.appendChild(newPiece);
        }

        newTile.style.width = `calc(${tileWidth}% - (.1vw))`;
        newTile.style.height = `calc(${tileHeight}% - (.1vw))`;
        container.appendChild(newTile);
    }

    container.style.width = containerWidth + "%";
    // os cáculos abaixo irão fazer com que o container tenha a altura correta se baseado na largura
    let minPx = 620 - (620 / 100) * (100 - containerWidth);
    let minVw = 96 - (96 / 100) * (100 - containerWidth);
    container.style.height = `calc((min(${minPx}px, ${minVw}vw) / ${columns} * ${tilesNo / columns})`;
}

createTiles(4, 2, 7);




/*

4  tiles = 2x2
6  tiles = 3x2
9  tiles = 3x3
8  tiles = 4x2
12 tiles = 4x3
16 tiles = 4x4
20 tiles = 4x5

*/