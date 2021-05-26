import { Link } from 'react-router-dom';
import logo from '../assets/images/download.svg';
import Navbar from './Navbar';


const Header = () => {

    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                
                <img src={logo} className="d-flex align-items-center col-md-3 mb-2 mb-md-0 logo" alt="logo" />

                <Navbar />

                <div className="text-end">
                    <button type="button" className="btn btn-outline-dark me-2"><Link to="/login" >Login</Link></button>
                    <button type="button" className="btn btn-warning"><Link to="/signup">Sign Up</Link></button>
                </div>
                <div className="dropdown text-end">
                    <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />Profile
                    </a>
                    <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">Account Info</a></li>
                        <li><a className="dropdown-item" href="#">My Courses</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </header>
        </div>
        
    )
}

export default Header
