import React from 'react'
import './Header.css'

const Header = (props) => {
    return (
        <header className="main-header">
            <div className="header-container">
            <nav className="left-nav">
                <a href="home.html">Home</a>
                <a href="shop.html">Shop</a>
            </nav>
            <div className="news-ticker">{props.newsTicker || "New holiday deals arriving on 1/22/21"}</div>
            <nav className="right-nav">
                <a href="account.html">My Account</a>
                <a href="cart.html">Cart</a>
            </nav>
            </div>
        </header>
    )
}

export default Header
