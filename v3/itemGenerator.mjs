export const createItems = (lv, itemsNo, columns, piecesNo, type) => {
    let correctPos  = []; // ARRAY PARA GUARDAR AS POSIÇÕES CORRETAS DAS PEÇAS

    const container = document.getElementById('items-container');
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    // LAÇO PARA CRIAÇÃO DE BLOCOS DE PEÇAS
    for (let i = 1; i <= itemsNo; i++) {
        let imagePos = [];
        let imageSrcs = [];
        
        let newItem = document.createElement('div');
        newItem.setAttribute('class', `item lv${lv}`);
        newItem.setAttribute('id', 'item-' + i);

        newItem.style.width = `min(${95 / columns}vw, ${68 / columns}vh, ${480 / columns}px)`;
        newItem.style.height = `min(${95 / columns}vw, ${68 / columns}vh, ${480 / columns}px)`;


        for (let i = 0; i < piecesNo; i++) {
            imageSrcs.push(`../img/${type}/piece-${i + 1}.png`);
        }
        shuffle(imageSrcs);

        for (let i = 0; i < imageSrcs.length; i++) {
            imagePos.push(parseInt(imageSrcs[i].match(/\d/)[0]));
        }
        
        // EVITANDO QUE A PRIMEIRA PEÇA SEJA A PEÇA CORRETA
        if (imagePos[0] === i) {
            i--;
            continue;
        }
        
        // LAÇO PARA CRIAR TODAS AS PEÇAS DO BLOCO
        for (let ii = 0; ii < piecesNo; ii++) {
            // VERIFICANDO A POSIÇÃO DA PEÇA CORRETA E ADICIONANDO À ARRAY COM TODOS OS RESULTADOS
            if (imagePos[ii] === i) correctPos.push(ii + 1);

            let newPiece;
            newPiece = document.createElement('img');
            newPiece.setAttribute('src', imageSrcs[ii]);
            newPiece.setAttribute('alt', type + ' puzzle piece');
            newItem.appendChild(newPiece);

        }
        container.appendChild(newItem);
    }

    // RETORNANDO AS POSIÇÕES CORRETAS DE CADA BLOCO
    return correctPos;
}

// EMBARALHA A POSIÇÃO DOS ELEMENTOS DE UM ARRAY
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const x = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[x]] = [arr[x], arr[i]];
    }

    return arr;
}
