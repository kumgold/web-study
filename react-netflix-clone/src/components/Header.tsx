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
                <select className="header_select">
                    <option lang="ko" label="한국어" value="ko-KR">
                        한국어
                    </option>
                    <option lang="en" label="English" value="en-KR">
                        English
                    </option>
                </select>
                <Button text="로그인" fontSize="14px" />
            </div>
        </header>
    );
};

export default Header;
