import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" exact to='/' >Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to='/' >Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to='/about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to='/contact'>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to='/sign-up'>SignUp</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to='/sign-in'>SignIn</NavLink>
                        </li>
                       
                    </ul>

                </div>
            </nav>
        </div>
    )
}
