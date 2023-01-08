import React from 'react';
import { Row, Col, Nav, NavItem, Card, CardHeader, CardBody, CardTitle, Table } from "reactstrap";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import user from "../user-picture.png";

export default function User(args){
    return(
        <Row className= "w-100" style= {{backgroundColor: "lightgrey", height: "100vh"}}>
            <Col className= "col-3">
                <Sidebar/>
            </Col>
            <Col className= "col-9 mt-3">
                <Nav pills className= "shadow bg-light rounded shadow">
                    <NavItem>
                        <NavLink className= "nav-link" exact to= "/edit">Edit Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className= "nav-link" exact to= "/auth">Logout</NavLink>
                    </NavItem>
                </Nav>
                <Card className= "mt-3 rounded shadow">
                    <CardHeader className= "mx-1 row border-0">
                        <Col className= "col-3">
                            <img src= {user} className= 'rounded-circle shadow' alt= "profile" height= "200" width= "200"/>
                        </Col>
                        <Col className= "col-9">
                            <h3 className= 'text-center'>User's name</h3>
                            <h5 className= "mx-3 mt-2">You can select the "Edit profile" link above to edit your profile information.</h5>
                        </Col>
                    </CardHeader>
                    <CardBody>
                        <CardTitle>
                            <h4 className= 'text-center'>User's information</h4>
                        </CardTitle>
                        <Table light color= "light" className= "mt-3">
                            <thead>
                                <th>Fullname</th>
                                <th>Email</th>
                                <th>Password</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Georgios Zavlanis</td>
                                    <td>gzavlanis@gmail.com</td>
                                    <td>********</td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}
