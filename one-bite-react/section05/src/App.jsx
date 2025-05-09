import './App.css'
import Header from "./components/Header";
import Register from "./components/Register";
import HookExam from "./components/HookExam.jsx";

function App() {
    return (
        <>
            <Header />
            <HookExam/>
        </>
    );
}

export default App;

// State는 두 개의 요소를 반환한다.
// 첫 번째 요소는 state의 값.
// 두 번째 요소는 값을 변경하는 함수.

// Props로 HTML, Component도 전달이 가능하다.
// Component를 전달하면 자식 요소에서는 children 이라는 이름으로 매핑된다.

// 리액트 컴포넌트는 일반적인 변수가 변경되었다고 리렌더링이 일어나지 않는다.
// 반드시 State로 관리해야 리액트가 확인하고 State가 변경되었을 때, 리렌더링이 일어난다.

// 자신이 관리하는 state가 변경되면 리렌더링
// 자신이 제공 받는 props가 변경되면 리렌더링
// 부모 컴포넌트가 변경되면 리렌더링


