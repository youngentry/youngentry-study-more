import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">main</NavLink>
                </li>
                <li>
                    <NavLink to="/Sub01">sub01</NavLink>
                </li>
                <li>
                    <NavLink to="/Sub02">sub02</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
