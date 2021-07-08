import React from "react";
import * as styles from "./Project.module.css"

import Fade from "react-reveal/Fade";

const Project = (Props) => {
    return <Fade >
        <div className={styles.Project}>
            <div className={styles.Left}>
                <img src={Props.project.image} alt="corona app" />
            </div>
            <div className={styles.Right}>
                <div className={styles.AppName}>{Props.project.name}</div>

                <div className={styles.Explain}>
                    {Props.project.description}
                </div>

                <div className={styles.Links}>
                    <a href="/" className={styles.Black}>
                        code
                    </a>
                    <a href="/" className={styles.Blue}>
                        website
                    </a>
                </div>
            </div>
        </div>
    </Fade>
}

export default Project;