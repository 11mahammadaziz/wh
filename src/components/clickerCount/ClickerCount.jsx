import React from 'react'

export const ClickerCount = ({count, onClick}) => {
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={onClick}>+</button>
    </div>
  )
}
