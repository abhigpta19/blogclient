import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {

  const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    const handleLinkClick = () => {
        if (!collapsed) {
            toggleNavbar();
        }
    };

  return (
    <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarSupportedContent" aria-expanded={!collapsed} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.5 4.5A.5.5 0 0 1 2 4h12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5zM1.5 8a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5zm0 3.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5z"/>
                  </svg>
            </span>
            </button>

            <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/" onClick={handleLinkClick}>Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create" onClick={handleLinkClick}>Create Post</Link>
                    </li>
                </ul>
                <ul className="navbar-nav my-2 my-lg-0">
                    <li className="nav-item my-2 my-sm-0">
                        <Link className="nav-link" to="/login" onClick={handleLinkClick} id="login-nav">Login</Link>
                    </li>
                    <li className="nav-item mr-sm-2">
                        <Link className="nav-link" to="/signup" onClick={handleLinkClick} id="Signup-nav">Sign up</Link>
                    </li>
                </ul>
            </div>
        </nav>
  );
}
export default Header;