import React from "react"; 
import '../styles/navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <ul id="navbarList">
                <li><a href="#header">Top</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar