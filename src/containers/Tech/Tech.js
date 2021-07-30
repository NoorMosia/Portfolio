import React from "react";
import * as styles from "./Tech.module.css";

import RonaImg from "./rona.png";
import Cipher from "./cipher.png";
import Fpl from "./fpl.png";
import Project from "../../components/Project/Project";

const Projects = [
    {
        name: "Corona Tracker",
        description: `Web app that help track corona virus cases around the world. 
        Uses intactive maps and graphs to aid understanding of the increasing/decreasing 
        numbers. built with React and uses tools such as Firebase, graphs and 
        google maps`,
        image: RonaImg,
        github: "",
        url: ""
    },
    {
        name: "Fantasy Manager",
        description: `Fantasy football management game that allows managers to create 
        teams based on real life football events and gain points based on how the players
        they picked perform in real life. Built with Reactjs and uses the Fantasy Premier
        League API extensively.`,
        image: Fpl,
        github: "",
        url: ""
    },
    {
        name: "Text Encryptor",
        description: `Web app that allows to encrypt and decrypt text using different
        encryption methods. Built with HTML, CSS and good old Vanilla Javascript.`,
        image: Cipher,
        github: "",
        url: ""
    },

]

const Tech = () => {
    const ProjectsComponets = Projects.map(project => {
        return <Project project={project} key={project.description} />
    })


    return <div className={styles.Tech}>
        <h2 className={styles.Heading}>
            Portfolio
        </h2>

        <div className={styles.Contents}>
            {ProjectsComponets}
            {/* <Project image={RonaImg} title="Corona tracker" />
            <Project image={Fpl} title="Fantasy manager" />
            <Project image={Cipher} title="Text encryptor" /> */}
        </div>
    </div>
}

export default Tech;