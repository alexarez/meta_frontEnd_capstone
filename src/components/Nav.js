import navStyles from './Nav.module.css';

function Nav({ isOpen }) {
    return (
        <>
            <nav className={`${navStyles.navigation} ${isOpen ? navStyles.expanded : navStyles.colapsed}`}>
                <ul id='primary-navigation' className={`${navStyles.list} ${navStyles['karla-medium']}`}>
                    <li><a href='' className={navStyles.item}>Home</a></li>
                    <li><a href='' className={navStyles.item}>About</a></li>
                    <li><a href='' className={navStyles.item}>Menu</a></li>
                    <li><a href='' className={navStyles.item}>Reservations</a></li>
                    <li><a href='' className={navStyles.item}>Order Online</a></li>
                    <li><a href='' className={`${navStyles.item} ${navStyles.login}`}>Login</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;