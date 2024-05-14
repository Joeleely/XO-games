import React from 'react'
import { Box } from './Box'
import './Board.css'

export const Board = ({board, onClick}) => {
  return (
    <div className='board'>
        {board.map((value,index) => {
        return <Box value={value} onClick={() => value === null && onClick(index)}/>
        {/*Use the Box component that show the value and handle the click to not be able to click again*/}
    })}
        </div>
  )
}
