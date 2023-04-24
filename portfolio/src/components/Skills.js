import React from "react";
import '../styles/skills.css'

const skillList = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node.js', 'React.js', "REST API's", "Express.js", "MVC FileStructure", "MySQL", "Sequalize"]

function Skills() {
    return (
        <>
            <div class="container">
                <h3 class="titleCard">My Skills</h3>
                <p>Here are the skills I've learned in my Bootcamp so far:</p>
                <ul>
                    {skillList.map((skill) => {
                        return (
                            <li>{skill}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Skills