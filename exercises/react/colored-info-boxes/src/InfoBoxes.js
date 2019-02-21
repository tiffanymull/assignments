import React from 'react'

const InfoBoxes = (props) => {
    const styles = {
        backgroundColor: props.InfoBoxes.backgroundcolor
    }
    return (
        <div style={styles}>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>Information: {props.information}</p>
        </div>
    )

}

export default InfoBoxes