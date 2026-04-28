import type { Task } from "../App";
import Trash from "../medias/Trash.png";
import Edit from "../medias/edit.png";

interface TodoItemProps {
    todo: Task;
}

export default function TodoItem({ todo }: TodoItemProps) {
    return (
        <div className="Task">
            <div id="taskInformations">
                <input type="checkbox" defaultChecked={todo.completed} />
                <div>
                    <h3>{todo.text}</h3>
                    <p>Date {todo.date}</p>
                    <p>{todo.description}</p>
                </div>
            </div>

            <div className="TaskButtons">
                <button className="CSSBase Buttons" id="editButton">
                    <img className="imgButton" src={Edit} alt="edit logo"/>
                </button>
                <button className="CSSBase Buttons" id="clearButton">
                    <img className="imgButton" src={Trash} alt="Trash logo" />
                </button>
            </div>
        </div>
    );
}