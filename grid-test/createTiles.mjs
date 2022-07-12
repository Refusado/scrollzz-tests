export const createTiles = (tilesNo, columns, piecesNo, type) => {
    const container   = document.getElementById('tiles-container');

    let newPiece, newTile;

    for (let i = 0; i < tilesNo; i++) {
        newTile = document.createElement('div');
        newTile.setAttribute('class', 'tile');

        for (let i = 0; i < piecesNo; i++) {
            let imageSrc = "../img/" + type + `/piece-${i + 1}.png`;
            console.log(imageSrc);

            newPiece = document.createElement('img');
            newPiece.setAttribute('src', imageSrc);

            newTile.appendChild(newPiece);
        }

        container.appendChild(newTile);
    }

    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows    = `repeat(${tilesNo / columns}, ${1 / piecesNo}fr)`;
}
