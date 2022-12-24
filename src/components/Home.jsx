import React from "react";
import { Col, Row } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";
import Sidebar from "./Sidebar";
import MyCalendar from "./calendar";

export default class Home extends React.Component{
    state= { events: [] };
    componentDidMount(){ this.resetState(); }
    getEvents= ()=> {
        axios.get(API_URL).then(res=> this.setState({ events: res.data }))
    };
    resetState= ()=> { this.getEvents(); };

    render(){
        return(
            <Row className= "w-100" style= {{backgroundColor: 'lightgrey'}}>
                <Col className= "col-3">
                    <Sidebar/>
                </Col>
                <Col className= "col-9" style= {{height: "100vh"}}>
                    <MyCalendar/>
                </Col>
            </Row>
        );
    }
}