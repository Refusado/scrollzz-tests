import { createItems } from "./itemGenerator.mjs";
import { itemListener } from "./itemActions.mjs";
const correctPositions = createItems(4, 2, 8, "stars");

const items = Array.from(document.querySelectorAll('.item'));

items.map((item, key) => {
    itemListener(item, correctPositions[key], key);
});

/*

4  items = 2x2
6  items = 3x2
9  items = 3x3
8  items = 4x2
12 items = 4x3
16 items = 4x4
20 items = 4x5

*/