// 간단한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개

import { useState, useRef } from "react";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    })

    // useRef는 변경되어도 리렌더링이 일어나지 않는다.
    // 일반 변수가 아닌 useRef로 만드는 이유는 리렌더링시 초기화되지 않기 때문이다.
    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {

        countRef.current++;
        console.log(countRef.current)

        // 대괄호 안에 변수의 이름을 넣으면 프로퍼티의 key로써 작용한다.
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = () => {
        if (input.name === "") {
            // 이름을 입력하는 DOM 요소 포커싱
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <div>
                <input
                    // input DOM 요소가 inputRef에 저장된다.
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange}
                    placeholder={"이름"}
                />
            </div>

            <div>
                <input
                    name="birth"
                    value={input.birth}
                    onChange={onChange}
                    type="date"
                />
            </div>

            <div>
                <select
                    name="country"
                    value={input.country}
                    onChange={onChange}
                >
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea
                    name="bio"
                    value={input.bio}
                    onChange={onChange}
                />
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    )
}

export default Register;