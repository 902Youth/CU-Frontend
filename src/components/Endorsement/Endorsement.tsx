import { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/Store";
import ProfileQuickView from "../ProfileQuickView/ProfileQuickView";
import EndorsementForm from "./EndorsementForm";
import User from "../ProfileQuickView/User";

import "./Endorsement.css";

const EndorsementPage: React.FC = () => {
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

  const user = useSelector((state: AppState) => state.user.userAccountDetails);

  return (
    <div className="endorsement-container">
      <div className="endorsement-wrapper">
        <div className="endorsement-title">Create an endorsement</div>
        <EndorsementForm />
      </div>

      <div className="quick-view-wrapper">
        {showMyProfile ? (
          <ProfileQuickView
            name={user.fullName}
            position={user.position}
            department={user.department}
            userName={user.userName}
            endorsements={15}
            bio={user.bio}
            skills={user.skills}
            badge={user.badge}
            pfp={user.pfp}
            bgPic={user.bgPic}
            edit={false}
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
              myProfile={showMyProfile}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default EndorsementPage;
