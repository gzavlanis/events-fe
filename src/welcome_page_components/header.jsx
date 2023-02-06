import React, {useEffect, useState } from "react";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";

export default function Header() {
    const style = {position: "fixed", top: "0", width: "100vw", zIndex: "999"};
    const [small, setSmall] = useState(false);

    useEffect(() => {
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>
            setSmall(window.pageYOffset > 200));
        }
    }, []);

        return(
            <Navbar className= {`header ${ small ? "small" : "" }`} style = {style}>
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