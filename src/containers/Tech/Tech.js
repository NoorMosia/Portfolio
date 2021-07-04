import React from "react";
import * as styles from "./Tech.module.css";

import RonaImg from "./rona.png";
import Cipher from "./cipher.png";
import Fpl from "./fpl.png";
import Project from "../../components/Project/Project";

const Tech = () => {
    return <div className={styles.Tech}>
        <h2 className={styles.Heading}>
            Portfolio
        </h2>

        <div className={styles.Contents}>
            <Project image={RonaImg} title="Coroner tracker" />
            <Project image={Fpl} title="Fantasy manager" />
            <Project image={Cipher} title="Text encryptor" />
        </div>
    </div>
}

export default Tech;