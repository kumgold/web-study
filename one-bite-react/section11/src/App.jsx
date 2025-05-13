import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import NotFound from "./pages/NotFound.jsx";
import Edit from "./pages/Edit.jsx";
import {createContext, useReducer, useRef} from "react";

const mockData = [
    {
        id: 1,
        createdDate: new Date("2025-05-05").getTime(),
        emotionId: 1,
        content: "11"
    },
    {
        id: 2,
        createdDate: new Date("2025-04-05").getTime(),
        emotionId: 2,
        content: "22"
    },
    {
        id: 3,
        createdDate: new Date("2025-05-01").getTime(),
        emotionId: 3,
        content: "33"
    },
]

function reducer(state, action) {
    switch (action.type) {
        case "CREATE": {
            return [action.data, ...state]
        }
        case "UPDATE": {
            return state.map((item) =>
                String(item.id) === String(action.data.id) ? action.data : item
            );
        }
        case "DELETE": {
            return state.filter((item) => String(item.id) !== String(action.id));
        }
        default: return state;
    }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(data.length);

    // 새로운 일기 추가
    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content
            }
        });
    }

    // 기존 일기 수정
    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id, createdDate, emotionId, content
            }
        })
    }

    // 기존 일기 삭제
    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            id: id
        })
    }

    return (
        <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext.Provider value={{
                onCreate,
                onUpdate,
                onDelete
            }}>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/new" element={<New/>} />
                    <Route path="/diary/:id" element={<Diary/>} />
                    <Route path="/edit/:id" element={<Edit/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
    )
}

export default App
