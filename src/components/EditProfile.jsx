import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label, FormText } from "reactstrap";

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
                        <div className= "d-grid gap-2 mt-3">
                            <Button type= "submit" className= "btn btn-success w-50 shadow">Submit</Button>
                        </div>
                        <div className= "d-grid gap-2 mt-3">
                            <NavLink exact to= "/user" className= "btn btn-danger w-50 shadow">Abort</NavLink>
                        </div>
                    </div>
                </Form>
            </Container>
        </Container>
    );
}