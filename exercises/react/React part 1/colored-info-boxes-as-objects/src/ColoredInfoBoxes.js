import React from 'react'

function ColoredInfoBoxes(props){
    const styles = {
        backgroundColor: props.infoBox.backgroundcolor
    }
    return(
        <div style={styles}>
            <h2>{props.infoBox.title}</h2>
            <h3>{props.infoBox.subtitle}</h3>
            <p>Information: {props.infoBox.information}</p>


        </div>
    )

}



export default ColoredInfoBoxes