import {useParams} from "react-router-dom";

const Diary = () => {
    // URL에 명시되어 있는 Parameters를 가져오도록 하는 Hook
    const params = useParams();

    return (
        <div>{params.id}번 일기입니다</div>
    );
}

export default Diary;