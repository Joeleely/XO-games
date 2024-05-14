import React from 'react'
import "./ScoreBoard.css"

export const ScoreBoard = ({scores, xPlay}) => {
    const {xScore, oScore} = scores; // get the score of X and O
  return (
    <div className='scoreboard'>
        <span className={`score x-score ${!xPlay && "inactive"}`}>X - {xScore}</span>
        {/*this show that if it is X turn and the score of x*/}
        <span className={`score o-score ${xPlay && "inactive"}`}>O - {oScore}</span>
        {/*this show that if it is O turn and the score of O*/}
    </div>
  )
}
