import React from 'react'
import ColoredInfoBoxes from './ColoredInfoBoxes'

const App = () => {
  return (
    <div>
      <ColoredInfoBoxes 
          infoBox={{title: "Title 1", 
          subtitle: "Subtitle 1", 
          information: "This is the information.",
          backgroundcolor: "pink"}}
      />
      <ColoredInfoBoxes 
          infoBox={{title:"Title 2",
          subtitle:"Subtitle 2",
          information:"This is the information.",
          backgroundcolor: "green"}}
      />
      <ColoredInfoBoxes 
          infoBox={{title:"Title 3",
          subtitle:"Subtitle 3",
          information:"This is the information.",
          backgroundcolor: "blue"}}
      />
      <ColoredInfoBoxes 
          infoBox={{title:"Title 4",
          subtitle:"Subtitle 4",
          information:"This is the information.",
          backgroundcolor: "red"}}
      />
      <ColoredInfoBoxes 
          infoBox={{title:"Title 5",
          subtitle:"Subtitle 5",
          information:"This is the information.",
          backgroundcolor: "gray"}}
      />  
      <ColoredInfoBoxes 
          infoBox={{title:"Title 6",
          subtitle:"Subtitle 6",
          information:"This is the information.",
          backgroundcolor: "purple"}}
      />
      <ColoredInfoBoxes 
          infoBox={{title:"Title 7",
          subtitle:"Subtitle 7",
          information:"This is the information.",
          backgroundcolor:"yellow"}}
      />
      <ColoredInfoBoxes 
        infoBox={{title:"Title 8",
        subtitle:"Subtitle 8",
        information:"This is the information.",
        backgroundcolor: "orange"}}
      />
      <ColoredInfoBoxes 
          infoBox={{title:"Title 9",
          subtitle:"Subtitle 9",
          information:"This is the information.",
          backgroundcolor: "teal"}}
      />
      <ColoredInfoBoxes 
          infoBox={{title:"Title 10",
          subtitle:"Subtitle 10",
          information:"This is the information.",
          backgroundcolor: "aqua"}}
      />

      Hi.
    </div>
  )
}

export default App