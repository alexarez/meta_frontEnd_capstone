import logo from '../assets/Logo .svg'
import Nav from './Nav.js'

function Header() {
    return (
        <header className='header'>
            <img alt="Little Lemon logo" src={logo} />
            <Nav />
        </header>
    )
}

export default Header;