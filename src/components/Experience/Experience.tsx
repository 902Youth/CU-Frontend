import React, { useState } from "react";
import "./Experience.css";
import { Acorn, Plant, TreeEvergreen } from "@phosphor-icons/react";

const Experience = () => {
  //I need to make the skills blue and expandable. Also, I need to add a filter to only show the first three skills, the check the length of all of the skills, minus 3, and generate the +more. And again, onClick I'm going to expand the text to show all of the associated skills.

  //Also need to add default text for if at /user/:userId the user doesn't have any experience listed
  const [experiences, setExperiences] = useState([
    {
      name: "University of Texas",
      timeframe: "Aug. 2020 - May 2024",
      description: "Pursuing a Bachelors of Human Resources and Management",
      skills: [],
      type: "edu",
    },
    {
      name: "902 Youth",
      timeframe: "May 2024 - Aug. 2024",
      description:
        "Internship with 902 Youth's HR department, working as an HR specialist",
      skills: ["Interviewing", "Onboarding", "2+ others..."],
      type: "internship",
    },
    {
      name: "Floyd & Floyd inc.",
      timeframe: "Sep. 2024 - Present",
      description:
        "Working as an HR Speicalist. Responsible for onboarding and offboardng, orientation, and benefit management.",
      skills: ["Interviewing", "Onboarding", "6+ others..."],
      type: "job",
    },
  ]);

  return (
    <div className="experience-feed">
      {experiences.map((experience, index) => (
        <div className="experience">
          <div className="experience-logo-and-line">
            <div className="experience-logo">
              {experience.type === "edu" ? (
                <Acorn size={32} color="#648c70" />
              ) : experience.type === "internship" ? (
                <Plant size={32} color="#648c70" />
              ) : (
                <TreeEvergreen size={32} color="#648c70" />
              )}
            </div>
            <div className="experience-line"></div>
          </div>
          <div className="experience-details">
            <p className="experience-name">{experience.name}</p>
            <p className="experience-timeframe">{experience.timeframe}</p>
            <p className="experience-description">{experience.description}</p>
            {experience.skills.length > 0 && (
              <div>
                <p className="experience-skills-title">Skills</p>
                <p className="experience-skills">
                  {experience.skills.join(", ")}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
