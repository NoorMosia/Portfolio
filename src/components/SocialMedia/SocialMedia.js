import React from "react";
import * as styles from "./SocialMedia.module.css";

import Fade from "react-reveal/Fade";

const SocialMedia = props => {
    return <Fade bottom>
        <a href={props.sm.link} rel="noreferrer" target="_blank" className={styles.Contents}>
            <div className={styles.Logo}>
                <img src={props.sm.imageUrl} alt="gmail logo" />
            </div>
            <div className={styles.Text}>
                <div className={styles.Address}>{props.sm.name}</div>
                <div className={styles.Message}>
                    {props.sm.description}
                </div>
            </div>
        </a>
    </Fade>
}

export default SocialMedia;