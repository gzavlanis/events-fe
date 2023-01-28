import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label, FormText } from "reactstrap";
import { BsCheckLg } from "react-icons/bs";
import { BiExit } from "react-icons/bi";

export default function EditProfile(props){
    return(
        <Container fluid style= {{height: "100vh", backgroundColor: "lightgrey"}}>
            <Container className= "Auth-form-container py-2">
                <Form className= "Auth-form">
                    <div className= "Auth-form-content">
                        <h3 className= "Auth-form-title">Edit your profile information</h3>
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
                        <FormGroup>
                            <Label for= "file">Add a profile photo</Label>
                            <Input className= "shadow" type= "file" name= "file" id= "file"/>
                            <FormText color= "dark">You can choose any image file format.</FormText>
                        </FormGroup>
                        <Button type= "button" className= "mt-2 btn btn-success shadow mx-2">
                            <BsCheckLg size= {18}/> Sign in
                        </Button>
                        <NavLink exact to= "/user" className= "mt-2 btn btn-danger shadow mx-2">
                            <BiExit size= {18}/> Abort
                        </NavLink>
                    </div>
                </Form>
            </Container>
        </Container>
    );
}