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
        name: "mosianoor",
        description: `If you were a spy and needed to know as much about me as possible
        about me,
        this is where I'd advise you to go. I don't hold back so everything that is 
        important to me you will find here.`,
        imageUrl: Twitter,
        link: "https://twitter.com/MosiaNoor"
    },
    {
        name: "mosia_fpl",
        description: `Yes, another twitter account. Netflix has about 99 of them so
        please don't judge me for having 2. This is where you'll find my sports posts,
        mostly Fantasy Premier League related.`,
        imageUrl: Twitter,
        link: "https://mobile.twitter.com/mosia_fpl"
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