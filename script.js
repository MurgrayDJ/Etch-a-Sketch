//Author: Murgray D. John
//Date: 9/14/2022
//Purpose: To emulate a sketchpad/Etch-a-Sketch

//Creates a grid container, then creates several grid squares to add to it.
//Then appends the container with the squares inside to the body of the DOM
function createGrid(squaresPerRow){
    deleteGrid();

    //Create grid container
    const gridContainer = document.createElement('div');
    gridContainer.id = 'grid-container';
   
    totalNumofSquares = squaresPerRow * squaresPerRow;
    for(let i = 0; i < totalNumofSquares; i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');

        gridContainer.appendChild(gridSquare);
    }

    document.body.appendChild(gridContainer);
}

//Deletes grid if it exists already
function deleteGrid(){
    let gridContainer = document.getElementById('grid-container');
    if(gridContainer){
        gridContainer.remove();
    }
}

createGrid(4);
