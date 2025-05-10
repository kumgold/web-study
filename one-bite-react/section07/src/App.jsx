import './App.css'
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even.jsx";

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const isMount = useRef(false);

    // 1. 마운트 : 탄생
    useEffect(() => {
        console.log("Mount");
    }, []);

    // 2. 업데이트 : 변화, 리렌더링
    useEffect(() => {
        if (!isMount.current) {
            isMount.current = true;
            return;
        }
        console.log("Re-Rendering");
    });

    // 3. 언마운트 : 죽음


    // useEffect(() => {
    //     console.log(`count : ${count}, input : ${input}`);
    // }, [count, input]);
    // 의존성 배열
    // dependency array
    // deps

    const onClickButton = (value) => {
        setCount(count + value); // 비동기 함수
    }

    return (
        <div className="App">
            <h1>제발 성공하자</h1>
            <section>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
            </section>
            <section>
                <Viewer count={count}/>
                {count % 2 === 0 ? <Even/> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton}/>
            </section>
        </div>
    )
}

export default App
