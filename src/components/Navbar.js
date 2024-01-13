import React,{useContext} from 'react'
import { Link, useLocation} from "react-router-dom";
import UserContext from '../context/user/UserContext';


const Navbar = () => {
    let location = useLocation();
    const context = useContext(UserContext);
    const {Logout} = context;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">FeedAI</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/topics"? "active": ""}`} to="/topics">Explore</Link>
                        </li>

                    </ul>
                    {!localStorage.getItem('token')?<form className="d-flex">     
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>: <button className="btn btn-primary" onClick={(e)=> Logout()}>Log Out</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;