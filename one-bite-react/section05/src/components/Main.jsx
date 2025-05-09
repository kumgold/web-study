import "./Main.css"

const Main = () => {
    const user = {
        name: "John",
        isLogin: true,
    }

    return (
        <main>
            <h1 className="logout">Main</h1>
            {
                user.isLogin ? (
                    <div>로그아웃</div>
                ) : (
                    <div>로그인</div>
                )
            }
        </main>
    )
}

export default Main;

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 사용할 수 있다.
// 2. 숫자, 문자열, 배열만 값만 렌더링 된다.
// 3. 모든 태그는 닫혀 있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다.

