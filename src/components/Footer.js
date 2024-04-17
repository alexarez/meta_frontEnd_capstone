import logo from '../assets/Logo .svg';
import footStyles from './Footer.module.css';

function Footer() {
    return (
        <footer className={footStyles.footer}>
            <a href=""><img alt="Footer logo" src={logo} className={footStyles.logo}/></a>
            <div className={footStyles['list-wrapper']}>
                <div>
                    <h4 className={footStyles['karla-extra-bold']}>Doormat<br></br>Navigation</h4>
                    <nav>
                        <ul className={`${footStyles['karla-medium']}`}>
                            <li><a href=''>Home</a></li>
                            <li><a href=''>About</a></li>
                            <li><a href=''>Menu</a></li>
                            <li><a href=''>Reservations</a></li>
                            <li><a href=''>Order Online</a></li>
                            <li><a href=''>Login</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h4 className={footStyles['karla-extra-bold']}>Contact</h4>
                    <nav>
                        <ul className={`${footStyles['karla-medium']}`}>
                            <li><a href=''>Adress</a></li>
                            <li><a href=''>Phone number</a></li>
                            <li><a href=''>Email</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h4 className={footStyles['karla-extra-bold']}>Social Media Links</h4>
                    <nav>
                        <ul className={`${footStyles['karla-medium']}`}>
                            <li><a href=''>Adress</a></li>
                            <li><a href=''>Phone number</a></li>
                            <li><a href=''>Email</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;