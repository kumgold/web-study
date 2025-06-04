import MailInput from "../MailInput";
import "./EnrollNetflix.css";
import EnrollNetflixHeader from "./EnrollNetflixHeader";

const EnrollNetflix = () => {
    return (
        <main className="header-container">
            <EnrollNetflixHeader />
            <section className="introduce">
                <p>
                    <span className="introduce-description">
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

export default EnrollNetflix;
