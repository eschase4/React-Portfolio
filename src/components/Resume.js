import React from "react";
import resumePDF from '../assets/Eli-Chase-Resume.pdf'
import '../styles/socials.css'

function Resume() {
    return (
        <div className="socialsContainer">
            <div className="titleCard">
                <h3>Resume</h3>
            </div>
            <div className="resumeContent">
                <a href={resumePDF} download><h4>Click here to download my resume!</h4></a>
            </div>
        </div>
    )
}

export default Resume