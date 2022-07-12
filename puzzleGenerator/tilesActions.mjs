export const tilerListener = (tile, correct, imgWidth, tileKey) => {
    let isTouching      = false;
    let isScrolling     = false;
    let timerFixScroll  = null;
    let timerGetPiece   = null;

    tile.addEventListener('touchstart', () => isTouching = true);
    
    tile.addEventListener('scroll', () => {
        let currentPosition = tile.scrollTop / imgWidth;
        let currentPiece    = Math.round(currentPosition + 1);
        let itsDone         = false;
    
        isScrolling = true;
        tile.style.backgroundColor = "";
    
        if (timerFixScroll !== null) {
            clearTimeout(timerFixScroll);
        }
        timerFixScroll = setTimeout(() => {
            isScrolling = false;
            if (!Number.isInteger(currentPosition) && !isTouching) {
                tile.scrollTop = Math.round(currentPosition) * imgWidth;
            }
        }, 500);
    
        tile.addEventListener('touchend', () => {
            isTouching = false;
            if (!isScrolling) {
                tile.scrollTop = Math.round(currentPosition) * imgWidth;
            }
        });
    
        if (timerGetPiece !== null) clearTimeout(timerGetPiece);
        timerGetPiece = setTimeout(() => {
            if (!isTouching) {
                if (currentPiece === correct) {
                    tile.style.backgroundColor = "green";
                    itsDone = true;
                }
                else {
                    tile.style.backgroundColor = "";
                    itsDone = false;
                }
            }

            console.log(tile.id, itsDone);
        }, 3000);

        return itsDone;
    });

    // if (itsDone) {
    //     pecasCompletas++
    // }
    // else {
    //     pecasCompletas--
    // }
}
