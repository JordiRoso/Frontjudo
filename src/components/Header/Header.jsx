import"./Header.scss";
import React from "react";

import { Navigate, NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export function Header(){
    return (
        <div className="Header">
         <Navbar/>

            

        </div>
    );
}