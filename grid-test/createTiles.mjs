export const createTiles = (tilesNo, columns, piecesNo, type) => {
    const container   = document.getElementById('tiles-container');

    let newPiece, newTile;


    
    let imageSrc = [];
    for (let i = 0; i < piecesNo; i++) {
        imageSrc.push("../img/" + type + `/piece-${i + 1}.png`);
    }

    for (let i = 1; i <= tilesNo; i++) {
        shuffle(imageSrc);

        newTile = document.createElement('div');
        newTile.setAttribute('class', 'tile');

        
        if (imageSrc[0].match(/\d/)[0] == i) {
            i--;
            continue;
        }

        for (let ii = 0; ii < piecesNo; ii++) {

            newPiece = document.createElement('img');
            newPiece.setAttribute('src', imageSrc[ii]);

            newTile.appendChild(newPiece);
        }

        // console.log(i + 1);

        container.appendChild(newTile);
    }

    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows    = `repeat(${tilesNo / columns}, ${1 / piecesNo}fr)`;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const x = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[x]] = [arr[x], arr[i]];
    }

    return arr;
}