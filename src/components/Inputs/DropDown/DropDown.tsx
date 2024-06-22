import "./DropDown.css";

const DropDown: React.FC = ({ options = [], placeholder, id, label }) => {
  return (
    <div className="container-input-drop-down">
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id}>
        {/* This is a disabled option for the placeholder  */}
        {placeholder && (
          <option value="" disabled selected>
            {placeholder}
          </option>
        )}
        {/* These are the actual options that are selectable in the dropdown. */}
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
