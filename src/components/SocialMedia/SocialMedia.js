import React from "react";
import * as styles from "./SocialMedia.module.css";

import Fade from "react-reveal/Fade";

const SocialMedia = props => {
    return <Fade top>
        <div className={styles.Contents}>
            <div className={styles.Logo}>
                <img src={props.logo} alt="gmail logo" />
            </div>
            <div className={styles.Text}>
                <div className={styles.Address}>{props.title}</div>
                <div className={styles.Message}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates delectus laboriosam placeat voluptatibus cupiditate
                    hic commodi! Maxime dolores temporibus tempore cupiditate
                    mollitia soluta provident minima, aperiam accusamus. Et, maxime
                    nobis!
                </div>
            </div>
            <div className={styles.Logo}>
                {/* <img src={Gmail} alt="gmail logo" /> */}
            </div>
        </div>
    </Fade>
}

export default SocialMedia;