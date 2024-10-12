import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import Logo from './Icons/Logo';
import MenuSideBar from './Header/MenuSideBar';
import CartSideBar from './Header/CartSideBar';
import Flavours from './Buttons/FlavoursButton';
import MenuButton from './Buttons/MenuButton';
import '../style/header.css';


const Header = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (

        <div className='header'>
            <header className="styles_layout_header__YTb_8 ">
                <Link to="/" className="styles_layout_header__logo__ForS_"
                    aria-label="Mr. Pops">
                    <Logo />
                </Link>
                <div className="styles_layout_header__nav__zLv5U">
                    <CartSideBar />
                    <Flavours />

                    <div className="styles_menu_button__IsIOI" onClick={toggleMenu}>
                        <MenuButton />
                    </div>
                </div>
            </header>


            <div className={`menu-sidebar ${menuOpen ? 'open' : ''}`}>
                <div className="menu_sidebar_link" onClick={toggleMenu}>
                    <MenuSideBar />
                </div>
            </div>
        </div>
    );
};

export default Header;
