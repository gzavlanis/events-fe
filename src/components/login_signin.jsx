import React from "./react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

export default function Login(props){
    return(
        <Container className= "Auth-form-container">
            <Form className= "Auth-form">
                <div className= "Auth-form-content">
                    <h3 className= "Auth-form-title">Sign In</h3>
                    <FormGroup className= "mt-3">
                        <Label>Email address</Label>
                        <Input type= "email" className= "form-control mt-1" placeholder= "Enter email"/>
                    </FormGroup>
                    <FormGroup className= "mt-3">
                        <Label>Password</Label>
                        <Input type= "password" className= "form-control mt-1" placeholder= "Enter password"/>
                    </FormGroup>
                    <div className= "d-grid gap-2 mt-3">
                        <Button type= "submit" className= "btn btn-primary">Submit</Button>
                    </div>
                    <p className= "forgot-password text-right mt-2">
                        Forgot <a href= "#">password?</a>
                    </p>
                </div>
            </Form>
        </Container>
    );
}