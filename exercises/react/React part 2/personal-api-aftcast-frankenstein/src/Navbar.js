import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="table">
            <ul>This is the Navbar
                <Link to="/aftcast">Aftcast</Link>
                <Link to="/">Home</Link>
                <Link to="/tips">Tips</Link>
            </ul>
        </div>
    )
}

export default Navbar

//at some point, I'll have to come back and slap props in that parameter up there.
//Or maybe I won't.