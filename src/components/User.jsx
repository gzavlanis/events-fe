import React, { useState } from "react";
import { Row, Col, Navbar, NavbarToggler, Nav, NavItem, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function User(args){
    return(
        <Row className= "w-100" style= {{backgroundColor: 'lightgrey'}}>
            <Col className= "col-3">
                <Sidebar/>
            </Col>
            <Col className= "col-9">
                <Nav pills className= "shadow bg-light">
                    <NavItem>
                        <NavLink className= "nav-link" exact to= "/editProfile">Edit Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className= "nav-link" exact to= "/login">Logout</NavLink>
                    </NavItem>
                </Nav>
                <Row>
                    <Col className= "col-3 shadow rounded">
                        
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
