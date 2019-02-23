import React from 'react'

const Superhero = () => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.pic} alt="hero pic"/>
        </div>
    )
}



export default Superhero