import React from 'react'
import {withHocCountUp} from './HocCountUp'

const CountUp = ({add, countUp, scare}) => {
  return (
    <div>
        <h1>{scare}</h1>
      <h1>{add}</h1>
      <button onClick={countUp}>Add</button>
    </div>
  )
}

export default withHocCountUp(CountUp)
