import React from "react";
import { Col, Row } from "reactstrap";
import axios from "axios";
import Sidebar from "./Sidebar";
import EventList from "../dashboard components/EventList";
import NewEventModal from "./NewEventModal";
import SimpleCalendar from "../dashboard components/Simple_calendar";
import { API_URL } from "../constants";
import WeatherApp from "../dashboard components/Weather";
import PieChart from "../dashboard components/PieChart";

export default class Dashboard extends React.Component{
    state= { events: [] };
    componentDidMount(){this.resetState();}
    getEvents= ()=> {
        axios.get(API_URL).then(res=> this.setState({ events: res.data}));
    };
    resetState= ()=> { this.getEvents(); };

    render(){
        return(
            <div>
                <Row className= "w-100" style= {{backgroundColor: 'lightgrey'}}>
                    <Col className= "col-3">
                        <Sidebar/>
                    </Col>
                    <Col className= "col-9 mt-2" style= {{height: "100vh"}}>
                        <Row className= "mx-1">
                            <Col className= "col-sm rounded shadow bg-light py-2 mx-1 my-1">
                                <SimpleCalendar/>
                            </Col>
                            <Col className= "col-sm rounded shadow bg-light py-3 mx-1 my-1">
                                <WeatherApp/>
                            </Col>
                            <Col className = "col-sm rounded shadow bg-light py-3 mx-1 my-1">
                                <h5 className= "text-center">Your events by category</h5>
                                <PieChart/>
                            </Col>
                        </Row>
                        <Row className= "rounded shadow bg-white my-3 mx-2">
                            <Col>
                                <EventList events= {this.state.events} resetState= {this.resetState}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className= "mx-2">
                                <NewEventModal create= {true} resetState= {this.resetState}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}