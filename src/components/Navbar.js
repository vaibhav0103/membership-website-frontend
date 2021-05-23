import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className="nav nav-pills col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item"><NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/courses" className="nav-link" activeClassName="active">Courses</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></li>
        </ul>
    )
}

export default Navbar
