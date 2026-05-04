import Trash from "../medias/Trash.png";
import Edit from "../medias/edit.png";
import type { Task } from "../API/DataRecuperation";

interface TodoItemProps {
    todo: Task;
}


export default function TodoItem({ todo }: TodoItemProps) {
    return (
        <>
                <div className="Task">
                <div id="taskInformations">
                <input type="checkbox" defaultChecked={todo.done} />
                <div>
                    <h3>{todo.title}</h3>
                    <p>Date {todo.due_date}</p>
                    <p>{todo.content}</p>
                </div>
            </div>

        {/* Tasks Buttons */}
            <div className="TaskButtons">
                <button className="CSSBase Buttons" id="editButton">
                    <img className="imgButton" src={Edit} alt="edit logo"/>
                </button>
                <button className="CSSBase Buttons" id="clearButton">
                    <img className="imgButton" src={Trash} alt="Trash logo" />
                </button>
            </div>
        </div>       
        </>
        // Task Informations
    );
}