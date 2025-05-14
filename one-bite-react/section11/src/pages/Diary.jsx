import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Viewer from "../components/Viewer.jsx";
import useDiary from "../hooks/useDiary.jsx";
import {getStringDate} from "../util/get-string-date.js";

const Diary = () => {
    // URL에 명시되어 있는 Parameters를 가져오도록 하는 Hook
    const params = useParams();
    const nav = useNavigate();
    const currentDiaryItem = useDiary(params.id);

    if (!currentDiaryItem) {
        return <div>데이터 로딩중</div>
    }

    const {createdDate, emotionId, content} = currentDiaryItem;
    const title = getStringDate(new Date(createdDate));

    return (
        <div>
            <Header
                title={`${title} 기록`}
                leftChild={<Button
                    onClick={() => nav(-1)}
                    text={"< 뒤로 가기"}/>}
                rightChild={<Button
                    onClick={() => nav(`/edit/${params.id}`)}
                    text={"수정하기"}/>}
            />
            <Viewer emotionId={emotionId} content={content} />
        </div>
    );
}

export default Diary;