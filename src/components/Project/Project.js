import React from "react";
import * as styles from "./Project.module.css"

import Fade from "react-reveal/Fade";

const Project = (Props) => {
    return <Fade >
        <div className={styles.Project}>
            <div className={styles.Left}>
                <img src={Props.image} alt="corona app" />
            </div>
            <div className={styles.Right}>
                <div className={styles.AppName}>{Props.title}</div>

                <div className={styles.Explain}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates delectus laboriosam placeat voluptatibus cupiditate
                    hic commodi! Maxime dolores temporibus tempore cupiditate
                    mollitia soluta provident minima, aperiam accusamus. Et, maxime
                    nobis!
                </div>

                <div className={styles.Links}>
                    <div className="btn">
                        code
                    </div>
                    <div className="btn">
                        website
                    </div>
                </div>
            </div>
        </div>
    </Fade>
}

export default Project;