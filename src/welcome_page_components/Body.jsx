import React from "react";
import { Container, Card, CardBody, CardHeader, CardTitle, CardSubtitle, Row, InputGroup, Input, Button } from "reactstrap";
import dashboard from '../dashboard.png';
import user from '../user.png';
export default class Body extends React.Component {
  render() {
    return (
      <Container>
        <Card className="border-0 shadow-lg rounded">
          <CardHeader className="border-0">
            <h4 className="mt-2 text-center text-secondary">
              Welcome to AGENDA app
            </h4>
          </CardHeader>
          <CardBody>
            <h6>
              The personal assistant, that helps you keep your tasks always in
              mind! Contact us now to give a try in our app. By now, our app is
              in development mode, so we will be very happy to hear your ideas
              about future functions and features.
            </h6>
          </CardBody>
        </Card>
        <Row>
          <Card className="mx-3 col-sm-6 border-0 shadow-lg rounded my-5">
            <img className = "py-3" alt="screenshot" src= {dashboard}></img>
            <CardBody>
              <CardTitle tag="h5" className="text-center">
                Simple design
              </CardTitle>
              <CardSubtitle tag="h6" className="text-muted pt-3">
                The card-styled desing promises a simple and plesant user interface.
                Your data and information are shown in a simple layout that makes you 
                find everything easily!
              </CardSubtitle>
            </CardBody>
          </Card>
          <Card className="mx-3 col-sm-5 border-0 shadow-lg rounded my-5">
            <img className = "py-3" alt="screenshot" src= {user}></img>
            <CardBody>
              <CardTitle tag="h5" className="text-center">
                Create your own event categories
              </CardTitle>
              <CardSubtitle tag="h6" className="text-muted pt-3">
                You can create as many event categories as you wish and give them a different color you like.
              </CardSubtitle>
            </CardBody>
          </Card>
        </Row>
        <Row className= "mb-3">
          <Card className="col-sm-7 border-0 shadow-lg rounded my-1">
            <img className = "py-3" alt="screenshot" src= {user}></img>
            <CardBody>
              <CardTitle tag="h5" className="text-center">
                Create your own event categories
              </CardTitle>
              <CardSubtitle tag="h6" className="text-muted pt-3">
                You can create as many event categories as you wish and give them a different color you like.
              </CardSubtitle>
            </CardBody>
          </Card>
          <Container className= "col-sm-4">
            <h4 className= "text-secondary">Enter your email to contact with you!</h4>
            <h6>We will be very happy if you try the development version of our app!</h6>
            <InputGroup className= "border-0 shadow">
              <Input type = "email" className= "border-0"/>
              <Button className = "btn btn-secondary">Submit</Button>
            </InputGroup>
          </Container>
        </Row>
      </Container>
    );
  }
}
