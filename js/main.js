//two players, typically both chips of different colors (red vs blue)
const player1 = 'Player1'
const player2 = 'Player2'
const hidden = 'hidden'
// need a variable to swtich between players for every turn
let isPlayer2Turn = false 

//win condition - have 4 in a row from the same player
    //across, down, or diagonally
const connect4 = [ 
        //across
            //row 1
            [0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],
            //row 2
            [7,8,9,10],[8,9,10,11],[9,10,11,12],[10,11,12,13], 
            //row 3
            [14,15,16,17],[15,16,17,18],[16,17,18,19],[17,18,19,20],
            //row 4
            [21,22,23,24],[22,23,24,25],[23,24,25,26],[24,25,26,27],
            //row 5
            [28,29,30,31],[29,30,31,32],[30,31,32,33],[31,32,33,34],
            //row 6
            [35,36,37,38],[36,37,38,39],[37,38,39,40],[38,39,40,41],
        // down
            //column 1
            [0,7,14,21],[7,14,21,28],[14,21,28,35], 
            //column 2
            [1,8,15,22],[8,15,22,29],[15,22,29,36],
            //column 3
            [2,9,16,23],[9,16,23,30],[16,23,30,37],
            //column 4
            [3,10,17,24],[10,17,24,31],[17,24,31,38],
            //column 5
            [4,11,18,25],[11,18,25,32],[18,25,32,39],
            //column 6
            [5,12,19,26],[12,19,26,33],[19,26,33,40],
            //column 7
            [6,13,20,27],[13,20,27,34],[20,27,34,41],
        //diagonaly
            //bottom left to top right
            [21,15,9,3],[28,22,16,10],[22,16,10,4],[35,29,23,17],[29,23,17,11],[23,17,11,5],[36,30,24,18],[30,24,18,12],[24,18,12,6],[37,31,25,19],[31,25,19,13],[38,32,26,20],
            //top left to bottom right
            [3,11,19,27],[2,10,18,26],[10,18,26,34],[1,9,17,25],[9,17,25,33],[17,25,33,41],[0,8,16,24],[8,16,24,32],[16,24,32,40],[7,15,23,31],[15,23,31,39],[14,22,30,38],
            ]
// get access to game board elements
const cellElements = document.querySelectorAll('[data-cell]')
const boardElement = document.getElementById('board')
const gameEndMessageElement = document.getElementById('gameEndMessage')
const restartButton = document.getElementById('restartButton')
const gameEndMessageTextElement = document.getElementById('gameEndMessageText')
//add click event for cells

// refresh starts a new game
startGame()

//when reset button is clicked, starts a new game
restartButton.addEventListener('click', startGame)

function startGame(){
    //switch isPlayer2Turn to false, game starts with Player 1
    isPlayer2Turn = false
    //for each cell on the board, remove player1 and player 2 chips, remove event listeners
    cellElements.forEach(cell => {
        cell.classList.remove(player1)
        cell.classList.remove(player2)
        cell.removeEventListener('click', handleCellClick)
        cell.addEventListener('click', handleCellClick)
    })
    //set what happens when the current player mouses over the board 
    setBoardHoverClass()
    //remove game end messages
    gameEndMessageElement.classList.remove('draw')
    gameEndMessageElement.classList.remove('dogs-win')
    gameEndMessageElement.classList.remove('cats-win')
    gameEndMessageElement.classList.remove('show')
}  

//what happens when a player selects a cell?
//place a chip in the selected column, chip 'falls' to the next available spot from the bottom of the column
function handleCellClick(e){
    //target cell clicked
    const cell = Number(e.target.id)
    const currentPlayer = isPlayer2Turn ? player2 : player1
    
    placeMark(cell, currentPlayer)

    if(checkWin(currentPlayer)){
        endGame(false)
    }else if(isDraw()) {
        endGame(true)
    }else{
        swapTurns()
        setBoardHoverClass()
    }
}


// end of game messages
function endGame(draw) {
    if(draw){
        gameEndMessageTextElement.innerText = "It's a draw!"
        gameEndMessageElement.classList.add('draw')
    }else{
        gameEndMessageTextElement.innerText = `${isPlayer2Turn ? "Dogs" : "Cats"} win!`
        if(isPlayer2Turn){
            gameEndMessageElement.classList.add('dogs-win')
        }else{
            gameEndMessageElement.classList.add('cats-win')
        }
    }
    gameEndMessageElement.classList.add('show')
}

//check if it's a tie, if every cell is filled
function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(player1) || cell.classList.contains(player2)
    })
}
// cellElements[0].attributes.id.value
function placeMark(cell, currentPlayer){         
    if((cell >= 35 && cell <=41) && 
        !cellElements[cell].classList.contains(player1) && 
        !cellElements[cell].classList.contains(player2)){
            //if you are clicking on the bottom row, 
            //and the cell is empty, 
        cellElements[cell].classList.add(currentPlayer)
            //add currentPlayer to classList for cell clicked on
    }else if(((cellElements[(cell + 7)].classList.contains(player1) || 
        cellElements[(cell + 7)].classList.contains(player2)) ||
        cellElements[(cell + 7)].classList.contains(hidden)) && 
            //if the cell below the cell you clicked on is full or hidden
        (!(cellElements[cell].classList.contains(player1)) && 
        !(cellElements[cell].classList.contains(player2)))
            //and the cell you clicked on is empty
    ){
        cellElements[cell].classList.add(currentPlayer)
            //add currentPlayer to classList for cell clicked on

    }else if(((cellElements[(cell + 14)].classList.contains(player1) || 
        cellElements[(cell + 14)].classList.contains(player2)) ||
        cellElements[(cell + 14)].classList.contains(hidden)) && 
            //if the cell 2 below the cell you clicked on is fullor hidden
        (!(cellElements[(cell + 7)].classList.contains(player1)) && 
        !(cellElements[(cell + 7)].classList.contains(player2)))
            //and the cell below the cell you clicked on is empty
    ){
        cellElements[(cell + 7)].classList.add(currentPlayer)
            //add currentPlayer to classList for cell below the cell clicked on

    }else if(((cellElements[(cell + 21)].classList.contains(player1) || 
        cellElements[(cell + 21)].classList.contains(player2)) ||
        cellElements[(cell + 21)].classList.contains(hidden)) && 
            //if the cell 3 below the cell you clicked on is full or hidden
        (!(cellElements[(cell + 14)].classList.contains(player1)) && 
        !(cellElements[(cell + 14)].classList.contains(player2)))
            //and the cell 2 below the cell you clicked on is empty
    ){
        cellElements[(cell + 14)].classList.add(currentPlayer)
            //add currentPlayer to classList for cell 2 below the cell clicked on

    }else if(((cellElements[(cell + 28)].classList.contains(player1) || 
        cellElements[(cell + 28)].classList.contains(player2)) ||
        cellElements[(cell + 28)].classList.contains(hidden)) && 
            //if the cell 4 below the cell you clicked on is full or hidden
        (!(cellElements[(cell + 21)].classList.contains(player1)) && 
        !(cellElements[(cell + 21)].classList.contains(player2)))
            //and the cell 3 below the cell you clicked on is empty
    ){
        cellElements[(cell + 21)].classList.add(currentPlayer)
            //add currentPlayer to classList for cell 3 below the cell clicked on

    }else if(((cellElements[(cell + 35)].classList.contains(player1) || 
        cellElements[(cell + 35)].classList.contains(player2)) ||
        cellElements[(cell + 35)].classList.contains(hidden)) && 
            //if the cell 5 below the cell you clicked on is full or hidden
        (!(cellElements[(cell + 28)].classList.contains(player1)) && 
        !(cellElements[(cell + 28)].classList.contains(player2)))
            //and the cell 4 below the cell you clicked on is empty
    ){
        cellElements[(cell + 28)].classList.add(currentPlayer)
            //add currentPlayer to classList for cell 4 below the cell clicked on

    }else if(((!cellElements[(cell + 35)].classList.contains(player1) || 
        !cellElements[(cell + 35)].classList.contains(player2)) ||
        cellElements[(cell + 35)].classList.contains(hidden))&&
            //if the cell 5 below the cell you clicked on is empty or hidden
        cell + 35 <= 41
    ){
        cellElements[(cell + 35)].classList.add(currentPlayer)
            //add currentPlayer to classList for cell 5 below the cell clicked on
    }
}


//change which player's turn it is
function swapTurns(){
    isPlayer2Turn = !isPlayer2Turn
}

//switch which player chip should be shown on mouseover
function setBoardHoverClass(){
    boardElement.classList.remove(player1)
    boardElement.classList.remove(player2)
    if(isPlayer2Turn){
        boardElement.classList.add(player2)
    }else{
        boardElement.classList.add(player1)
    }
}
//check if there is a winner -> return true if any player has a combination that matches an element of the connect4 array
function checkWin(currentPlayer){
    return connect4.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentPlayer)
        })
    })
}


// if((!cellElements[35].classList.contains(player1) && 
//         !cellElements[35].classList.contains(player2)) ||
//             //cell 35
//         (!cellElements[36].classList.contains(player1) && 
//         !cellElements[36].classList.contains(player2)) ||
//             //cell 36 or
//         (!cellElements[37].classList.contains(player1) && 
//         !cellElements[37].classList.contains(player2)) ||
//             //cell 37 or
//         (!cellElements[38].classList.contains(player1) && 
//         !cellElements[38].classList.contains(player2)) ||
//             //cell 38 or
//         (!cellElements[39].classList.contains(player1) && 
//         !cellElements[39].classList.contains(player2)) ||
//             //cell 39 or
//         (!cellElements[40].classList.contains(player1) && 
//         !cellElements[40].classList.contains(player2)) ||
//             //cell 40 or
//         (!cellElements[41].classList.contains(player1) && 
//         !cellElements[41].classList.contains(player2))){
//             //cell 41 are empty
            
    
//         }