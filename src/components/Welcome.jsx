import React from "react";
import Header from "../welcome_page_components/header";
import Body from "../welcome_page_components/Body";
import Footer from "../welcome_page_components/Footer";
import background from "../background.jpg";

export default class Welcome extends React.Component{
    style = {
        backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", backgroundPosition: "center"
    };
    
    render() {
        return(
            <div style= {this.style}>
                <Header/>
                <div style =  {{paddingTop: "13vh"}}>
                    <Body/>
                </div>
                <Footer/>
            </div>
        );
    }
}