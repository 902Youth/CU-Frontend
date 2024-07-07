import "./TextField.css";

const TextField: React.FC = ({ id, placeholder, label, onChange }) => {
  return (
    <div className="container-input-text-field">
      <label htmlFor={id}>{label}</label>
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
