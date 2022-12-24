import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import {API_URL} from "../constants";

export default class NewEventForm extends React.Component{
   state= {pk:0, title: "", start: "", end: "", desc: ""};
   componentDidMount(){
        if (this.props.event){
            const {pk, title, start, end, desc}= this.props.event;
            this.setState({pk, title, start, end, desc});
        }
    }
    onChange= e=> {
        this.setState({[e.target.title]: e.target.value});
    };
    createEvent= e=> {
        e.preventDefault();
        axios.post(API_URL, this.state).then(()=> {
            this.props.resetState();
            this.props.toggle()
        });
    };
    editEvent= e=> {
        e.preventDefault();
        axios.put(API_URL + this.state.pk, this.state).then(()=> {
            this.props.resetState();
            this.props.toggle();
        });
    };
    defaultIfEmpty= value=> {
        return value=== "" ? "" : value;
    };

    render(){
        return(
            <Form color= "dark" dark onSubmit= {this.props.event ? this.editEvent : this.createEvent}>
                <FormGroup>
                    <Label for= "title">Title:</Label>
                    <Input type= "text" name= "title" onChange= {this.onChange} defaultValue= {this.defaultIfEmpty(this.state.title)}/>
                </FormGroup>
                <FormGroup>
                    <Label for= "start">Start:</Label>
                    <Input type= "datetime-local" name= "start" onChange= {this.onChange} defaultValue= {this.defaultIfEmpty(this.state.start)}/>
                </FormGroup>
                <FormGroup>
                    <Label for= "end">End:</Label>
                    <Input type= "datetime-local" name= "end" onChange= {this.onChange} defaultValue= {this.defaultIfEmpty(this.state.end)}/>
                </FormGroup>
                <FormGroup>
                    <Label for= "desc">Description:</Label>
                    <Input type= "textarea" name= "description" onChange= {this.onChange} defaultValue= {this.defaultIfEmpty(this.state.desc)}/>
                </FormGroup>
                <Button color= "success" className= "rounded">Save</Button>
            </Form>
        );
    }
}