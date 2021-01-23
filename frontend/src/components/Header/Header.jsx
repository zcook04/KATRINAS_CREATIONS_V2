import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="main-header">
            <div className="header-container">
            <nav className="left-nav">
            <Link to="/"><span className="header-katrinas">Katrinas</span><span className="header-creations">Creations</span></Link>
            </nav>
            <nav className="right-nav">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/myaccount">My Account</Link>
                <Link to="/cart">Cart</Link>
            </nav>
            </div>
        </header>
    )
}

export default Header
