import Header from "./containers/Header/Header";
import Tech from "./containers/Tech/Tech";
import Socials from "./containers/Socials/Socials";

import * as styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Tech />
      <Socials />
    </div>
  );
}

export default App;
