const container = document.getElementById('tiles-container');
let newPiece, newTile;

export const createTiles = (tilesNo, columns, piecesNo, type) => {
    let correctPos  = [];

    for (let i = 1; i <= tilesNo; i++) {
        newTile = document.createElement('div');
        newTile.setAttribute('class', 'tile');
        newTile.setAttribute('id', 'tile-' + i);

        let imagePos    = [];
        let imageSrcs   = [];

        for (let i = 0; i < piecesNo; i++) {
            imageSrcs.push("../img/" + type + `/piece-${i + 1}.png`);
        }
        shuffle(imageSrcs);

        for (let i = 0; i < imageSrcs.length; i++) {
            imagePos.push(parseInt(imageSrcs[i].match(/\d/)[0]));
        }
        
        // verifica se a primeira peça gerada é a peça certa. Se for verdade, vai voltar do início para gerar outra no lugar
        if (imagePos[0] === i) {
            i--;
            continue;
        }
        
        for (let ii = 0; ii < piecesNo; ii++) {
            if (imagePos[ii] === i) {
                correctPos.push(ii + 1)
            }

            newPiece = document.createElement('img');
            newPiece.setAttribute('src', imageSrcs[ii]);

            newTile.appendChild(newPiece);
        }

        container.appendChild(newTile);
    }

    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows    = `repeat(${tilesNo / columns}, ${1 / piecesNo}fr)`;

    return correctPos;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const x = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[x]] = [arr[x], arr[i]];
    }

    return arr;
}