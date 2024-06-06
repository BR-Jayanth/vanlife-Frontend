import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Navbar.module.css"
import van_logo from "../../assets/navbar/logog.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    // navbar for the application
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
      }
    return (
        <>
            <nav className={style.container}>
                <span className={style.navLogo}>
                    <NavLink to={"/"} style={({isActive})=> isActive? activeStyle :null} ><img src={van_logo} alt='app-logo'></img></NavLink>
                </span>
                <span className={style.navTabs}>
                    <NavLink to={"/host"} style={({isActive})=> isActive ? activeStyle :null} >Host</NavLink>
                    <NavLink to={"/about"} style={({isActive})=> isActive ? activeStyle :null} >About</NavLink>
                    <NavLink to={"/vans"} style={({isActive})=> isActive ? activeStyle :null} >Vans</NavLink>
                    <NavLink to={"/login"} style={({isActive})=> isActive ? activeStyle :null} ><FontAwesomeIcon icon={faUser} size="sm" /></NavLink>
                    <NavLink to={"/"} style={({isActive})=> isActive ? activeStyle :null} onClick={()=>{localStorage.setItem("loggedIn",false)}} ><FontAwesomeIcon icon={faRightFromBracket} /></NavLink>
                    
                </span>


            </nav>
        </>
    )
}
