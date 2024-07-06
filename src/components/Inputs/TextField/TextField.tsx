import "./TextField.css";

const TextField: React.FC = ({
  id,
  placeholder,
  label,
  labelPosition = "top",
  onChange,
}) => {
  const labelPositionClass = `label-${labelPosition}`;

  return (
    <div className={`container-text-field ${labelPositionClass}`}>
      <div className="text-field-label">
        <label htmlFor={id}>{label}</label>
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
