const bloco = document.getElementById("block");
const corrPieceText = document.getElementById('correct-piece');
const currPieceText = document.getElementById('current-piece');

const imageHeight = 281;
const correctPiece = 2;
corrPieceText.innerText = correctPiece;

let currentPosition = bloco.scrollTop / imageHeight;
let timer = null;

bloco.addEventListener('scroll', () => {
    bloco.style.outlineColor = "";

    let currentPiece = Math.round(bloco.scrollTop / imageHeight);

    bloco.addEventListener('touchend', () => {
        setTimeout(() => {
            bloco.scrollTop = Math.round(bloco.scrollTop);
        }, 200);
    });

    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        currPieceText.innerText = currentPiece;
        verifyPiece(currentPiece, correctPiece);
    }, 2000);
})



function verifyPiece(curr, corr) {
    if (curr === corr) {
        bloco.style.outlineColor = "green";
    }
}