import AnalogClock from 'analog-clock-react';
import { Container } from 'reactstrap';
   
export default function Clock() {
    let options = {
        width: "245px",
        border: "true",
        borderColor: "lightgrey",
        baseColor: "lightGrey",
        centerColor: "black",
        centerBorderColor: "#ffffff",
        handColors: {
            second: "blue",
            minute: "black",
            hour: "black"
        }
    };
   
    return (
        <Container className= 'text-center my-4 mx-1'>
            <AnalogClock {...options}/>
        </Container>
    );
}