import {useState} from "react";

// 커스텀 훅 접두사 use가 붙은 함수는 리액트 안에서 커스텀 훅으로써 작동한다.
function useInput() {
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    }

    return [input, onChange];
}

export default useInput;