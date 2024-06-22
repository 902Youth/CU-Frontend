import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {

  return (
    <div className="settings-container">
      <div className="settings-row row">
        <div className="first-name-div settings-column">
          <p className="first-name-title title">First Name</p>
          <input className="first-name-input input" type="text" />
        </div>
        <div className="last-name-div settings-column">
          <p className="last-name-title title">Last Name</p>
          <input className="last-name-input input" type="text" />
        </div>
        <div className="username-div settings-column">
          <p className="username-title title">Username</p>
          <input className="username-input input" type="text" />
        </div>
        <div className="reset-password-div settings-column">
          <button className="reset-password-button button">Reset Password</button>
        </div>
      </div>
      <div className="settings-row row">
        <div className="job-title-div settings-column">
          <p className="job-title-title title">Job Title</p>
          <select className="job-title-select select">
            <option value="HR Specialist">HR Specialist</option>
            <option value="HR Manager">HR Manager</option>
            <option value="HR Director">HR Director</option>
            <option value="HR Coordinator">HR Coordinator</option>
          </select>
        </div>
        <div className="location-div settings-column">
          <p className="location-title title">Location</p>
          <select className="location-select select">
            <option value="Austin, TX">Austin, TX</option>
            <option value="Houston, TX">Houston, TX</option>
            <option value="Dallas, TX">Dallas, TX</option>
            <option value="San Antonio, TX">San Antonio, TX</option>
          </select>
        </div>
        <div className="email-div settings-column">
          <p className="email-title title">Email</p>
          <input className="email-input input" type="text" />
        </div>
        <div className="change-email-div settings-column">
          <button className="change-email-button button">Change Email</button>
        </div>
      </div>
      <div className="settings-skills">
        <p className="skills-title">Expand on your skills</p>
        <div className="skills-input-div">
          <p className="skills-input-placeholder">Select a skill from your profile quick view</p>
        </div>
      </div>
      <div className="settings-danger-zone">
        <div className="danger-zone-title">Danger Zone</div>
        <div className="danger-zone-options">
          <button className="delete-account-button button">Delete Account</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;