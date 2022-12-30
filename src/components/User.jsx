import React from "react";
import { Row, Col } from "reactstrap";
import Sidebar from "./Sidebar";

export default class User extends React.Component{
    render(){
        return(
            <Row className= "w-100" style= {{backgroundColor: 'lightgrey'}}>
                <Col className= "col-3">
                    <Sidebar/>
                </Col>
                <Col className= "col-9">

                </Col>
            </Row>
        );
    }
}