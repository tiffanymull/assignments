import React from 'react'
import {Link} from 'react-router-dom'

const AftNav = () => {
    return (
        <ul>
            <Link to="/denver">Denver</Link> 
            <Link to="/losangeles">Los Angeles</Link>
            <Link to="/newyork">New York</Link>
            <Link to="/chicago">Chicago</Link>
            <Link to="/phoenix">Phoenix</Link>
        </ul>
    )
}

export default AftNav
