import "./TextArea.css";

const TextArea: React.FC = ({ id, label, placeholder = "" }) => {
  return (
    <div id={`container-${id}`} className="container-input-text-area">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} placeholder={placeholder}></textarea>
    </div>
  );
};

export default TextArea;
