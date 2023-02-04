import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";

export default class Header extends React.Component {
    render() {
        return(
            <Navbar className= "my-2 mt-0">
                <NavbarBrand href = "/" className= "text-secondary">
                    <img src= {logo} height= "50" width= "70" alt= "logo"></img>
                    AGENDA
                </NavbarBrand>
                <Nav>
                <NavItem className= "mx-2">
                    <NavLink exact to = '/about' className = "btn shadow border-primary text-primary">
                        <h6>About</h6>
                    </NavLink>
                    </NavItem>
                    <NavItem className= "mx-2">
                        <NavLink exact to = '/auth' className = "btn shadow border-primary text-primary">
                            <h6>Sign up/Sign in</h6>
                        </NavLink>
                    </NavItem>
                    <NavItem className= "mx-2">
                        <NavLink exact to = '/contact' className = "btn shadow border-secondary text-secondary">
                            <h6>Contact us</h6>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}