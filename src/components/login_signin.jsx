import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import Joi from "joi";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";
import toastr from "toastr";
import { FaSignInAlt } from "react-icons/fa";

export default function Login(){
    const [user,setUser] = useState({ username: "", password: "", });
    const [errors, setErrors] = useState({});

    const schema = Joi.object({
        fullname: Joi.string().min(12).max(30).required(),
        username: Joi.string().min(6).max(20).required(),
        password: Joi.string().min(8).max(20).required(),
    });

    const handleSave = (event) => {
        const {name, value} = event.target;
        let userData = {...user};
        userData[name] = value;
        setUser(userData);
    };

    const navigate = useNavigate();
    let [authMode, setAuthMode]= useState("signin");
    const changeAuthMode= () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    };

    const validateForm = (event) => {
        event.preventDefault();
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const result = schema.validate(user,{ abortEarly: false });
        console.log(result);
        const { error } = result;
        if (!error) {
            axios.post("#", {
                username: username.value, password: password.value,
            }).then((response) => {
                console.log(response);
                toastr.success(`Welcome ${username}`, 'Success!', {closeButton: true, positionClass: 'toastr-top-right'});
                localStorage.setItem('token', response.data.token);
                navigate('/');
            });
        } else {
            const errorData= {};
            for (let item of error.details) {
                const name = item.path[0];
                const message = item.message;
                errorData[name] = message;
            }
            console.log(errors);
            setErrors(errorData);
            toastr.error(JSON.stringify(errorData), 'Error!', {closeButton: true, positionClass: 'toast-top-right'});
            return errorData;
        }
    };

    if (authMode === "signin"){
        return(
            <Container fluid className = "py-4" style= {{height: "100vh", backgroundColor: "lightgrey"}}>
                <Container className= "py-4">
                    <Form>
                        <div>
                            <h3 className= "text-center">Sign In</h3>
                            <div className= "text-center">
                                Not registered yet?{" "}
                                <span className= "link-primary" onClick= {changeAuthMode}>Sign up</span>
                            </div>
                            <FormGroup className= "mb-2 mx-sm-2 mb-sm-2">
                                <Label>Username</Label>
                                <Input type= "text" className= "form-control mt-1 border-0 shadow" name= "username" 
                                    id = "username" placeholder= "Enter email" value = {user.username} onChange = {handleSave}/>
                            </FormGroup>
                            <FormGroup className= "mb-2 mx-sm-2 mb-sm-2">
                                <Label>Password</Label>
                                <Input type= "password" className= "form-control mt-1 border-0 shadow" name = "password" 
                                    id = "password" placeholder= "Enter password" value = {user.password} onChange = {handleSave}/>
                            </FormGroup>
                            <Button type= "button" className= "mt-2 btn btn-success shadow-lg mx-2" onClick= {validateForm}>
                                <FaSignInAlt size= {18}/> Sign in
                            </Button>
                            <p className= "text-right mt-2">
                                Forgot <Link to= "/">Password</Link> ?
                            </p>
                        </div>
                    </Form>
                </Container>
            </Container>
        );
    }

    return(
        <Container fluid style= {{height: "100vh", backgroundColor: "lightgrey"}}>
            <Container className= "py-4">
                <Form className= "Auth-form py-4">
                    <div className= "Auth-form-content">
                        <h3 className= "text-center">Sign Up</h3>
                        <div className= "text-center">
                            Already Registered?{" "}
                            <span className= "link-primary" onClick= {changeAuthMode}>Sign In</span>
                        </div>
                        <FormGroup className= "mb-2 mx-sm-2 mb-sm-2">
                            <Label>Full name</Label>
                            <Input type= "text" className= "form-control mt-1 border-0 shadow" placeholder= "e.g. John Doe"/>
                        </FormGroup>
                        <FormGroup className= "mb-2 mx-sm-2 mb-sm-2">
                            <Label>Email</Label>
                            <Input type= "email" className= "form-control mt-1 border-0 shadow" placeholder= "Email address"/>
                        </FormGroup>
                        <FormGroup className= "mb-2 mx-sm-2 mb-sm-2">
                            <Label>Password</Label>
                            <Input type= "password" className= "form-control mt-1 border-0 shadow" placeholder= "Password"/>
                        </FormGroup>
                        <Button type= "button" className= "mt-2 btn btn-success shadow-lg mx-2" onClick= {validateForm}>
                            <FaSignInAlt size= {18}/> Sign in
                        </Button>
                        <p className= "text-center mt-2">
                            Forgot <Link to= "/">Password</Link> ?
                        </p>
                    </div>
                </Form>
            </Container>
        </Container>
    );
}