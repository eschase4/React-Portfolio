import React from "react";
import movieFinderPreview from '../assets/Alabaster-Alligator_sc.png' //624x506
import playlistPreview from '../assets/myPlaylist.png'
import '../styles/projects.css'

const projects = [
    {
        name: "Movie Finder",
        link: "https://eschase4.github.io/Alabaster-Alligators/",
        preview: movieFinderPreview,
        description: "Allows users to take a quiz about the mood that they are in, and recommends a movie based on the results. Uses rudimentary HTML, CSS, jQuery JavaScript, and makes some API calls."
    },
    {
        name: "Playlist Maker",
        link: "https://enigmatic-island-78855.herokuapp.com/",
        preview: playlistPreview,
        description: "Users can login and manage a personalized playlist. Uses express.js, node.js, Sequelize, Handlebars, and follows MVC file formatting,  "
    },

]

function Projects(props) {

    return (
        <section id="projects">
            <div class="projectContainer">
                <div class="titleCard">
                    <h3>Projects</h3>
                </div>
                <div>
                    <ul class="projectList">
                        {projects.map((project) => {
                            return (
                                <div class="eachProject">
                                    <div>
                                        <h4>{project.name}</h4>
                                    </div>
                                    <a href={project.link}>
                                        <div class="projectImage">
                                            <li><img src={project.preview} alt={project.description}></img></li>
                                        </div>
                                        <div class="project-text hide">
                                            <p>{project.description}</p>
                                            <div class="overlay">
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Projects