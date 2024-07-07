import "./TextArea.css";

const TextArea: React.FC = ({ id, label, placeholder = "", onChange }) => {
  return (
    <div id={`container-${id}`} className="container-text-area">
      <div className="text-area-label">
        <label htmlFor={id}>{label}</label>
      </div>
      <textarea
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        className="text-area"
      ></textarea>
    </div>
  );
};

export default TextArea;
