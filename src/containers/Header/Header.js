import React from "react";
import * as styles from "./Header.module.css";


import Fade from "react-reveal/Fade";

const Header = () => {
    return <div className={styles.Header}>
        <div className={styles.textContainer}>
            <Fade top>
                <h1 className={styles.Name}>
                    Mosia Noor-Tshepo
                </h1>
            </Fade>
            <div className={styles.SecondaryText}>
                <Fade bottom>
                    Coder 👨🏿‍💻 &middot; Fantasy Manager ⚽ &middot; Casual Gamer 🎮
                </Fade>
            </div>
        </div>
    </div>
}

export default Header;