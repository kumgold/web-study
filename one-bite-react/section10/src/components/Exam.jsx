import {useReducer} from "react";

// useReducer에 State 상태를 변화시키는 함수
// 1. useReducer의 dispatch 함수 호출
// 2. 인수로 전달된 reducer 함수 호출
// 3. dispatch의 인수 = action 객체 전달
function reducer(state, action) {
    console.log("reducer state", state, action);

    if (action.type === "INCREASE") {
        return state + action.data;
    } else if (action.type === "DECREASE") {
        return state - action.data;
    }
}

const Exam = () => {
    // dispatch -> 상태 변화를 알리는 함수
    // useState와 다르게 useReducer는 state 관련 코드를
    // 컴포넌트 밖에서 제어할 수 있다.
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        // 인수: 상태가 어떻게 변하길 원하는지 작성한다.
        // -> 액션 객체
        dispatch({
            type: "INCREASE",
            data: 1
        })
    }

    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1
        })
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    )
}

export default Exam;