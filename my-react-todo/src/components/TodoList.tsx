import TodoItem from "./TodoItem";
import type { TaskRead } from "../API/DataRecuperation";
import { use } from "react";
import '../App.css'

interface TodoListProps {
    tasksPromise: Promise<TaskRead[]>;
    onDelete: (id: number) => void
    onEdit: (id: number, updatedTask: Partial<TaskRead>) => void
}

export default function TodoList({ tasksPromise, onDelete, onEdit }: TodoListProps) {
    const tasks: TaskRead[] = use(tasksPromise)

    if (tasks.length === 0)return <p>No tasks to complete.</p>
    return (
        <section id="displayTasks">
            {
            tasks.map((item) => (
                <TodoItem key={item.id} todo={item} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </section>
    );
}
