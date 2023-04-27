import React from "react";
import githubLogo from '../assets/github.svg'
import facebookLogo from '../assets/facebook.svg'
import linkedInLogo from '../assets/linkedin.svg'
import '../styles/socials.css'

function Socials() {
    const socialsArr = [
        {
            icon: linkedInLogo,
            link: "https://www.linkedin.com/in/eli-chase-16b146256/",
        },
        {
            icon: githubLogo,
            link: "https://github.com/eschase4",
        },
        {
            icon: facebookLogo,
            link: "https://www.facebook.com/echase4/",
        },
    ]
    return (
        <section id="socials">
            <div className="socialsContainer">
                <div className="titleCard">
                    <h3>Socials</h3>
                </div>
                <div className="socialLinks">
                    {socialsArr.map((social) => {
                        return <a href={social.link}><img className="logo" src={social.icon} alt="githubLogo" /></a>
                    })}
                </div>
            </div>

        </section>
    )
}

export default Socials