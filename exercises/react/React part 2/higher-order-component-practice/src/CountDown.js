import React from 'react'
import {withHoCCountDown} from './HoCCountDown'

const CountDown = ({subtract, countDown}) => {
  return (
    <div>
      <h1>{subtract}</h1>
      <button onClick={countDown}>Subtract</button>
    </div>
  )
}

export default withHoCCountDown(CountDown)