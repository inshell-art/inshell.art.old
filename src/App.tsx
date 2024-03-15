import React from "react";
import Prime from "./Components/Prime";
import Footer from "./Components/Footer"; // Import the Footer component here

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Prime Number Generator</h1>
      <Prime />
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
};

export default App;
