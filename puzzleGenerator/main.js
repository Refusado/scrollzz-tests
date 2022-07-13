import { createTiles    } from "./tilesGenerator.mjs";
import { tilerListener  } from "./tilesActions.mjs";
const correctPositions = createTiles(4, 2, 8, "stars");

const tiles = Array.from(document.querySelectorAll('.tile'));

tiles.map((tile, key) => {
    tilerListener(tile, correctPositions[key], key);
});


/*

4  tiles = 2x2
6  tiles = 3x2
9  tiles = 3x3
8  tiles = 4x2
12 tiles = 4x3
16 tiles = 4x4
20 tiles = 4x5

*/
    
// adicionar sombras na primeira e última peça para monstrar início e fim da área de scroll
// if (currentPiece == 1 || currentPiece == piecesLenght) {
//     firstPiece.style.boxShadow = "inset 0 80px 100px -100px black";
//     lastPiece.style.boxShadow = "inset 0 -80px 100px -100px black";

//     setTimeout(() => {
//         firstPiece.style.boxShadow = "";
//         lastPiece.style.boxShadow = "";
//     }, 600);
// }
// else {
//     firstPiece.style.boxShadow = "";
//     lastPiece.style.boxShadow = "";
// }