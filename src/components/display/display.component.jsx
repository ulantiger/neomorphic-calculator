import React from 'react'
import './display.styles.scss'

const Display = ({text}) => {

  return (

    <div className='display'>
      {text.length>14
      ? text.substr(0,14)
      : text}
    </div>
  )
}

export default Display
