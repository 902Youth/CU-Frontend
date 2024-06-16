import "./PrimaryButton.css";

const PrimaryButton: React.FC = ({text = "Button"}) => {
    return (
        <button className="primary-button">{text}</button>
    )
}

export default PrimaryButton;