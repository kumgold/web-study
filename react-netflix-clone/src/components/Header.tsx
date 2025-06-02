import Button from "./Button";
import "./Header.css";
import Input from "./Input";

const Header = () => {
    return (
        <main className="container">
            <section className="header">
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
            </section>
            <section className="introduce">
                <p>
                    <span className="introduce_description">
                        영화, 시리즈 등을 무제한으로
                    </span>
                    <br />
                    7000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.
                </p>
                <div>
                    <p>
                        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면
                        이메일 주소를 입력하세요.
                    </p>
                    <div className="email_input">
                        <Input />
                        <Button text="시작하기" fontSize="18px" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Header;
