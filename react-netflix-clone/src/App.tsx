import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
    return (
        <main>
            <Header />
            <section>
                <p>
                    <span style={{ fontSize: 45, fontWeight: 800 }}>
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
}

export default App;
