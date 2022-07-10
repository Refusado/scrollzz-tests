const bloco         = document.getElementById("block");
const corrPieceText = document.getElementById('correct-piece');
const currPieceText = document.getElementById('current-piece');
const allPieces     = Array.from(document.querySelectorAll('img'));
const piecesLenght  = allPieces.length;
const firstPiece    = allPieces.at(0);
const lastPiece     = allPieces.at(-1);

const imageHeight   = firstPiece.height;
const correctPiece  = 2;

let fixScrollTimer  = null;
let getPieceTimer   = null;

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

    // sistema para indentificar quando o usuário termina de scrollar
    if (fixScrollTimer !== null) {
        clearTimeout(fixScrollTimer);
    }
    // isto irá corrigir o mal funcionamento do scroll-snap-align ao scrollar com o touch e adicionar estilos para o usuário perceber
    bloco.addEventListener('touchend', () => {
        fixScrollTimer = setTimeout(() => {
            bloco.style.backgroundColor = "#0004ff0b";
            
            setTimeout(() => {
                bloco.style.backgroundColor = "";
            }, 300);

            bloco.scrollTop = bloco.scrollTop;
        }, 400);
    });

    // mesmo sistema para indentificar quando o usuário termina de scrollar
    if (getPieceTimer !== null) {
        clearTimeout(getPieceTimer);
    }
    getPieceTimer = setTimeout(() => {
        console.log("Peça escolhida: " + currentPiece);
        currPieceText.innerText = currentPiece;

        verifyPiece(currentPiece, correctPiece);
    }, 1300);


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