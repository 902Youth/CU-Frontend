import React from "react";

import NavBar from "./components/NavBar/NavBar";

import "./Styles/App.css";
import ProfileQuickView from "./components/ProfileQuickView/ProfileQuickView";

const App: React.FC = () => {
  return (
    <>
      {/* <div className="container-main">
        <NavBar />

        <div className="container-page">
          <h1>Creative Unison</h1>
        </div>
      </div> */}

      <ProfileQuickView />
    </>
  );
};

export default App;
