import React, { useState } from "react";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import { DotsThree, HeartStraight, Chat } from "@phosphor-icons/react";
import "./Experience.css";

const Experience = () => {
  const [experiences, setExperiences] = useState([
    { name: "University of Texas", timeframe: "Aug. 2020 - May 2024", description: "Pursuing a Bachelors of Human Resources and Management", skills: [] },
    { name: "902 Youth", timeframe: "May 2024 - Aug. 2024", description: "Internship with 902 Youth's HR department, working as an HR specialist", skills: ["Interviewing", "Onboarding", "2+ others..."] },
    { name: "Floyd & Floyd inc.", timeframe: "Sep. 2024 - Present", description: "Working as an HR Speicalist. Responsible for onboarding and offboardng, orientation, and benefit management.", skills: ["Interviewing", "Onboarding", "6+ others..."] }
  ]);

  return (
    <div className="experience-feed">
      {experiences.map((experience, index) => (
        <div className="experience">
          <div className="experience-logo-and-line">
            <div className="experience-logo"></div>
            <div className="experience-line"></div>
          </div>
          <div className="experience-details">
            <p className="experience-name">{experience.name}</p>
            <p className="experience-timeframe">{experience.timeframe}</p>
            <p className="experience-description">{experience.description}</p>
            {experience.skills.length > 0 && (
            <div>
              <p className="experience-skills-title">Skills</p>
              <p className="experience-skills">{experience.skills.join(", ")}</p>
            </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;