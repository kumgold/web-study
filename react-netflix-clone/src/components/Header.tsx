import Button from "./Button";
import "./Header.css";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header_left">
                <img
                    className="header_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix Logo"
                />
            </div>
            <div className="header_right">
                <Button />
            </div>
        </header>
    );
};

export default Header;
