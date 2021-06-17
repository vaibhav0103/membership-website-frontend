import { Link } from 'react-router-dom';
import logo from '../assets/images/download.svg';
import Navbar from './Navbar';
import { useAuthContext } from '../context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faHouseUser, faListAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    const { loggedIn, user }  = useAuthContext();
    
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                
                <img src={logo} className="d-flex align-items-center col-md-3 mb-2 mb-md-0 logo" alt="logo" />

                <Navbar />

                <div>
                    { loggedIn ?                     
                    <div className="dropdown text-end">
                        <div className="d-block dropdown-toggle fw-bold text-primary" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                            {/* <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" /> */}
                            <FontAwesomeIcon icon={faUserTie} /> Profile
                        </div>
                        <ul className="dropdown-menu text-small text-center bg-dark profile-dropdown" aria-labelledby="dropdownUser">
                            <li className="greet-user"><span className="dropdown-item text-capitalize">Hi, {user.username}</span></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link to="/dashboard" className="dropdown-item"><FontAwesomeIcon icon={faHouseUser} /> Dashboard</Link></li>
                            <li><a className="dropdown-item" href="/enrolled-courses"><FontAwesomeIcon icon={faListAlt} /> My Courses</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className="logout"><Link to="/logout" className="dropdown-item"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link></li>
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
