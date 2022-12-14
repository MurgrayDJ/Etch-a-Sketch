//Author: Murgray D. John
//Date: 9/14/2022
//Purpose: To emulate a sketchpad/Etch-a-Sketch

createGrid(4);

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

//Sets all grid square attributes such as height and width
function designSquares(gridSquare, squarePercentage){
    gridSquare.classList.add('grid-square');
    gridSquare.style.height = `${squarePercentage}%`;
    gridSquare.style.width = `${squarePercentage}%`;
    
    
    gridSquare.addEventListener("mouseover", () =>
    {   
        changeColor(gridSquare);
    })
    gridSquare.addEventListener("click", () => 
    {
        changeColor(gridSquare);
    })
}

//Changes the color of the grid squares
function changeColor(gridSquare){
    const eraserOn = (eraseButton.value == 'true');
    
    if(!eraserOn){
        let currentColor = "rgb(" + getRGBValues().toString() + ")";
        gridSquare.style.backgroundColor = currentColor;
        gridSquare.style.borderColor = currentColor;
    }
    else{
        gridSquare.style.backgroundColor = "";
        gridSquare.style.borderColor = "";
    }
}


//Creates an array of 3 random RGB values (for CSS)
function getRGBValues(){
    let rgbValues = [];
    for(let i = 0; i < 3; i++){
        rgbValues[i] = Math.floor(Math.random() * 256);
    }
    return rgbValues;
}

/*********************Event Listeners*************************/

//Clears the grid after the "Clear Grid" button is clicked
const clearButton = document.getElementById("clear-button");
const squaresPerRow = document.getElementById("squares-per-row");
clearButton.addEventListener("click", () => {
    deleteGrid();
    createGrid(squaresPerRow.value);
})

//Changes the grid only after "Change Grid" button is clicked
const changeButton = document.getElementById("change-button");
changeButton.addEventListener("click", () => {
    createGrid(squaresPerRow.value);
})

//Toggles boolean value of eraser button
const eraseButton = document.getElementById("erase-button");
eraseButton.addEventListener("click", () => {
    if(eraseButton.value == "false"){
        eraseButton.value = "true";
        eraseButton.textContent = "Use Paint";
    }
    else {
        eraseButton.value = "false"
        eraseButton.textContent = "Use Eraser";
    }
})

/*********************Event Listeners*************************/