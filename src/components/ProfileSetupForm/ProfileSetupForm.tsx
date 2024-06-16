import SaveButton from "../Buttons/SaveButton/SaveButton";
import TextField from "../Inputs/TextField/TextField";
import DropDown from "../Inputs/DropDown/DropDown";
import Email from "../Inputs/Email/Email";
import Chip from "../Chip/Chip";

import "./ProfileSetupForm.css";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

// Array for all drop down options
const jobTitleOptions = ["programmer", "manager"];
const locationOptions = ["TX", "CA", "WA", "LA", "MD"];

const ProfileSetupForm: React.FC = () => {
  return (
    <form className="container-profile-setup-form">
      <section className="container-profile-setup-header">
        <div className="profile-setup-title">Let's set up your profile!</div>
        <SaveButton />
      </section>
      <hr className="line-divider" />

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
          <Chip id="profile-setup-skill-selected" text="Javascript"/>
          <DropDown id="profile-setup-skill-years"/>
          <DropDown id="profile-setup-skill-learn"/>
          <DropDown id="profile-setup-skill-level"/>
          <textarea id="profile-setup-skill-description"></textarea>
        </div>
      </section>

      <section className="container-portfolio-website">
        <div>Portfolio/Website</div>
        <div>grey square</div>
      </section>

      <section className="delete-account">
        <div>Danger Zone</div>
        <hr />
        <button>Delete Account</button>
      </section>
    </form>
  );
};

export default ProfileSetupForm;
