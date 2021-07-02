import React from "react";
import * as styles from "./Tech.module.css";

import Slide from "react-reveal/Slide";

import RonaImg from "./rona.png";
import Cipher from "./cipher.png";
import Fpl from "./fpl.png";
import Project from "../../components/Project/Project";

const Tech = () => {
    return <div className={styles.Tech}>
        <h2 className={styles.Heading}>
            Technologies
        </h2>

        <div className={styles.Contents}>
            <Slide left>
                <Project image={RonaImg} title="Coroner tracker" />
            </Slide>
            <Slide left>
                <Project image={Fpl} title="Fantasy manager" />
            </Slide>
            <Slide left>
                <Project image={Cipher} title="Text encryptor" />
            </Slide>
        </div>
    </div>
}

export default Tech;