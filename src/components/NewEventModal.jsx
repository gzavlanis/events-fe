import React, { Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewEventForm from "./NewEventForm";

export default class NewEventModal extends React.Component{
    state= {modal: false};
    toggle= ()=> {
        this.setState(previous=> ({ modal: !previous.modal }));
    };

    render(){
        const create= this.props.create;
        var title= "Edit your event";
        var button= <Button onClick= {this.toggle}>Edit</Button>
        if (create){
            title= "Create a new event";
            button= (
                <Button color= "primary" className= "float-left rounded shadow mx-2" onClick= {this.toggle} style= {{minWidth: "200px" }}>Create New</Button>
            );
        }
        return(
            <Fragment>
                {button}
                <Modal isOpen= {this.state.modal} toggle= {this.toggle}>
                    <ModalHeader toggle= {this.toggle}>{title}</ModalHeader>
                    <ModalBody>
                        <NewEventForm resetState= {this.props.resetState} toggle= {this.toggle} student= {this.props.event}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}