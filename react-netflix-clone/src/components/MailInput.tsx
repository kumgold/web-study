import "./MailInput.css";

const MailInput: React.FC = () => {
    return (
        <div>
            <p>
                시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
                주소를 입력하세요.
            </p>
            <form className="email_form">
                <input
                    className="email_input"
                    placeholder="이메일을 입력하세요."
                    id="email"
                />
                <label form="email" className="button email_label">
                    시작하기
                </label>
            </form>
        </div>
    );
};

export default MailInput;
