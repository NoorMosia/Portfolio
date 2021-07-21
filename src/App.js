import Header from "./containers/Header/Header";
import Tech from "./containers/Tech/Tech";
import Socials from "./containers/Socials/Socials";
import Footer from "./containers/Footer/Footer";
import { Helmet } from 'react-helmet';

import * as styles from "./App.module.css";

// NGROK

function App() {
  return (
    <div className={styles.App}>
      ‍
      <Helmet>
        <title>Footy ZA</title>
        <meta name="description" content="Football blog by Mosia Noor-Tshepo" />

        <meta itemprop="name" content="Footy ZA" />
        <meta itemprop="description" content="Football blog by Mosia Noor-Tshepo" />
        <meta itemprop="image"
          content="https://images.unsplash.com/photo-1422728280635-45167d8b7197?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2748&q=80" />

        <meta property="og:url" content="https://footyza.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Footy ZA" />
        <meta property="og:description" content="Football blog by Mosia Noor-Tshepo" />
        <meta property="og:image"
          content="https://images.unsplash.com/photo-1422728280635-45167d8b7197?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2748&q=80" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Footy ZA" />
        <meta name="twitter:description" content="Football blog by Mosia Noor-Tshepo" />
        <meta name="twitter:image"
          content="https://images.unsplash.com/photo-1422728280635-45167d8b7197?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2748&q=80" />


      </Helmet>





      <Header />
      <Tech />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
