import type { Task } from "../App";

interface TodoItemProps {
    todo: Task;
}

export default function TodoItem({ todo }: TodoItemProps) {
    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <input type="checkbox" defaultChecked={todo.completed} />
            <div>
                <h3>{todo.text}</h3>
                <p>Data: {todo.date}</p>
                <p>{todo.description}</p>
            </div>
            <button>Edit</button>
            <button>Effacer</button>
        </div>
    );
}