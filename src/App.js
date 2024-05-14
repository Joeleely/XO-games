import './App.css';
import React, { useEffect,useState } from 'react';
import { Board } from './components/Board.js';
import { ScoreBoard } from './components/ScoreBoard.js';
import { ResetButton } from './components/ResetButton.js';
import { ResetScore } from './components/ResetScore.js';

function App() {
  useEffect(() => { // change the title of the web
    document.title = 'Tic-Tac-Toe';
  }, []);

  const WIN_CONDITION = [ // make the condition for the winner
    [0,1,2], // first row
    [3,4,5], // second row
    [6,7,8], // third row
    [0,3,6], // first column
    [1,4,7], // second column
    [2,5,8], // third column
    [0,4,8], // the line from top left to bottom right
    [2,4,6]  // the line from top right to bottom left
  ]

  const [board, setBoard] = useState(Array(9).fill(null)) // set state to make the board null
  const [xPlay, setXPlay] = useState(true) // set state to show that x is play or not
  const [scores, setScores] = useState({xScore:0, oScore:0}) // set state for the score of x and o
  const [gameOver, setGameOver] = useState(false) // set state the game over for use

  const handleBoxClick = (boxIndex) => { // function to handle the click on the box
    const updateBoard = board.map((value, index) => {
      if(index === boxIndex){
        return xPlay === true ? "X" : "O"; // set the turn to play
      }else{
        return value;
      }
    })
    //console.log(board)
    const winner = checkWinner(updateBoard) // use check winner function
    if(winner){
      if(winner === "O"){ //check if O is winner
        let {oScore} = scores;
        oScore += 1; // increase O Score
        setScores({...scores,oScore}); // Update the scores
      }else{ // if X is winner
        let {xScore} = scores;
        xScore += 1; // increase X Score
        setScores({...scores,xScore}); // Update the scores
      }
    }
    //console.log(scores);
    setBoard(updateBoard); // Update the board
    setXPlay(!xPlay); // set the play turn
    //console.log(xPlay)
  }

const checkWinner = (board) => { //function to check the winner
  for(let i =0;i< WIN_CONDITION.length;i++){ //for loop until 
    const [x,y,z] = WIN_CONDITION[i]; // set the index in win condition
    //console.log(i)
    if(board[x] && board[x] === board[y] && board[y] === board[z]){ // check if it all is same symbol
      //console.log(board[x]);
      setGameOver(true) // Set the game over to true
      return board[x] // return the winning symbol
    }
  }
}

const resetBoard = () => { //function to reset the board
  setGameOver(false); // set the game over to false
  setBoard(Array(9).fill(null)) // reset board to make it null
}

const resetScore = () => { //function to reset the score
  setScores({ xScore: 0, oScore: 0 }); // set x and o score to 0
  resetBoard() //use function to reset to board
}

  return (
    <div className="App">
      <ResetScore resetScore={resetScore}/> {/*Use the ResetScore component and the onclick function resetScore*/}
      <ScoreBoard scores={scores} xPlay={xPlay}/> {/*Use the ScoreBoard component and sent the score and the turn*/}
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}/> {/* Use the Board component and sent the board and handle the onClick after game over*/}
      <ResetButton resetBoard={resetBoard}/> {/*Use the ResetButton component and the onclick function resetButton*/}
    </div>
  );
}

export default App;
