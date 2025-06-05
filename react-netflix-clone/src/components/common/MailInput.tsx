import "./MailInput.css";
import rightArrow from "../../assets/right_arrow.svg";
import { useState } from "react";

const MailInput: React.FC = () => {
    const [email, setEmail] = useState("");

    return (
        <div>
            <p>
                시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
                주소를 입력하세요.
            </p>
            <div className="email-form">
                <input
                    className="email-input"
                    placeholder="이메일을 입력하세요."
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <label htmlFor="email" className="visually-hidden">
                    이메일 입력
                </label>
                <button className="button email-label" type="submit">
                    시작하기
                    <img src={rightArrow} className="arrow-icon" alt="" />
                </button>
            </div>
        </div>
    );
};

export default MailInput;
