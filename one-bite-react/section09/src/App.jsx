import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import React, {useState, useRef, useReducer, useCallback} from "react";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "Study React",
        date: new Date().getTime()
    },
    {
        id: 1,
        isDone: false,
        content: "Play",
        date: new Date().getTime()
    },
    {
        id: 2,
        isDone: false,
        content: "Rest",
        date: new Date().getTime()
    },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE": return [action.data, ...state];
        case "UPDATE":
            return state.map((item) =>
                item.id === action.targetId
                    ? {...item, isDone: !item.isDone}
                    : item
            );
        case "DELETE":
            return state.filter((item) => item.id !== action.targetId);
        default: return state;
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = useCallback((content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime()
            }
        });
    }, []);

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: "UPDATE",
            targetId: targetId
        });
    }, []);

    // Mount 되었을 때 단 한 번 생성한다.
    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            targetId: targetId
        });
    }, []);

    return (
        <div className="App">
            <h1>제발 성공하자</h1>
            <Header/>
            <Editor onCreate={onCreate}/>
            <List
                todos={todos}
                onUpdate={onUpdate}
                onDelete={onDelete}
            />
        </div>
    )
}

export default App
