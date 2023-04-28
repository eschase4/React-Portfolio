import React from "react";
import '../styles/skills.css'
import htmlLogo from '../assets/skill-logos/html.png'
import cssLogo from '../assets/skill-logos/css.png'
import bootstrapLogo from '../assets/skill-logos/bootstrap.png'
import javaScriptLogo from '../assets/skill-logos/javascript.png'
import typeScriptLogo from '../assets/skill-logos/typescript.png'
import nodeLogo from '../assets/skill-logos/nodejs.png'
import expressLogo from '../assets/skill-logos/expressjs.png'
import reactLogo from '../assets/skill-logos/react.png'
import mySqlLogo from '../assets/skill-logos/mysql.png'
import mongoDbLogo from '../assets/skill-logos/mongodb.png'



// const skillList = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node.js', 'React.js', "REST API's", "Express.js", "MVC FileStructure", "MySQL", "Sequalize"]
const skillList = [
    {
        skill: 'HTML',
        logo: htmlLogo
    },
    {
        skill: 'CSS',
        logo: cssLogo
    },
    {
        skill: 'Bootstrap',
        logo: bootstrapLogo
    },
    {
        skill: 'JavaScript',
        logo: javaScriptLogo
    },
    {
        skill: 'TypeScript',
        logo: typeScriptLogo
    },
    {
        skill: 'Node.js',
        logo: nodeLogo
    },
    {
        skill: 'Express.js',
        logo: expressLogo
    },
    {
        skill: 'MySQL',
        logo: mySqlLogo
    },
    {
        skill: 'MongoDB',
        logo: mongoDbLogo
    },
    {
        skill: 'React.js',
        logo: reactLogo
    },
]
function Skills() {
    return (
        <>
            <div class="container">
                <h3 class="titleCard">My Skills</h3>
                <p>Here are the skills and technologies I've learned in my Bootcamp so far:</p>
                <div className="logoContainer">
                    {skillList.map((skill) => {
                        return (
                            <img className="skillLogo" src={skill.logo} alt={skill.skill}></img>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Skills