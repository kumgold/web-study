import './List.css'
import ToDoItem from "./ToDoItem.jsx";
import {useMemo, useState} from "react";

const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) => {
            return todo.content.toLowerCase().includes(search.toLowerCase())
        });
    }

    const filteredTodos = getFilteredData();

    // useMemo가 리턴하는 값을 그대로 반환
    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount, doneCount, notDoneCount
        };
    }, [todos]);

    return (
        <div className="List">
            <h4>To Do List</h4>
            <div>
                <div>total : {totalCount}</div>
                <div>done : {doneCount}</div>
                <div>notDone : {notDoneCount}</div>
            </div>
            <input
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요"
            />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return <ToDoItem
                        key={todo.id}
                        {...todo}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />;
                })}
            </div>
        </div>
    )
}

export default List