
import React from 'react';
import { Link,NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="" >
            <nav className="navbar navbar-expand-md navbar-dark bg-primary  mb-4">
                <div className="container ">
                    <Link className="navbar-brand mx-3" to="/">React Todo</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="./about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="./contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link className='btn btn-outline-light w-25' to ="./adduser">Add User</Link>
                </div>
            </nav>


        </div>

    )
}

export default Navbar;

