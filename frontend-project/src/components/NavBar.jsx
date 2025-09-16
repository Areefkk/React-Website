import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" classname="nav-link">Home</Link>
            <Link to="/favorites" classname="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar