//Author: Murgray D. John
//Date: 9/14/2022
//Purpose: To emulate a sketchpad/Etch-a-Sketch

function createGrid(){
    const gridContainer = document.querySelector(".grid-container");

    for(let i = 0; i < 16; i++){
        const gridCube = document.createElement('div');
        gridCube.classList.add('grid-cube');

        gridContainer.appendChild('gridCube');
    }
}

createGrid();