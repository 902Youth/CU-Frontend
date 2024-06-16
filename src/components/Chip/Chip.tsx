import "./Chip.css";

const Chip: React.FC = ({ id, text }) => {
  return (
    <div className="chip" id={id}>
      {text}
    </div>
  );
};

export default Chip;
