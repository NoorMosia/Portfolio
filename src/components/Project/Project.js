import React from "react";
import * as styles from "./Project.module.css"

// import ghLogo from "./github.png";

const Project = (Props) => {
    return <div className={styles.Project}>
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
                {/* <div className={styles.Link}>
                    <img src={ghLogo} alt="github" />
                    Code
                </div>
                <div className={styles.Link}>
                    <img src={ghLogo} alt="github" />
                    Website: Website
                </div> */}
            </div>
        </div>
    </div>
}

export default Project;