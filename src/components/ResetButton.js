import React from 'react'
import './ResetButton.css'

export const ResetButton = ({resetBoard}) => {
  return (
    <button className='reset-btn' onClick={resetBoard}>reset</button>
    // button to reset the board with use the function onClick
  )
}
