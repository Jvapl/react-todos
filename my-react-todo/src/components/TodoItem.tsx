import Trash from "../medias/Trash.png";
import Edit from "../medias/edit.png";
import {type TaskRead } from "../API/DataRecuperation";

interface TodoItemProps {
    todo: TaskRead;
    onDelete: (id: number) => void
}


export default function TodoItem({ todo, onDelete }: TodoItemProps) {
    return (
        <>
            <div className="Task">
                <div id="taskInformations">
                    <input type="checkbox" id="checkBoxTask" defaultChecked={false} />
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
                    <button onClick={() => {
                        onDelete(todo.id)}} className="CSSBase Buttons" id="clearButton">
                        <img className="imgButton" src={Trash} alt="Trash logo" />
                    </button>
                </div>
            </div>       
        </>
        // Task Informations
    );
}