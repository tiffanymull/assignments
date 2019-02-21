import React from 'react'

const Pet = (props) => {
    console.log(props)
    return (
       
        <div>
            <h1>{props.petName}</h1>
            <h2>{props.petBreed}</h2>

        </div>
    )
}

export default Pet