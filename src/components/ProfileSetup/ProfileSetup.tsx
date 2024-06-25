import { useState } from "react";
import { ProfileQuickView } from "../ProfileQuickView/ProfileQuickView";
import ProfileSetupForm from "../ProfileSetupForm/ProfileSetupForm";
import User from "../ProfileQuickView/User";
import { bgUri, pfpUri } from "../Home/mockData";
import SaveButton from "../Buttons/SaveButton/SaveButton";

import "./ProfileSetup.css";

const ProfileSetup: React.FC = () => {
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
    <div className="profile-setup-container">
      <div className="profile-setup-wrapper">
        <section className="container-profile-setup-header">
          <div className="profile-setup-title">Let's set up your profile!</div>
          <SaveButton />
        </section>
        <hr className="line-divider-header" />
        <ProfileSetupForm />
      </div>

      <div className="quick-view-wrapper">
        {showMyProfile ? (
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
            myProfile={showMyProfile}
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

export default ProfileSetup;
