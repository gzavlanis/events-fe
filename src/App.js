import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Contact from './components/ContactPage';

export default class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path= "/" element= {<Home/>}/>
            <Route exact path= "/dashboard" element= {<Dashboard/>}/>
            <Route exact path= "/contact" element= {<Contact/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}