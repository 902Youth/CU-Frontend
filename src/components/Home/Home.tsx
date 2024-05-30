import React from "react";
import { ProfileQuickView } from "../ProfileQuickView/ProfileQuickView";
import "./Home.css";
import { bgUri, pfpUri } from "./mockData";

const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <div className="feed"> test</div>

      <div className="quickView">
        <ProfileQuickView
          name="Chris Hemsworth"
          position="HR Specialist"
          userName="@ChrisH_72"
          endorsements={15}
          bio="A budding HR specialist looking for a small to medium sized company!"
          skills={["test"]}
          badge="test"
          pfp={pfpUri}
          bgPic={bgUri}
        />
      </div>
    </div>
  );
};

export default Home;
