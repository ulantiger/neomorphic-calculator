import React from 'react'
import './button.styles.scss'

const Button = ({onClickHandler, value}) => {
  return (
    <button className="neoBtn" onClick={onClickHandler} value={value}>
      {value}
    </button>
  )
}

export default Button
