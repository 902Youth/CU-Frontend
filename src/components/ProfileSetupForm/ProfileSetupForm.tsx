import { useSelector } from "react-redux";
import { AppState } from "../../redux/Store";
import SaveButton from "../Buttons/SaveButton/SaveButton";
import TextField from "../Inputs/TextField/TextField";
import DropDown from "../Inputs/DropDown/DropDown";
import Email from "../Inputs/Email/Email";
import SkillNotSelected from "./SkillNotSelected";
import SkillSelected from "./SkillSelected";

import "./ProfileSetupForm.css";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

// Array for all drop down options
const jobTitleOptions = ["programmer", "manager"];

const ProfileSetupForm: React.FC = () => {
  const selectedSkill: string | null = useSelector(
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
          placeholder="Select..."
          options={jobTitleOptions}
          label="Job Title"
        />
        <TextField
          id="profile-setup-location"
          placeholder="Location"
          label="Location"
        />
        <Email id="profile-setup-email" placeholder="Email" label="Email" />
        <PrimaryButton text="Change Email" />
      </section>

      <section className="profile-setup-form-container-skills">
        <div className="title-expand-on-your-skills">Expand on your skills</div>
        {selectedSkill ? <SkillSelected skill={selectedSkill} /> : <SkillNotSelected/>}
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
