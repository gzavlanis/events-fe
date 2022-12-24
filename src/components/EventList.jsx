import React from "react";
import { Table } from "reactstrap";
import NewEventModal from "./NewEventModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

export default class EventList extends React.Component{
    render(){
        const events= this.props.events;
        return(
            <Table dark striped borderless>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {!events || events.length<= 0 ? (
                        <tr>
                            <td colSpan= "6" align= "center">
                                <b>There are no resent events.</b>
                            </td>
                        </tr>
                    ) : (
                        events.map(event=> (
                            <tr key= {event.pk}>
                                <td>{event.title}</td>
                                <td>{event.start}</td>
                                <td>{event.end}</td>
                                <td>{event.desc}</td>
                                <td align= "center">
                                    <NewEventModal create= {false} event= {event} resetState= {this.props.resetState}/>
                                    &nbsp;&nbsp;
                                    <ConfirmRemovalModal pk= {event.pk} resetState= {this.props.resetState}/>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        );
    }
}