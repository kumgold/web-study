import Button from "./Button";
import "./Header.css";
import MailInput from "./MailInput";

const Header: React.FC = () => {
    return (
        <main className="container">
            <section className="header">
                <img
                    className="header_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix"
                />
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
            </section>
            <section className="introduce">
                <p>
                    <span className="introduce_description">
                        영화, 시리즈 등을 무제한으로
                    </span>
                    <br />
                    7000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.
                </p>
                <MailInput />
            </section>
        </main>
    );
};

export default Header;
