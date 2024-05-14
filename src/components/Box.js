import React from 'react'
import './Box.css'

export const Box = ({value, onClick}) => {
    const style = value === "X" ? "box x" : "box o"; //make style css for x and o
    return (
        <button className={style} onClick={onClick}>{value}</button>
        // the button to click in each box with use the function onClick and show the result {value}
    )
}
