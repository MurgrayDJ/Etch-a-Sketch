//Author: Murgray D. John
//Date: 9/14/2022
//Purpose: To emulate a sketchpad/Etch-a-Sketch

//Creates a grid container, then creates several grid squares to add to it.
//Then appends the container with the squares inside to the body of the DOM
function createGrid(){
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');

    for(let i = 0; i < 16; i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');

        gridContainer.appendChild(gridSquare);
    }

    document.body.appendChild(gridContainer);
}

createGrid();

