import React from "react";
import * as styles from "./Socials.module.css";

import SM from "../../components/SocialMedia/SocialMedia";

import Gmail from "./gmail.png";
import Github from "./github.png";
import Twitter from "./twitter.png";

const SocialsDetails = [
    {
        name: "noortshepo@gmail.com",
        description: `This is strictly for important stuff. You know how emails work, right?
        if you don't, send me one and I'll explain.`,
        imageUrl: Gmail,
        link: ""
    },
    {
        name: "noormosia",
        description: `This is where I keep all my magic spells. They are all encrypted 
        in different languages. Some in C++, others in Java and most in Javascript. 
        It would be wise for you to tread carefully in there.`,
        imageUrl: Github,
        link: "https://github.com/NoorMosia"
    },
    {
        name: "mosia_fpl",
        description: `This is my twitter account. I am a football fanatic and this is
        the place where I post most of my footballing opinions.`,
        imageUrl: Twitter,
        link: "https://twitter.com/mosia_fpl"
    }
]

const Socials = () => {
    const SocialComponents = SocialsDetails.map(social => {
        return <SM sm={social} key={social.description} />
    })
    return <div className={styles.Socials}>
        <h2 className={styles.Heading}>
            Socials
        </h2>
        {SocialComponents}
    </div>
}

export default Socials;