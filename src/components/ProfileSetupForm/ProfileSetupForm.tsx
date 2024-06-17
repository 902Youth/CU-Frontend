import { useSelector } from "react-redux";
import { AppState } from "../../redux/Store";
import SaveButton from "../Buttons/SaveButton/SaveButton";
import TextField from "../Inputs/TextField/TextField";
import DropDown from "../Inputs/DropDown/DropDown";
import Email from "../Inputs/Email/Email";
import Chip from "../Chip/Chip";
import TextArea from "../Inputs/TextArea/TextArea";

import "./ProfileSetupForm.css";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

// Array for all drop down options
const jobTitleOptions = ["programmer", "manager"];
const locationOptions = ["TX", "CA", "WA", "LA", "MD"];

const ProfileSetupForm: React.FC = () => {
  const selectedSkill: boolean = useSelector(
    (state: AppState) => state.skills.selectedSkill
  );

  return (
    <form className="container-profile-setup-form">
      <section className="container-profile-setup-header">
        <div className="profile-setup-title">Let's set up your profile!</div>
        <SaveButton />
      </section>
      <hr className="line-divider-header" />

      <section className="profile-setup-form-container-info">
        <TextField
          id="profile-setup-first-name"
          placeholder="First name"
          label="First name"
        />
        <TextField
          id="profile-setup-last-name"
          placeholder="Last name"
          label="Last name"
        />
        <TextField
          id="profile-setup-username"
          placeholder="Username"
          label="Username"
        />
        <PrimaryButton text="Reset Password" />
        <div className="title-more-about-you">More about you</div>
        <DropDown
          id="profile-setup-job-title"
          options={jobTitleOptions}
          label="Job Title"
        />
        <DropDown
          id="profile-setup-location"
          options={locationOptions}
          label="Location"
        />
        <Email id="profile-setup-email" placeholder="Email" label="Email" />
        <PrimaryButton text="Change Email" />
      </section>

      <section className="profile-setup-form-container-skills">
        <div className="title-expand-on-your-skills">Expand on your skills</div>
        <div className="container-skill-entry">
          <Chip
            id="profile-setup-skill-selected"
            text={selectedSkill || "Select a skill"}
          />
          <DropDown id="profile-setup-skill-years" placeholder="Years" />
          <DropDown
            id="profile-setup-skill-learn"
            placeholder="How did you learn?"
          />
          <DropDown id="profile-setup-skill-level" placeholder="Level" />
          <TextArea id="profile-setup-skill-description" label="Description" />
        </div>
      </section>

      <section className="profile-setup-form-container-portfolio-website">
        <div className="title-portfolio-website">Portfolio/Website</div>
        <div className="profile-setup-portofolio-website"></div>
      </section>

      <section className="profile-setup-form-container-delete-account">
        <div className="title-delete-account">Danger Zone</div>
        <hr className="line-divider-delete-account" />
        <PrimaryButton text="Delete Account" color="red" />
      </section>
    </form>
  );
};

export default ProfileSetupForm;
