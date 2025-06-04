import "./App.css";
import Header from "./components/Header";

function App() {
    return (
        <main>
            <Header />
            <section>
                <div className="ad-membership">
                    <img src="../src/assets/popcorn.png" alt="" />
                    <div className="ad-membership-container">
                        <div>
                            <span className="ad-membership-description">
                                7,000원이면 만날 수 있는 넷플릭스.
                            </span>
                            <br />
                            <span>
                                가장 경제적인 광고형 멤버십을 이용해 보세요.
                            </span>
                        </div>
                        <button>자세히 알아보기</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
