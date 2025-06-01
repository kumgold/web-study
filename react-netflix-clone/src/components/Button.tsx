import "./Button.css";

const Button = ({ text }: { text: string }) => {
    return <button className="default_button">{text}</button>;
};

export default Button;
