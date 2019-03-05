import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <ul>This is the Navbar
            <Link to="/">Home</Link>

        </ul>
    )
}

export default Navbar

//at some point, I'll have to come back and slap props in that parameter up there.