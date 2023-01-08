import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

export default function Login(props){
    let [authMode, setAuthMode]= useState("signin");
    const changeAuthMode= () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin"){
        return(
            <Container fluid style= {{height: "100vh", backgroundColor: "lightgrey"}}>
                <Container className= "Auth-form-container py-2">
                    <Form className= "Auth-form">
                        <div className= "Auth-form-content">
                            <h3 className= "Auth-form-title">Sign In</h3>
                            <div className= "text-center">
                                Not registered yet?{" "}
                                <span className= "link-primary" onClick= {changeAuthMode}>Sign up</span>
                            </div>
                            <FormGroup className= "mt-3">
                                <Label>Email address</Label>
                                <Input type= "email" className= "form-control mt-1 border-0 shadow" placeholder= "Enter email"/>
                            </FormGroup>
                            <FormGroup className= "mt-3">
                                <Label>Password</Label>
                                <Input type= "password" className= "form-control mt-1 border-0 shadow" placeholder= "Enter password"/>
                            </FormGroup>
                            <div className= "d-grid gap-2 mt-3">
                                <Button type= "submit" className= "btn btn-primary w-50 shadow">Submit</Button>
                            </div>
                            <p className= "forgot-password text-right mt-2">
                                Forgot <a href= "#">password?</a>
                            </p>
                        </div>
                    </Form>
                </Container>
            </Container>
        );
    }

    return(
        <Container fluid style= {{height: "100vh", backgroundColor: "lightgrey"}}>
            <Container className= "Auth-form-container py-2">
                <Form className= "Auth-form">
                    <div className= "Auth-form-content">
                        <h3 className= "Auth-form-title">Sign Up</h3>
                        <div className= "text-center">
                            Already Registered?{" "}
                            <span className= "link-primary" onClick= {changeAuthMode}>Sign In</span>
                        </div>
                        <FormGroup className= "mt-3">
                            <Label>Full name</Label>
                            <Input type= "text" className= "form-control mt-1 border-0 shadow" placeholder= "e.g. John Doe"/>
                        </FormGroup>
                        <FormGroup className= "mt-3">
                            <Label>Email</Label>
                            <Input type= "email" className= "form-control mt-1 border-0 shadow" placeholder= "Email address"/>
                        </FormGroup>
                        <FormGroup className= "mt-3">
                            <Label>Password</Label>
                            <Input type= "password" className= "form-control mt-1 border-0 shadow" placeholder= "Password"/>
                        </FormGroup>
                        <div className= "d-grid gap-2 mt-3">
                            <Button type= "submit" className= "btn btn-primary w-50 shadow">Submit</Button>
                        </div>
                        <p className= "text-center mt-2">
                            Forgot <a href= "#">password?</a>
                        </p>
                    </div>
                </Form>
            </Container>
        </Container>
    );
}