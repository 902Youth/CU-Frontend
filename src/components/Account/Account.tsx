import React, {useState, useEffect} from "react";
import { ProfileQuickView } from "../ProfileQuickView/ProfileQuickView";
import { bgUri, pfpUri } from "../Home/mockData";
import ProfileViewNavTabs from "../ProfileViewNavTabs/ProfileViewNavTabs";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Settings from "../Settings/Settings";
import EndorsementFeed from "../Endorsement/EndorsementFeed";
import './account.css'

const Account: React.FC = () => {
  //I will add a conditional render to this component so that if this page is to view a /user/${userId} and not the current user's profile, it won't show the settings page. Also, I need to make sure it gets all of the endorsements that are associated with the user being viewed. I will add a prop to do so.
  const [currPage, setCurrPage] = useState<string>("endorsements");
  const currRoute = window.location.pathname
  const [userId, setUserId] = useState<string>('')

  useEffect(() => {
    if(currRoute !== '/account') {
      //useSelect for selectedUser.userid
      //Then, set that userId in the useState above
    }
  },[])

  return (
    <div className="accountContainer ">

      <div className="account-wrapper">
      <ProfileViewNavTabs currPage={currPage } setCurrPage={setCurrPage} />
        {currPage === "endorsements" && <EndorsementFeed userId={userId}/>}
        {currPage === "experience" && <Experience />}
        {currPage === "projects" && <Projects />}
        {currPage === "settings" && <Settings />}
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
        myProfile={true}
      />
      </div>
      
    </div>
  );
};

export default Account;
