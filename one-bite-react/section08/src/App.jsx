import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import {useState, useRef} from "react";

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

function App() {
    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3);

    const onCreate = (content) => {
        const newToDo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime()
        };

        setTodos([newToDo, ...todos])
    }

    const onUpdate = (targetId) => {
        // target id와 일치하는 id를 갖는 todo item의 isDone을 변경
        setTodos(todos.map((todo) => {
            if (todo.id === targetId) {
                return {
                    ...todo,
                    isDone: !todo.isDone,
                }
            }
            return todo;
        }))
    }

    const onDelete = (targetId) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== targetId;
        }))
    }

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
