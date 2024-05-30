import React from "react";
import Skills from "../Skills/Skills";
import { NotePencil } from "@phosphor-icons/react";
import "./ProfileQuickView.css";

interface ProfileProps {
  name: string;
  userName: string;
  position: string;
  badge: string;
  endorsements: number;
  skills: string[];
  bio: string;
  pfp: string;
  bgPic: string;
}

export const ProfileQuickView: React.FC<ProfileProps> = ({
  name,
  userName,
  position,
  endorsements,
  bio,
  badge,
  skills,
  pfp,
  bgPic,
}) => {
  const tempSkills = ["JavaScript", "TypeScript", "HTML", "CSS", "AWS"];
  return (
    <div className="container-quickview">
      <div className="container-profile">
        {bgPic.trim() !== "" ? (
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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

        <div className="edit-profile">
          <NotePencil size={25} />
        </div>

        <div className="profile-info">
          <p>{name}</p>
          <p>{userName}</p>
          <p>{position}</p>
        </div>
        <div className="profile-endorsements">
          <p>Badge</p>
          <p>{endorsements} Endorsements</p>
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
