import React from 'react'
import Navbar from './Navbar'  //means Navbar is nested in Header

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            This is the Header
        </div>
    )
}




export default Header