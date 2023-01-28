import React from "react";
import { Button, Form, FormGroup, Input, Label, FormText, Row, Col } from "reactstrap";
import Sidebar from "./Sidebar";

export default class Contact extends React.Component{
    render(){
        return(
            <Row style= {{backgroundColor: "lightgray", height: "100vh"}}>
                <Col className= "col-3">
                    <Sidebar/>
                </Col>
                <Col className= "col-9 mt-2">
                    <h3 className= "text-center">Contact with the programmers</h3>
                    <Form className= "container">
                        <FormGroup>
                            <Label for= "name">Name</Label>
                            <Input className= "shadow" type= "text" name= "name" id= "name" placeholder= "Enter your name"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for= "email">Email</Label>
                            <Input className= "shadow" type= "email" name= "email" id= "email" placeholder= "Enter your Email"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for= "message">Message</Label>
                            <Input className= "shadow" type= "textarea" name= "message" id= "message" placeholder= "Write your Message"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for= "file">Add files to help us understand</Label>
                            <Input className= "shadow" type= "file" name= "file" id= "file"/>
                            <FormText color= "dark">You can upload image files with shots from your screen, to help understand your issue.</FormText>
                        </FormGroup>
                        <Button className= "shadow">
                            <i className= "fa fa-paper-plane"></i>
                            &nbsp;Send
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}