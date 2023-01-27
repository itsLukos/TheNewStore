import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../styles/Navbar.css';

function NavBar ( ) {
    return (
        <>
        <nav>
            <div className="bar">
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Electronics">Electronics</Link>
                    </li>
                    <li>
                        <Link to="/Jewelery">Jewelery</Link>
                    </li>
                    <li>
                        <Link to="/MensClothing">Mens clothing</Link>
                    </li>
                    <li>
                        <Link to="/WomensClothing">Womens clothing</Link>
                    </li>
                </ul>
            </div>
        </nav>        
        <Outlet />
    </>
    );
}

export default NavBar;