const Button = ({children, text, color = "black"}) => {
    // 합성 이벤트. 모든 브라우저에서 사용할 수 있는 통합된 규격의 객체.
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }

    return (
        <button
            onClick={onClickButton}
        >
            {text} - {color}
            {children}
        </button>
    );
}

export default Button;