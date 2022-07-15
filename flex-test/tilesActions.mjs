let isCorrect       = [];
let isAllCorrect    = false;
let imgWidth;

export const tilerListener = (tile, correct, tileKey) => {
    const statsText     = tile.parentNode.previousElementSibling;
    let isTouching      = false;
    let isScrolling     = false;
    let timerFixScroll  = null;
    let timerGetPiece   = null;
    let tileContainer   = tile.parentNode;
    imgWidth            = tile.offsetWidth;
    isCorrect[tileKey]  = false;
    tile.scrollTop      = 0;

    window.addEventListener('resize', () => {
        imgWidth        = tile.offsetWidth;
        tile.scrollTop  = tile.scrollTop;
    });

    statsText.innerText = 'Lanse a brabs';

    tile.addEventListener('touchstart', () => isTouching = true);
    tile.addEventListener('scroll', () => {

        statsText.innerText = 'Lanse a brabs';
        isScrolling         = true;
        isCorrect[tileKey]  = false;
        let currentPosition = tile.scrollTop / imgWidth;
        let currentPiece    = Math.round(currentPosition + 1);
    
        tileContainer.style.backgroundColor = "";
        document.body.style.backgroundColor = "";
    
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
                if (currentPiece === correct) isCorrect[tileKey] = true;

                for (const e of isCorrect) {
                    if (e) isAllCorrect = true;
                    else {
                        isAllCorrect = false;
                        break;
                    }
                }

                if (isAllCorrect) {
                    document.body.style.backgroundColor = "#5d82b0";
                    tileContainer.style.backgroundColor = "#dcd17e";
                    statsText.innerText = 'o.O';
                }
            }
        }, 2000);
    });
}
