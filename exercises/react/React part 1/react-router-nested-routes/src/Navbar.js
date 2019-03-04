import React from 'react'
import {Link} from "react-router-dom"

const Navbar = (props) => {
    return (
        <ul>This is the Navbar
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">ProductList</Link>
        </ul>
    )
}

export default Navbar