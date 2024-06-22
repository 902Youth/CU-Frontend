import React, { useEffect, useState } from "react";
import Skills from "../Skills/Skills";
import { NotePencil } from "@phosphor-icons/react";
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
  edit?: boolean;
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
  edit,
  myProfile,
}) => {
  const tempSkills = ["JavaScript", "TypeScript", "HTML", "CSS", "AWS"];
  const navigate = useNavigate();
  const [badgeKey, setBadgeKey] = useState<IconTypes | null>(null);

  useEffect(() => {
    const iconKey = Object.keys(Icons).find(
      (keyName) => keyName.toLowerCase() === department.toLowerCase()
    );
    setBadgeKey(iconKey as IconTypes);
  }, [department]);

  const handleNav = (whereTo: string) => {
    navigate(`/${whereTo}`);
  };

  return (
    <div className="container-quickview">
      <div className="container-profile">
        {!edit ? (
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
                <img
                  src={bgPic}
                  alt="user background picture"
                  className="edit-user-bg-pic"
                />
                {pfp.trim() !== "" ? (
                  <div className="user-pfp-edit">
                    <img src={pfp} alt="user profile pic" />
                  </div>
                ) : (
                  <div className="default-pfp"></div>
                )}
              </>
           
          </div>
        ) : (
          <div className="edit-from-default">
            {pfp.trim() !== "" ? (
              <div className="user-pfp-edit">
                <img src={pfp} alt="user profile pic" />
              </div>
            ) : (
              <div className="default-pfp"></div>
            )}
          </div>
        )}
            </>
        )}


        {myProfile && !edit && (
          <div className="edit-profile">
            <NotePencil
              size={25}
              onClick={() => handleNav("account")}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}

        <div className={ !edit ? "profile-info" : "profile-info-edit"}>
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
        <Skills skills={tempSkills} />
      </div>

      <div className="divider"></div>

      <div className="container-bio">
        <h3 style={{ fontSize: "15px" }}>{bio}</h3>
      </div>
    </div>
  );
};
