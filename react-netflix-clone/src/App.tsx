import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
    return (
        <div>
            <Header />
            <div style={{ width: "100%", backgroundColor: "gray" }}>
                <h1>영화, 시리즈 등을 무제한으로</h1>
                <p>7000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.</p>
                <div>
                    <p>
                        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면
                        이메일 주소를 입력하세요.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flex: 1,
                            alignContent: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Input />
                        <Button text="시작하기 >" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
