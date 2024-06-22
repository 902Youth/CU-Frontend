import "./PrimaryButton.css";

import "../../../styles/variables.css";

const PrimaryButton: React.FC = ({
  text = "Button",
  color = "var(--primary-blue)",
}) => {
  return (
    <button className="primary-button" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default PrimaryButton;
