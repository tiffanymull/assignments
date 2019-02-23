import React from 'react'


const VacationSpots = (props) => {
    return (
        <div className="destination">
            <h2>{props.spot}</h2>
            <h3>{props.season}</h3>
            <p>{props.cost}</p>
            <img src={props.imgUrl} alt="pic of place"/>
        </div>
    )

}

export default VacationSpots