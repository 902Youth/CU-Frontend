import React from "react";

import NavBar from "./components/NavBar/NavBar";

import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="container-main">
      <NavBar />
      <div className="container-page">
        <h1>Creative Unison</h1>
      </div>
    </div>
  );
};

export default App;
