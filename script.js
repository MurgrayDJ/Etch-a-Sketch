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
    gridContainer.style.height = "640px";
    gridContainer.style.width = "640px";
   
    totalNumofSquares = squaresPerRow * squaresPerRow;
    for(let i = 0; i < totalNumofSquares; i++){
        const gridSquare = document.createElement('div');

        const squarePercentage = getSquarePercentage(squaresPerRow, gridContainer);
        designSquares(gridSquare, squarePercentage);
        
        gridContainer.appendChild(gridSquare);
    }

    document.body.appendChild(gridContainer);
}

//Calculates what percentage of the height and width of the grid
//that each square will use up
function getSquarePercentage(squaresPerRow, gridContainer){
    
    numOfPixelsInGrid = parseInt(gridContainer.style.width);
    let numOfPixelsInSquares = parseInt(numOfPixelsInGrid) / squaresPerRow;
    const squarePercentage = 100 * (numOfPixelsInSquares / numOfPixelsInGrid);
    return squarePercentage;
}

//Deletes grid if it exists already
function deleteGrid(){
    let gridContainer = document.getElementById('grid-container');
    if(gridContainer){
        gridContainer.remove();
    }
}

createGrid(4);

//Sets all grid square attributes such as height and width
function designSquares(gridSquare, squarePercentage){
    gridSquare.classList.add('grid-square');
    gridSquare.style.height = `${squarePercentage}%`;
    gridSquare.style.width = `${squarePercentage}%`;
    gridSquare.addEventListener("mouseover", () =>
    {   
        gridSquare.style.backgroundColor = "#FF91AF";
        gridSquare.style.borderColor = "#FF69B4";
    })
}