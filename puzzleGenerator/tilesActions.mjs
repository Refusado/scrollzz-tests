let isTouching      = false;
let isScrolling     = false;
let timerFixScroll  = null;
let timerGetPiece   = null;

export const tilerListener = (tile, corr, imgW) => {
    tile.addEventListener('touchstart', () => isTouching = true);
    
    tile.addEventListener('scroll', () => {
        let currentPosition = tile.scrollTop / imgW;
        let currentPiece    = Math.round(currentPosition + 1);
    
        isScrolling = true;
        console.log("Scrollando");
        tile.style.backgroundColor = "";
    
        if (timerFixScroll !== null) {
            clearTimeout(timerFixScroll);
        }
        timerFixScroll = setTimeout(() => {
            isScrolling = false;
            console.log("Parou de scrollar");
            if (!Number.isInteger(currentPosition) && !isTouching) {
                tile.scrollTop = Math.round(currentPosition) * imgW;
            }
        }, 500);
    
        
        tile.addEventListener('touchend', () => {
            isTouching = false;
            if (!isScrolling) {
                tile.scrollTop = Math.round(currentPosition) * imgW;
            }
        });
    
        
        if (timerGetPiece !== null) clearTimeout(timerGetPiece);
        timerGetPiece = setTimeout(() => {
            if (!isTouching) {
                console.log("Peça escolhida: " + currentPiece);
    
                if (currentPiece === corr) {
                    tile.style.backgroundColor = "green";
                }
                else {
                    tile.style.backgroundColor = "";
                }
            }
        }, 3000);
    });
}