import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="table">
            <ul>
                <li className="navItem"> <Link to="/aftcast">Aftcast</Link> </li>
                <li className="navItem"> <Link to="/">Home</Link> </li>
                <li className="navItem"> <Link to="/tips">Tips</Link> </li>
            </ul>
        </div>
    )
}

export default Navbar

//at some point, I'll have to come back and slap props in that parameter up there.
//Or maybe I won't.