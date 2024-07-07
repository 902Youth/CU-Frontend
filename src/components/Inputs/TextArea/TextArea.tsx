import "./TextArea.css";

const TextArea: React.FC = ({ id, label, placeholder = "", onChange }) => {
  return (
    <div id={`container-${id}`} className="container-input-text-area">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
