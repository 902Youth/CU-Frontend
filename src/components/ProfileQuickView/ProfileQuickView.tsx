import React, { useEffect, useState } from "react";
import Skills from "../Skills/Skills";
import { CameraPlus, NotePencil, Plus } from "@phosphor-icons/react";
import { useNavigate } from "react-router";
import "./ProfileQuickView.css";
import Icons, { IconTypes } from "../../Icons/icons";

interface ProfileProps {
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
  myProfile: boolean;
}

export const ProfileQuickView: React.FC<ProfileProps> = ({
  name,
  userName,
  position,
  endorsements,
  bio,
  department,
  badge,
  skills,
  pfp,
  bgPic,
  myProfile,
}) => {
  //In this component, I need to check if userId, which needs to be added to props still, is equal to the current logged in user. To do so, I will use a useSelect or useStoreSelect to get the current logged in user in order to compare. If they don't match, I need to swap out the NotePencil icon for a View Profile button. On click, I will add a navigation to a route called /user/${userId}

  //I also need to add the save button to save any changes made inside of the ProfileQuickView
  const currRoute = window.location.pathname;
  const navigate = useNavigate();
  const [badgeKey, setBadgeKey] = useState<IconTypes | null>(null);
  console.log(currRoute);
  const [addSkill, setAddSkill] = useState<string>("");
  const [tempSkills, setTempSkills] = useState<string[]>([
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "AWS",
  ]);
  const [currBio, setCurrBio] = useState<string>(bio);

  useEffect(() => {
    const iconKey = Object.keys(Icons).find(
      (keyName) => keyName.toLowerCase() === department.toLowerCase()
    );
    setBadgeKey(iconKey as IconTypes);
  }, [department]);

  const handleNav = (whereTo: string) => {
    navigate(`/${whereTo}`);
  };

  const handleAddSkill = (addSkill: string) => {
    if (addSkill.trim() !== "") {
      setTempSkills([...tempSkills, addSkill]);
      setAddSkill("");
    }
  };

  console.log(tempSkills);

  return (
    <div className="container-quickview">
      <div className="container-profile">
        {currRoute !== "/account" ? (
          <>
            {bgPic.trim() !== "" ? (
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <>
                  <img
                    src={bgPic}
                    alt="user background picture"
                    className="user-bg-pic"
                  />
                  {pfp.trim() !== "" ? (
                    <div className="user-pfp">
                      <img src={pfp} alt="user profile pic" />
                    </div>
                  ) : (
                    <div className="default-pfp"></div>
                  )}
                </>
              </div>
            ) : (
              <div className="default-background-pic">
                {pfp.trim() !== "" ? (
                  <div className="user-pfp">
                    <img src={pfp} alt="user profile pic" />
                  </div>
                ) : (
                  <div className="default-pfp"></div>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            {bgPic.trim() !== "" ? (
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <>
                  <div className="user-bg-pic">
                    <img
                      src={bgPic}
                      alt="user background picture"
                    />
                    <div className="overlay-bg">
                    <NotePencil size={32} color="#fff" />
                    </div>
                  </div>

                  {pfp.trim() !== "" ? (
                    <div className="user-pfp">
                      <img src={pfp} alt="user profile pic" />
                      <div className="overlay">
                        <CameraPlus size={32} color="#fff" />
                      </div>
                    </div>
                  ) : (
                    <div className="default-pfp"></div>
                  )}
                </>
              </div>
            ) : (
              <div className="edit-from-default">
                {pfp.trim() !== "" ? (
                  <div className="user-pfp">
                    <img src={pfp} alt="user profile pic" />
                    <div className="overlay"></div>
                  </div>
                ) : (
                  <div className="default-pfp">
                    <div className="overlay-bg"></div>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {myProfile && currRoute !== "/account" && (
          <div className="edit-profile">
            <NotePencil
              size={25}
              onClick={() => handleNav("account")}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}

        <div
          className={
            currRoute !== "/account" ? "profile-info" : "profile-info-edit"
          }
        >
          <p>{name}</p>
          <p>{userName}</p>
          <p>{position}</p>
        </div>
        <div className="profile-endorsements">
          {badgeKey && (
            <img
              src={Icons[badgeKey]}
              alt="Badge"
              style={{ height: "55px", width: "auto", marginBottom: "2%" }}
            />
          )}

          <p onClick={() => handleNav("account/endorsements")}>
            {endorsements} Endorsements
          </p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="container-skills">
        {currRoute === "/account" && (
          <div className="addSkill">
            <Plus size={22} onClick={() => handleAddSkill(addSkill)} />
            <input
              className="addSkillArea"
              placeholder="Add a skill..."
              value={addSkill}
              onChange={(e) => setAddSkill(e.target.value)}
            />
          </div>
        )}
        <Skills skills={tempSkills} />
      </div>

      <div className="divider"></div>

      <div className="container-bio">
        {currRoute !== "/account" ? (
          <h3 style={{ fontSize: "15px" }}>{bio}</h3>
        ) : (
          <textarea
            value={currBio}
            onChange={(e) => setCurrBio(e.target.value)}
            className="bioArea"
          />
        )}
      </div>
    </div>
  );
};
