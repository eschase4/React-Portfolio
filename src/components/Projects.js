import React from "react";
import movieFinderPreview from '../assets/Alabaster-Alligator_sc.png' //624x506
import playlistPreview from '../assets/myPlaylist.png'
import techBlogPreview from '../assets/techblog.png'
import forecastPreview from '../assets/Forecast.png'
import portfolioPreview from '../assets/firstportfolio.png'
import readmePreview from '../assets/readme.png'
import '../styles/projects.css'

const projects = [
    {
        id: 1,
        name: "Movie Finder",
        link: "https://eschase4.github.io/Alabaster-Alligators/",
        preview: movieFinderPreview,
        description: "Allows users to take a quiz about the mood that they are in, and recommends a movie based on the results. Uses rudimentary HTML, CSS, jQuery JavaScript, and makes some API calls.",
        repoLink: "https://github.com/eschase4/Alabaster-Alligators"
    },
    {
        id: 2,
        name: "Playlist Maker",
        link: "https://enigmatic-island-78855.herokuapp.com/",
        preview: playlistPreview,
        description: "Users can login and manage a personalized playlist. Uses express.js, node.js, Sequelize, Handlebars, and follows MVC file formatting.",
        repoLink: "https://github.com/eschase4/Green-Parade"
    },
    {
        id: 3,
        name: "Tech Blog",
        link: "https://fathomless-thicket-47575.herokuapp.com/home",
        preview: techBlogPreview,
        description: "Users can make accounts, log in, and post there thoughts on current tech topics that other users will be able to see on their homepage",
        repoLink: "https://github.com/eschase4/Tech-Blog"
    },
    {
        id: 4,
        name: "Weather Tracker",
        link: "https://eschase4.github.io/Weather-App/",
        preview: forecastPreview,
        description: "My first use of third-party API's; users can enter a location, and recieve a five day forecast for the requested area.",
        repoLink: "https://github.com/eschase4/Weather-App"
    },
    {
        id: 5,
        name: "ReadMe Maker",
        link: "https://github.com/eschase4/README-Generator",
        preview: readmePreview,
        description: "One of my most useful projects; users can clone the app from github, and use their CLI to answer a questionaire and have a professional ReadMe Generated for them.",
        repoLink: "https://github.com/eschase4/README-Generator"
    },
    {
        id: 6,
        name: "First Portfolio",
        link: "https://fathomless-thicket-47575.herokuapp.com/home",
        preview: portfolioPreview,
        description: "This was my original portfolio I made during Week 2 of my bootcamp. It just show's you how far I've come :)",
        repoLink: "https://github.com/eschase4/Portfolio"
    },
    
] 

function Projects() {

    return (
        <section id="projects">
                <div className="titleCard">
                    <h3>Projects</h3>
                </div>
            <div className="projectContainer">
                <div>
                    <ul className="projectList">
                        {projects.map((project) => {
                            return (
                                <div className="eachProject">
                                    <div>
                                        <h4>{project.name}</h4>
                                    </div>
                                    <a href={project.link}>
                                        <div className="projectImage">
                                            <li key={project.id} ><img src={project.preview} alt={project.description}></img></li>
                                        </div>
                                        <div class="project-text hide">
                                            <p>{project.description}</p>
                                            <div className="overlay">
                                            </div>
                                        </div>
                                    </a>
                                    <p><a href={project.repoLink}>Github Repo</a></p>
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