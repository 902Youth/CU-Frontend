import "./Email.css";

const Email: React.FC = ({id, placeholder, label}) => {
    return(
        <div className="container-input-email">
            <label htmlFor={id}>{label}</label>
            <input id={id} type="email" placeholder={placeholder}/>
        </div>
    );
};

export default Email;