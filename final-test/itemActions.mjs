let isCorrect = []; // ARMAZENAR SE CADA PEÇA ESTÁ NA POSIÇÃO CORRETA
let isAllCorrect = false; // PARA QUANDO TODAS AS PEÇAS ESTIVEREM CORRETAS
let imgWidth;

export const itemListener = (item, correct, itemKey) => {
    let isTouching      = false;
    let isScrolling     = false;
    let timerFixScroll  = null;
    let timerGetPiece   = null;
    let itemContainer   = item.parentNode;
    imgWidth            = item.offsetWidth;
    isCorrect[itemKey]  = false;
    item.scrollTop      = 0;

    // VERIFICAR QUANDO A TELA É REDIMENSIONADA PARA REAJUSTAR O TAMANHO DAS IMAGENS NO SISTEMA
    window.addEventListener('resize', () => {
        imgWidth = item.offsetWidth;
        item.scrollTop = item.scrollTop;
    });


    item.addEventListener('touchstart', () => isTouching = true);
    item.addEventListener('scroll', () => {

        isScrolling         = true;
        isCorrect[itemKey]  = false;
        let currentPosition = item.scrollTop / imgWidth;
        let currentPiece    = Math.round(currentPosition + 1);
    
        itemContainer.style.backgroundColor = "";
        document.body.style.backgroundColor = "";
    
        // SISTEMA PARA DETECTAR QUANDO O USUÁRIO TERMINAR DE SCROLLAR
        // ARRUMAR O ALINHAMENTO DAS PEÇAS EM BROWSERS QUE NÃO SUPORTAM O SCROLL-SNAP-ALIGN
        if (timerFixScroll !== null) {
            clearTimeout(timerFixScroll);
        }
        timerFixScroll = setTimeout(() => {
            isScrolling = false;
            if (!Number.isInteger(currentPosition) && !isTouching) {
                item.scrollTop = Math.round(currentPosition) * imgWidth;
            }
        }, 500);
    
        // ARRUMAR O ALINHAMENTO DAS PEÇAS APÓS O USUÁRIO TERMINAR DE USAR O TOUCH
        item.addEventListener('touchend', () => {
            isTouching = false;
            if (!isScrolling) {
                item.scrollTop = Math.round(currentPosition) * imgWidth;
            }
        });
    
        // SISTEMA PARA DETECTAR QUANDO O USUÁRIO TERMINAR DE SCROLLAR
        // VERIFICAR A POSIÇÃO DAS PEÇAS
        if (timerGetPiece !== null) clearTimeout(timerGetPiece);
        timerGetPiece = setTimeout(() => {
            if (!isTouching) {
                if (currentPiece === correct) isCorrect[itemKey] = true;

                for (const e of isCorrect) {
                    if (e) isAllCorrect = true;
                    else {
                        isAllCorrect = false;
                        break;
                    }
                }

                if (isAllCorrect) {
                    document.body.style.backgroundColor = "#5d82b0";
                    itemContainer.style.backgroundColor = "#dcd17e";
                }
            }
        }, 2000);
    });
}
