import Chip from "../Chip/Chip";
import TextArea from "../Inputs/TextArea/TextArea";
import DropDown from "../Inputs/DropDown/DropDown";

import "./SkillSelected.css";

// Function to create list of numbers to represent years of experience.
const makeYearsOptions = (num: number) => {
  const yearsOptions: number[] = [];
  for (let i = 1; i <= num; i++) {
    yearsOptions.push(i);
  }

  return yearsOptions;
};

const levelOptions = ["Beginner", "Intermediate", "Advanced", "Master"];
const howDidYouLearnOptions = ["Self-taught", "On the job", "University", "Technical school"];

export default function SkillSelected({ skill }) {

  const yearsOptions: number[] = makeYearsOptions(50);

  return (
    <>
      <div className="container-skill-entry skill-selected">
        <Chip id="profile-setup-skill-selected" text={skill} />
        <DropDown
          id="profile-setup-skill-years"
          placeholder="Years"
          options={yearsOptions}
        />
        <DropDown
          id="profile-setup-skill-learn"
          placeholder="How did you learn?"
          options={howDidYouLearnOptions}
        />
        <DropDown id="profile-setup-skill-level" options={levelOptions}/>
        <TextArea id="profile-setup-skill-description" label="Description" />
      </div>
    </>
  );
}
