import React from 'react';
import { Row, Col, Nav, NavItem, Card, CardHeader, CardBody, CardTitle, Table, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import user from "../user-picture.png";
import { MdDelete } from "react-icons/md";
import LineChart from './LineChart';
import DonoughtChart from './DonoughtChart';

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
                    <NavItem>
                        <NavLink className= "nav-link" exact to= "/dashboard">Your events</NavLink>
                    </NavItem>
                    <NavItem>
                        <Button className = "btn-sm btn-danger mt-1 shadow mx-5">
                            <MdDelete size = {18}/> Delete account
                        </Button>
                    </NavItem>
                </Nav>
                <Card className= "mt-3 rounded shadow">
                    <CardHeader className= "mx-1 row border-0">
                        <Col className= "col-3">
                            <img src= {user} className= 'rounded-circle shadow' alt= "profile" height= "100" width= "100"/>
                        </Col>
                        <Col className= "col-9">
                            <h3 className= 'text-center'>gzavlanis</h3>
                            <h6 className= "mx-3 my-3">You can select the "Edit profile" link above to edit your profile information, or the delete button to permanently delete your data.</h6>
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
                <Card className= "mt-3 rounded shadow mb-4">
                    <CardHeader className= "mx-1 row border-0">
                        <h5 className= 'text-center'>Your data in the application</h5>
                    </CardHeader>
                    <CardBody className= 'row'>
                        <Col className= 'col-sm'>
                            <LineChart/>
                        </Col>
                        <Col className= 'col-sm'>
                            <DonoughtChart/>
                        </Col>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}
