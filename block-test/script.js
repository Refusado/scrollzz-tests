
const bloco         = document.getElementById("block");
const corrPieceText = document.getElementById('correct-piece');
const currPieceText = document.getElementById('current-piece');
const allPieces     = Array.from(document.querySelectorAll('img'));
const piecesLenght  = allPieces.length;
const firstPiece    = allPieces[0];
const lastPiece     = allPieces[allPieces.length - 1];

const imageHeight   = firstPiece.height;
const correctPiece  = 2;

let isTouching = false;
let isScrolling = false;
let timerFixScroll  = null;
let timerGetPiece   = null;

corrPieceText.innerText = correctPiece;
firstPiece.setAttribute('id', 'firstPiece');
lastPiece.setAttribute('id', 'lastPiece');


bloco.scrollTop = 800;
setTimeout(() => {
    bloco.scrollTop = 0;
}, 100);

bloco.addEventListener('touchstart', () => isTouching = true);

bloco.addEventListener('scroll', () => {
    let currentPosition = bloco.scrollTop / imageHeight;
    let currentPiece = Math.round(currentPosition + 1);

    isScrolling = true;
    bloco.style.outlineColor = "";


    if (timerFixScroll !== null) {
        clearTimeout(timerFixScroll);
    }
    timerFixScroll = setTimeout(() => {
        isScrolling = false;
        if (!Number.isInteger(currentPosition) && !isTouching) {
            bloco.scrollTop = Math.round(currentPosition) * imageHeight;
        }
    }, 500);

    
    bloco.addEventListener('touchend', () => {
        isTouching = false;
        if (!isScrolling) {
            bloco.scrollTop = Math.round(currentPosition) * imageHeight;
        }
    });

    
    if (timerGetPiece !== null) clearTimeout(timerGetPiece);
    timerGetPiece = setTimeout(() => {
        // console.log("Peça escolhida: " + currentPiece);
        if (!isTouching) {
            currPieceText.innerText = currentPiece;
            
            verifyPiece(currentPiece, correctPiece);
        }
    }, 1300);



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