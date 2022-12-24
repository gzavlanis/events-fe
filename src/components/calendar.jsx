import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Button, Container } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";
import { BsPlus } from "react-icons/bs";

export default class MyCalendar extends React.Component{
    state= { events: [] };
    getEvents= ()=> {
        axios.get(API_URL).then(res=> this.setState({ events: res.data }))
    };

    render(){
        return(
            <Container className= "mt-3 shadow rounded" style= {{backgroundColor: "white"}}>
                <div className= "py-3 px-2">
                    <Button className= "btn mb-3 py-1 px-1 shadow-lg" title= "Create new event">
                        <BsPlus size= {30}/>
                    </Button>
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