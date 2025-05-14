import "./Editor.css";
import EmotionItem from "./EmotionItem.jsx";
import Button from "./Button.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {emotionList} from "../util/constants.js";
import {getStringDate} from "../util/get-string-date.js";

const Editor = ({initData, onSubmit}) => {
    const nav = useNavigate();
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: ""
    });

    useEffect(() => {
        if (initData) {
            setInput({
                ...initData,
                createdDate: new Date(Number(initData.createdDate)),
            })
        }
    }, [initData])

    const onChangeInput = (e) => {
        const name = e.target.name; // 입력 요소
        let value = e.target.value; // 입력 값

        if (name === 'createdDate') {
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value
        })
    }

    const onClickSubmitButton = () => {
        onSubmit(input);
    }

    return (
        <div className="Editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input
                    name="createdDate"
                    onChange={onChangeInput}
                    value={getStringDate(input.createdDate)}
                    type="date"
                />
            </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) =>
                        <EmotionItem
                            key={item.emotionId}
                            onClick={() => onChangeInput({
                                target: {
                                    name: "emotionId",
                                    value: item.emotionId
                                }
                            })}
                            {...item}
                            isSelected={input.emotionId === item.emotionId}
                        />
                    )}
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea
                    name="content"
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder="오늘은 어땠나요?"
                />
            </section>
            <section className="button_section">
                <Button
                    text={"취소하기"}
                    onClick={() => nav(-1)}
                />
                <Button
                    text={"작성완료"}
                    type={"POSITIVE"}
                    onClick={onClickSubmitButton}
                />
            </section>
        </div>
    )
}

export default Editor;