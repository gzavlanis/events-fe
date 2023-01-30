import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Container } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";
import NewEventModal from "./NewEventModal";

export default class MyCalendar extends React.Component{
    state= { events: [] };
    componentDidMount(){this.resetState();}
    getEvents= ()=> {
        axios.get(API_URL).then(res=> this.setState({ events: res.data }));
    };
    resetState= ()=> { this.getEvents(); };

    render(){
        return(
            <Container className= "mt-3 shadow rounded" style= {{backgroundColor: "white"}}>
                <div className= "py-3 px-2">
                    <div className= "py-3 pr-2">
                        <NewEventModal create= {true} resetState= {this.resetState}/>
                    </div>
                    <FullCalendar
                        headerToolbar= {{start: "today prev next", end: "dayGridMonth dayGridWeek dayGridDay", center: 'title'}}
                        views= {["dayGridMonth", "dayGridWeek", "dayGridDay"]}
                        themeSystem= "bootstrap5" events= {this.state.events} height= "85vh" 
                        initialView= "dayGridMonth" plugins= {[ dayGridPlugin ]} weekends= {true}
                        selectable editable navLinks= {true}
                    />
                </div>
            </Container>
        );
    }
}