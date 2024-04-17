import logo from '../assets/Logo .svg'
import Nav from './Nav.js'
import headerStyles from './Header.module.css';
import { useState } from 'react';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className={headerStyles.header}>
            <a href=""><img alt="Little Lemon logo" src={logo} className={headerStyles.logo} /></a>
            <button onClick={toggleNav} className={`${headerStyles.menu} ${isNavOpen ? headerStyles.close : headerStyles.open}`} aria-controls='primary-navigation'><span className={headerStyles['sr-only']}>Menu</span></button>
            <Nav isOpen={isNavOpen} />
        </header>
    );
};

export default Header;