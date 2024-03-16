import React from "react";
import Prime from "./Components/Prime";
import Footer from "./Components/Footer"; // Import the Footer component here
import styles from "./App.module.css"; // Import the styles

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Prime />
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
};

export default App;
