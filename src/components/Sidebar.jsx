import React from "react";
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from "cdbreact";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Sidebar= ()=> {
    let activeStyle= { color: "#5bc0de"};
    return(
        <div style= {{display: 'flex', height: '100vh', overflow: 'scroll initial', position: 'fixed'}}>
            <CDBSidebar textColor= "#fff" backgroundColor= "#333" className= "shadow-lg">
                <CDBSidebarHeader prefix= {<i className= "fa fa-bars f-large pt-3"></i>}>
                    <a href= "/" className= "text-decoration-none" style= {{color: 'inherit'}}>
                        <img src= {logo} height= "50" width= "70" alt= "logo"></img>AGENDA
                    </a>
                </CDBSidebarHeader>
                <CDBSidebarContent className= "sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/user" style= {({ isActive })=> isActive ? activeStyle : undefined }>
                            <CDBSidebarMenuItem icon= "user">User</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to= "/dashboard" style= {({ isActive })=> isActive ? activeStyle : undefined }>
                            <CDBSidebarMenuItem icon= "list">Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to= "/calendar" style= {({ isActive })=> isActive ? activeStyle : undefined }>
                            <CDBSidebarMenuItem icon= "calendar">Calendar</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to= "/about" style= {({ isActive })=> isActive ? activeStyle : undefined }>
                            <CDBSidebarMenuItem icon= "info">About</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to= "/contact" style= {({ isActive })=> isActive ? activeStyle : undefined }>
                            <CDBSidebarMenuItem icon= "envelope">Contact</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to= "/auth" style= {({ isActive })=> isActive ? activeStyle : undefined }>
                            <CDBSidebarMenuItem icon= "sign-out">Logout</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter className= "text-center">
                    <div className= "sidebar-btnwrapper" style= {{padding: '20px 5px,'}}>
                        <p>
                            &#169;&ensp;2023 Georgios Zavlanis&ensp;
                            <FaGlobe size= {15}/>&ensp;
                            <FaGithub size= {15}/>&ensp;
                        </p>
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
}
export default Sidebar;