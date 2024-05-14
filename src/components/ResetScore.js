import React from 'react'
import './ResetScore.css'

export const ResetScore = ({resetScore}) => {
  return (
    <button className='reset' onClick={resetScore}>Reset Score</button>
    //the button to reset all score that use function onclick resetScore
  )
}
