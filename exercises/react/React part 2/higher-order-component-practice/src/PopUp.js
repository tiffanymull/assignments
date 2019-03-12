import React from 'react'
import {withHocPopUp} from './HocPopUp'


function PopUp({pop, popUp}) {
  return (
      <div>
        <h1 className={pop ? "show" : "hide"}>Um </h1>
        <button onClick={popUp}>Pop</button>
    </div>
  )
}

export default withHocPopUp(PopUp)