import Button from "../common/Button";
import "./EnrollNetflixHeader.css";

const EnrollNetflixHeader = () => {
    return (
        <section className="header">
            <img
                className="header-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix"
            />
            <div className="header-right">
                <select className="header-select">
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
    );
};

export default EnrollNetflixHeader;
