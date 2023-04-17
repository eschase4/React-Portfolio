import React from "react";
import propic from '../assets/propic.jpg'

function AboutMe() {
    return (
        <div class="aboutMeContainer">
            <div class="titleCard">
                <h3>About Me</h3>
            </div>
            <img class="myPic" src={propic} alt="Me"></img>
            <p>Hey! My name is Eli Chase and I am a Full Stack Web Developer. I am currently finishing up a Full Stack Bootcamp at
                The University Of Pennsylvania. I am proficient in JavaScript, and prefer to work on the back end and logic side of things.
                However, I am also versed in CSS, HTML, Bootstrap, and React.js as well.
            </p>
            <p>
                In my free time, I am a music lover and musician. I am currently the vocalist and lead guitarist of <a href="">Horseback Waterpolo</a>,
                a local Math Rock band in my hometown of Erie, Pennsylvania.
            </p>
        </div>
    )
}

export default AboutMe