import navStyles from './Nav.module.css';
import { Link, NavLink } from 'react-router-dom';

function Nav({ isOpen }) {
    return (
        <>
            <nav className={`${navStyles.navigation} ${isOpen ? navStyles.expanded : navStyles.colapsed}`}>
                <ul id='primary-navigation' className={`${navStyles.list} ${navStyles['karla-medium']}`}>
                    <li><NavLink to='/' className={navStyles.item}>Home</NavLink></li>
                    <li><NavLink to='/about' className={navStyles.item}>About</NavLink></li>
                    <li><NavLink to='/menu' className={navStyles.item}>Menu</NavLink></li>
                    <li><NavLink to='/reservations' className={navStyles.item}>Reservations</NavLink></li>
                    <li><NavLink to='/order-online' className={navStyles.item}>Order Online</NavLink></li>
                    <li><Link to='/login' className={`${navStyles.item} ${navStyles.login}`}>Login</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;