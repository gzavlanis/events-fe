import React, { useState } from 'react';
import { Row, Col, Nav, NavItem, Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function User(args){
    return(
        <Row className= "w-100" style= {{backgroundColor: "lightgrey"}}>
            <Col className= "col-3">
                <Sidebar/>
            </Col>
            <Col className= "col-9 mt-3">
                <Nav pills className= "shadow bg-light rounded shadow">
                    <NavItem>
                        <NavLink className= "nav-link" exact to= "/">Edit Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className= "nav-link" exact to= "/auth">Logout</NavLink>
                    </NavItem>
                </Nav>
                <Card className= "mt-3 rounded shadow">
                    <CardHeader className= "row">
                        <Col className= "col-3">
                            <img src= "" className= 'rounded' alt= "profile picture"></img>
                        </Col>
                        <Col className= "col-9">
                            <h3 className= 'text-center'>User's name</h3>
                        </Col>
                    </CardHeader>
                    <CardBody>
                        <CardTitle>User's information</CardTitle>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}
