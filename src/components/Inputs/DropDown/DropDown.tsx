import "./DropDown.css";

const DropDown: React.FC = ({ options = [], placeholder = "Select...", id, label }) => {
  return (
    <div className="container-input-drop-down">
      <label htmlFor={id}>{label}</label>
      <select id={id}>
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
