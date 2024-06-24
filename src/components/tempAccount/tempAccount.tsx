import React from "react";
import { ProfileQuickView } from "../ProfileQuickView/ProfileQuickView";
import { bgUri, pfpUri } from "../Home/mockData";
import './tempAccount.css'

const TempAccount: React.FC = () => {
  return (
    <div className="accountContainer ">

      <div className="account-wrapper">
        <p>placeholder</p>
      </div>

      <div className="quick-view-wrapper">
        <ProfileQuickView
        name="Chris Hemsworth"
        position="HR Specialist"
        department={"hr"}
        userName="@ChrisH_72"
        endorsements={15}
        bio="A budding HR specialist looking for a small to medium sized company!"
        skills={["test"]}
        badge="test"
        pfp={pfpUri}
        bgPic={bgUri}
        edit={true}
        myProfile={true}
      />
      </div>
      
    </div>
  );
};

export default TempAccount;
