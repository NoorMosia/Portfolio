import Header from "./containers/Header/Header";
import Tech from "./containers/Tech/Tech";
import Socials from "./containers/Socials/Socials";
import Footer from "./containers/Footer/Footer";

import * as styles from "./App.module.css";

// NGROK

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Tech />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
