import * as React from "react";
import TextField from "../Inputs/TextField/TextField";
import DropDown from "../Inputs/DropDown/DropDown";
import TextArea from "../Inputs/TextArea/TextArea";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

import "./EndorsementForm.css";

const EndorsementForm: React.FC = () => {
  const relations: string[] = ["Colleague", "Manager", "Mentor"];
  const skills: string[] = ["Programming", "Databases", "UI"];

  return (
    <div className="container-endorsement-form">
      <TextField
        placeholder="Find a user"
        label="Who are you endorsing:"
        labelPosition="left"
      />
      <DropDown
        options={relations}
        placeholder="Select..."
        label="Relation:"
        labelPosition="left"
      />
      <DropDown
        options={relations}
        placeholder="User's skill"
        label="Support a specific skill:"
        labelPosition="left"
      />
      <TextArea label="Compose your endorsement" />
      <div className="endorsement-form-controls">
        <PrimaryButton text="Send" color="#346842" />
        <PrimaryButton text="Cancel" color="#ff0000" />
      </div>
    </div>
  );
};

export default EndorsementForm;
