const bloco = document.getElementById("block");
const pieceText = document.getElementById('selected-piece');

pieceText.style.backgroundColor = '#00000015';

let currentPiece = 0;

bloco.addEventListener('scroll', (event) => {
    currentPiece = Math.round(bloco.scrollTop / 281);
    pieceText.innerText = currentPiece;

    if (bloco.scrollTop / 281 > 7) {
        bloco.scrollTop = 281 * 7;
    }

})

if (currentPiece = 4) {
    console.log("Bloco 1 completo");
}