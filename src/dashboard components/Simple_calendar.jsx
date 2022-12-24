import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function SimpleCalendar(){
    const [date, setDate]= useState(new Date());
    return(
        <div className= "react-calendar mt-2">
            <Calendar onChange= {setDate} value= {date} defaultView= 'month' locale= "en"/>
        </div>
    );
}