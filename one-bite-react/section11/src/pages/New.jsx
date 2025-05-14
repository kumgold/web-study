import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {DiaryDispatchContext} from "../App.jsx";

const New = () => {
    const {onCreate} = useContext(DiaryDispatchContext);
    const nav = useNavigate();

    const onSubmit = (input) => {
        onCreate(
            input.createdDate.getTime(),
            input.emotionId,
            input.content
        );
        // replace : 뒤로 가기 방지
        nav('/', {replace: true});
    }

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={
                <Button
                    onClick={() => nav(-1)}
                    text={"< 뒤로가기"}
                />}
            />
            <Editor onSubmit={onSubmit}/>
        </div>
    );
}

export default New;