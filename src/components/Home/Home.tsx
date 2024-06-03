import React from "react";
import { ProfileQuickView } from "../ProfileQuickView/ProfileQuickView";
import "./Home.css";
import { bgUri, pfpUri } from "./mockData";
import EndorsementFeed from "../Endorsement/EndorsementFeed";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="endorsement-feed-wrapper">
        <EndorsementFeed />
      </div>

      <div className="quick-view-wrapper">
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
