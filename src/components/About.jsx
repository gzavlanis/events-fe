import React from "react";
import { Row, Col, Container } from "reactstrap";
import Sidebar from "./Sidebar";

export default class About extends React.Component{
    render(){
        return(
            <Row className= "w-100" style= {{backgroundColor: "lightgrey", height: "100vh"}}>
                <Col className= "col-3">
                    <Sidebar/>
                </Col>
                <Col className= "col-9">
                    <Container className= "rounded shadow mt-3 pb-3 bg-white">
                        <h2 className= "text-center pt-2">About this application</h2>
                        <h5 className= "text-center my-3">Welcome to our application!</h5>
                        <b>
                            This application is a ToDo tool, for everyone who wants to store his events in one place, 
                            to have fast access to them later. We decided to create this web application, because it waa good
                            opportunity to see what we can do using React JS, along with backend features, such as Express JS and 
                            node JS.
                        </b>
                        <br/>
                        <b className= "pt-2">
                            You can easily find the source code of this application in my Github page and see by yourself how this 
                            application created. Feel free to clone this epository to your machine and make changes to the code to 
                            make this application better. You can also contact me through my Github and share your ideas about how 
                            to improve the functionality of this project.
                        </b>
                        <br/>
                        <b>
                            Thank you very much for downloading and tested my application. My goal is to keep adding features to
                            make it even better and more useful in the future. This application will be always under construction, 
                            because it's the only way to become better.
                        </b>
                        <p/>
                        <br/>
                        <b>Best wishes,</b>
                        <p/>
                        <br/>
                        <b>Georgios Zavlanis, Web developer</b>
                    </Container>
                </Col>
            </Row>
        );
    }
}