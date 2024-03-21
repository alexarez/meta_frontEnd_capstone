import logo from '../assets/Logo .svg'

function Footer() {
    return (
        <footer className='footer'>
            <img alt="Footer logo" src={logo}/>
            <div className='list-wrapper'>
                <div>
                    <h4>Doormat <br></br>Navigation</h4>
                    <nav>
                        <ul>
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
                    <h4>Contact</h4>
                    <nav>
                        <ul>
                            <li><a href=''>Adress</a></li>
                            <li><a href=''>Phone number</a></li>
                            <li><a href=''>Email</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h4>Social Media Links</h4>
                    <nav>
                        <ul>
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