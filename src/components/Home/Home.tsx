import React from "react";
import { ProfileQuickView } from "../ProfileQuickView/ProfileQuickView";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <div className="feed"> test</div>

      <div className="quickView">
        <ProfileQuickView />
      </div>
    </div>
  );
};

export default Home;
