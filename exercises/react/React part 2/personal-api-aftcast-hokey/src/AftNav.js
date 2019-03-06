import React from 'react'
import {Link} from 'react-router-dom'

const AftNav = () => {
    return (
        <ul>
            <Link to="/denver">Denver</Link> 
            <Link to="/losangeles">Los Angeles</Link>
        </ul>
    )
}

export default AftNav
