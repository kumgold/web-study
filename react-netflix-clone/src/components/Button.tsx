import "./Button.css";

const Button = ({ text, fontSize }: { text: string; fontSize: string }) => {
    const buttonStyle: React.CSSProperties = {};

    if (fontSize) {
        buttonStyle.fontSize = fontSize;
    }

    return (
        <button className="default_button" style={buttonStyle}>
            {text}
        </button>
    );
};

export default Button;
