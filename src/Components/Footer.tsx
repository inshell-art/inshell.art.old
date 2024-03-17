import React from "react";
import styles from "./Footer.module.css"; // Import the CSS module

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        textAlign: "right",
      }}
    >
      <a
        className={styles.link} // Apply styles from CSS module
        href="https://github.com/inshell-art"
        target="_blank"
        rel="noopener noreferrer"
      >
        GH
      </a>
      <a
        className={styles.link} // Apply styles from CSS module
        href="https://twitter.com/inshell_art"
        target="_blank"
        rel="noopener noreferrer"
      >
        X
      </a>
    </footer>
  );
};

export default Footer;
