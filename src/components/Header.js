import { Link } from 'react-router-dom';
import logo from '../assets/images/download.svg';
import Navbar from './Navbar';
import { useAuthContext } from '../context';


const Header = () => {
    const { isAuthenticated }  = useAuthContext();
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                
                <img src={logo} className="d-flex align-items-center col-md-3 mb-2 mb-md-0 logo" alt="logo" />

                <Navbar />

                <div>
                    { isAuthenticated ?                     
                    <div className="dropdown text-end">
                        <div className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />Profile
                        </div>
                        <ul className="dropdown-menu text-small text-center bg-dark profile-dropdown" aria-labelledby="dropdownUser">
                            <li><Link to="/dashboard" className="dropdown-item">Dashboard</Link></li>
                            <li><a className="dropdown-item" href="#">My Courses</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className="logout"><Link to="/logout" className="dropdown-item">Logout</Link></li>
                        </ul>
                    </div>
                    : 
                    <>
                    <button type="button" className="btn btn-outline-dark me-2"><Link to="/login" >Login</Link></button>
                    <button type="button" className="btn btn-warning me-2"><Link to="/signup">Sign Up</Link></button>
                    </>
                    }
                </div>
                
            </header>
        </div>
        
    )
}

export default Header
