import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Contact from './components/ContactPage';
import User from './components/User';
import Login from './components/login_signin';

export default class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path= "/" element= {<Home/>}/>
            <Route exact path= "/dashboard" element= {<Dashboard/>}/>
            <Route exact path= "/contact" element= {<Contact/>}/>
            <Route exact path= "/user" element= {<User/>}/>
            <Route exact path= "/auth" element= {<Login/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}