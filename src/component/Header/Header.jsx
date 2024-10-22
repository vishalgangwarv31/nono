import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
    const [isSidenavOpen, setIsSidenavOpen] = useState(false);
    const location = useLocation();

    const openSidenav = () => {
        setIsSidenavOpen(true);
    };

    const closeSidenav = () => {
        setIsSidenavOpen(false);
    };

    return (
        <div className='header-container'>
            <img src="/assets/bhc_logo.png" className='image-logo' alt="Logo" />
            <div className='link-container'>
                <Link to="/" className={`link-header-home ${location.pathname === '/' ? 'active' : ''}`}>
                    Home
                </Link>
                <Link to="/service" className={`link-header ${location.pathname === '/service' ? 'active' : ''}`}>
                    Our Service
                </Link>
                <Link to="/product" className={`link-header ${location.pathname === '/product' ? 'active' : ''}`}>
                    Our Product
                </Link>
                <Link to="/about" className={`link-header ${location.pathname === '/about' ? 'active' : ''}`}>
                    About Us
                </Link>
                <Link to="/contact" className={`link-header ${location.pathname === '/contact' ? 'active' : ''}`}>
                    Contact Us
                </Link>
                <button className='login-button'>Login</button>
            </div>
            <span className='open-hamburger' onClick={openSidenav}>&#9776;</span>
            <div className='sidenav' style={{ width: isSidenavOpen ? '250px' : '0' }}>
                <a href="javascript:void(0)" className='closebtn' onClick={closeSidenav}>&times;</a>
                <Link to="/" className={`sidenav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeSidenav}>Home</Link>
                <Link to="/service" className={`sidenav-link ${location.pathname === '/service' ? 'active' : ''}`} onClick={closeSidenav}>Our Service</Link>
                <Link to="/product" className={`sidenav-link ${location.pathname === '/product' ? 'active' : ''}`} onClick={closeSidenav}>Our Product</Link>
                <Link to="/about" className={`sidenav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeSidenav}>About Us</Link>
                <Link to="/contact" className={`sidenav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeSidenav}>Contact Us</Link>
                <button className='login-button-sidenav'>Login</button>
            </div>
        </div>
    );
};

export default Header;
