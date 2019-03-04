import React from 'react'

const Pet = (props) => {
    return (
        <ul>
            <li>{props.name}</li>
            <li>{props.breed}</li>
            <br/>
        </ul>
    )
}

export default Pet