import React, { useState, useEffect } from "react";
import { ProfileQuickView } from "../ProfileQuickView/ProfileQuickView";
import "./Home.css";
import { bgUri, pfpUri } from "./mockData";
import Icons from "../../Icons/icons";

interface User {
  name: string;
  userName: string;
  position: string;
  department: string;
  badge: string;
  endorsements: number | null;
  skills: string[];
  bio: string;
  pfp: string;
  bgPic: string;
}

const Home: React.FC = () => {
  const [showMyProfile, setShowMyProfile] = useState<boolean>(true);
  const [diffUser, setDiffUser] = useState<User>({
    name: "",
    userName: "",
    position: "",
    department: "",
    badge: "",
    endorsements: null,
    skills: [],
    bio: "",
    pfp: "",
    bgPic: "",
  });


  const handleMyProfile = () => {
    setDiffUser({
      name: "",
      userName: "",
      position: "",
      department: "",
      badge: "",
      endorsements: null,
      skills: [],
      bio: "",
      pfp: "",
      bgPic: "",
    });
    setShowMyProfile(true);
  };
  return (
    <div className="homeContainer">
      <div className="feed"> test</div>

      <div className="quickView">
        {showMyProfile ? (
          <ProfileQuickView
            name="Chris Hemsworth"
            position="HR Specialist"
            department={'hr'}
            userName="@ChrisH_72"
            endorsements={15}
            bio="A budding HR specialist looking for a small to medium sized company!"
            skills={["test"]}
            badge="test"
            pfp={pfpUri}
            bgPic={bgUri}
          />
        ) : (
          <>
            <p onClick={handleMyProfile}>My profile</p>
            <ProfileQuickView
              name={diffUser.name}
              position={diffUser.position}
              userName={diffUser.userName}
              department={diffUser.department}
              endorsements={diffUser.endorsements}
              bio={diffUser.bio}
              skills={diffUser.skills}
              badge={diffUser.badge}
              pfp={diffUser.pfp}
              bgPic={diffUser.bgPic}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
