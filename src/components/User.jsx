import React from "react";
import { Row, Col, Container } from "reactstrap";
import Sidebar from "./Sidebar";

export default class User extends React.Component{
    render(){
        return(
            <Row className= "w-100" style= {{backgroundColor: 'lightgrey'}}>
                <Col className= "col-3">
                    <Sidebar/>
                </Col>
                <Col className= "col-9">
                    <Container fluid>

                    </Container>
                </Col>
            </Row>
        );
    }
}