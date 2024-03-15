import React from "react";

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
      <p>Connect with me:</p>
      <a
        href="https://twitter.com/yourTwitterHandle"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: "10px" }}
      >
        Twitter
      </a>
      <a
        href="https://github.com/yourGitHubUsername"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </footer>
  );
};

export default Footer;
