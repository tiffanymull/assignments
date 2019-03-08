import React from 'react'
import crying from './crying_lady.jpg'
import ant from './cropped-ant.jpg'
import arrgh from './aargh-old.jpg'

const Tips = () => {
    return (
        <div className="wrapper">
            <div className="tipsContent">
                <h1>Tips</h1>
                <p>Are you looking for advice on how best to enjoy the weather you may or may not have experienced?  Of course you are!  Here are some suggestions:</p>
                <img src={crying} alt="crying lady" />
                <p>Make your tears match the rain you could've soaked up.</p> <br></br><br></br>
                <img src={ant} alt="sad little ant" />
                <p>Wonder where the ants took shelter that winter.</p> <br></br><br></br>
                <img src={arrgh} alt="creepy straining" />
                <p>Obsess.</p> <br></br><br></br>
            </div> <br></br>

            <div className="tipsImage1">

            </div>
        </div>
    )
}

export default Tips