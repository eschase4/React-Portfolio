import React from "react";
import linkedIn from '../assets/propic.jpg'
import '../styles/aboutMe.css'

function AboutMe() {
    return (
        <div className="container">
            <div className="titleCard">
                <h3>About Me</h3>
            </div>
            <div className="aboutMeContent">
                <img className="myPic" src={linkedIn} alt="Me standing there looking handsome"></img>
                <div className="aboutMeText">
                    <p>Hey! My name is Eli Chase, I'm 26 years old, and I am a Full Stack Web Developer. I am currently finishing up a Full Stack Bootcamp at
                        The University Of Pennsylvania. I am proficient in JavaScript, and prefer to work on the back end and logic side of things.
                        However, I am also versed in CSS, HTML, Bootstrap, and React.js as well.
                    </p>
                    <p>
                        In my free time, I am a music lover and musician. I am currently the vocalist and lead guitarist of
                        <a href="https://open.spotify.com/artist/1f9BZQObzBu0lyVo0gwbYE?si=Zmcg8TAnQHWJlqpgsrhoYw"> Horseback Waterpolo</a>,
                        a local Math Rock band in my hometown of Erie, Pennsylvania. Prior to my Web Development journey, I studied Music
                        Education at Mercyhurst University, and I currently teach guitar lessons at my local music school.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe