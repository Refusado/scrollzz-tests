
const bloco         = document.getElementById("block");
const corrPieceText = document.getElementById('correct-piece');
const currPieceText = document.getElementById('current-piece');
const allPieces     = Array.from(document.querySelectorAll('img'));
const piecesLenght  = allPieces.length;
const firstPiece    = allPieces[0];
const lastPiece     = allPieces[allPieces.length - 1];

const imageHeight   = firstPiece.height;
const correctPiece  = 2;

let timerFixTouchScroll  = null;
let timerFixScroll  = null;
let timerGetPiece   = null;

corrPieceText.innerText = correctPiece;
firstPiece.setAttribute('id', 'firstPiece');
lastPiece.setAttribute('id', 'lastPiece');


bloco.addEventListener('scroll', () => {
    let currentPosition = bloco.scrollTop / imageHeight;
    let currentPiece = Math.round(currentPosition + 1);

    bloco.style.outlineColor = "";

    // adicionar sombras na primeira e última peça para monstrar início e fim da área de scroll
    if (currentPiece == 1 || currentPiece == piecesLenght) {
        firstPiece.style.boxShadow = "inset 0 80px 100px -100px black";
        lastPiece.style.boxShadow = "inset 0 -80px 100px -100px black";

        setTimeout(() => {
            firstPiece.style.boxShadow = "";
            lastPiece.style.boxShadow = "";
        }, 600);
    }
    else {
        firstPiece.style.boxShadow = "";
        lastPiece.style.boxShadow = "";
    }

    // indentificar quando o usuário termina de scrollar
    if (timerFixTouchScroll !== null) {
        clearTimeout(timerFixTouchScroll);
    }
    // corrigir o mal funcionamento do scroll-snap-align com o touch e adicionar estilos à ação
    bloco.addEventListener('touchend', () => {
        timerFixTouchScroll = setTimeout(() => {
            bloco.style.backgroundColor = "#0004ff0b";
            
            setTimeout(() => {
                bloco.style.backgroundColor = "";
            }, 300);

            bloco.scrollTop = bloco.scrollTop;
        }, 400);
    });

    // mesmo sistema para indentificar quando o usuário termina de scrollar
    if (timerGetPiece !== null) {
        clearTimeout(timerGetPiece);
    }
    timerGetPiece = setTimeout(() => {
        console.log("Peça escolhida: " + currentPiece);
        currPieceText.innerText = currentPiece;

        verifyPiece(currentPiece, correctPiece);
    }, 1300);


    if (timerFixTouchScroll !== null) {
        clearTimeout(timerFixTouchScroll);
    }
    timerFixTouchScroll = setTimeout(() => {
        if (!Number.isInteger(currentPosition)) {
            bloco.scrollTop = Math.round(currentPosition) * 281;
        }
    }, 600);
});


function scrollEnd(timeout, timer, callback) {
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(callback, timeout);
}

function verifyPiece(curr, corr) {
    if (curr === corr) {
        bloco.style.outlineColor = "green";
    }
    else {
        bloco.style.outlineColor = "";
    }
}