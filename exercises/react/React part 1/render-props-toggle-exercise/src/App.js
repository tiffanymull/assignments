import React from 'react'
import Toggle from './shared/Toggle'

const App = () => {
  return (
    <div>
      <Toggle render={({isToggled, toggler}) =>     //this is a render function? Destructured, no? These are arguments? {}
                                                    //How can I hammer the concept of destructuring into my brain?
          <>
            <h1>The light is {isToggled ? "On" : "Off"}</h1>  
            <button onClick={toggler}>Light Switch</button>
          </>
      }/>
      <Toggle render={({isToggled: on, toggler: toggle}) =>
          <>
            <h1>The light is {on ? "On" : "Off"}</h1>
            <button onClick={toggle}>Light Switch</button>
          </>
      }/>
    </div>
  )
}

export default App

//h1 is a ternary operator? How can I drill and learn this, how it works?