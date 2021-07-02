import React from "react";
import * as styles from "./Socials.module.css";

import SM from "../../components/SocialMedia/SocialMedia";

import Gmail from "./gmail.png";
import Github from "./github.png";
import Twitter from "./twitter.png";

const Socials = () => {
    return <div className={styles.Socials}>
        <h2 className={styles.Heading}>
            Socials
        </h2>

        <SM logo={Gmail} title="noormosia@gmail.com" />
        <SM logo={Github} title="noormosia" />
        <SM logo={Twitter} title="@mosianoor" />
        <SM logo={Twitter} title="@mosia_fpl" />


    </div>
}

export default Socials;