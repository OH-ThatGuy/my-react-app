import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <Nav>
            <NavMenu>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                    Home
                </NavLink>
                <NavLink to="/healthbar" className={({ isActive }) => (isActive ? "active" : "")}>
                    Health Bar
                </NavLink>
                <NavLink to="/poison" className={({ isActive }) => (isActive ? "active" : "")}>
                    Poison
                </NavLink>
            </NavMenu>
        </Nav>
    );
};

export default Navbar;
