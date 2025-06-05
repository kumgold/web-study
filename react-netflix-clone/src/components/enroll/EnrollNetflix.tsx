import MailInput from "../common/MailInput";
import "./EnrollNetflix.css";
import EnrollNetflixHeader from "./EnrollNetflixHeader";

const EnrollNetflix = () => {
    return (
        <div className="header-container">
            <EnrollNetflixHeader />
            <div className="introduce">
                <p>
                    <span className="introduce-description">
                        영화, 시리즈 등을 무제한으로
                    </span>
                    <br />
                    7000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.
                </p>
                <MailInput />
            </div>
        </div>
    );
};

export default EnrollNetflix;
