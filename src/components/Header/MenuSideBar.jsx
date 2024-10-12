import React from 'react'
import { Link } from 'react-router-dom'

const MenuSideBar = () => {
    return (
        <>
            <div className="button-container">
                <div className="language-switcher">
                    <button className="lang-button active">ua</button>
                    <button className="lang-button">en</button>
                </div>
                <div className="menu-button">
                    <button className="menu-toggle">
                        Menu
                        <span className="menu-icon">
                            <svg viewBox="0 0 24 24" className="menu-cross">
                                <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="2" />
                                <line x1="3" y1="21" x2="21" y2="3" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/selling-points">Selling Points</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
        </>
    )
}

export default MenuSideBar