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
        <title>Mosia</title>
        <meta name="description" content="Mosia's Portfolio Website" />

        <meta itemprop="name" content="Mosia" />
        <meta itemprop="description" content="Mosia's Portfolio Website" />
        <meta itemprop="image"
          content="https://images.unsplash.com/photo-1422728280635-45167d8b7197?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2748&q=80" />

        <meta property="og:url" content="https://footyza.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mosia" />
        <meta property="og:description" content="Mosia's Portfolio Website" />
        <meta property="og:image"
          content="https://images.unsplash.com/photo-1422728280635-45167d8b7197?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2748&q=80" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mosia" />
        <meta name="twitter:description" content="Mosia's Portfolio Website" />
        <meta name="twitter:image"
          content="https://cdn.sanity.io/images/3rw4tk2q/production/58c7afd8e55802c8b34d7ba0878908c29c5608cd-1350x759.jpg?rect=0,0,1349,759&w=1200&h=675&fit=crop&auto=format" />

        <link rel="canonical" href="https://noormosia.github.io/Portfolio/" />
      </Helmet>
      <Header />
      <Tech />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
