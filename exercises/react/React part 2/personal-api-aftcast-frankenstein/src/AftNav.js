import React from 'react'
import {Link} from 'react-router-dom'

const AftNav = () => {
    return (
        <ul>
            <li className="quickRef"> <Link to="/denver">Mountain (Rocky)</Link> </li> 
            <li className="quickRef"> <Link to="/losangeles">Pacific</Link> </li>
            <li className="quickRef"> <Link to="/newyork">Eastern</Link> </li>
            <li className="quickRef"> <Link to="/chicago">Central</Link> </li>
            <li className="quickRef"> <Link to="/phoenix">Mountain (Phoenix)</Link> </li>
        </ul>
    )
}

export default AftNav
