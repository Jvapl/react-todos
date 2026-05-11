import TodoItem from "./TodoItem";
import type { TaskRead } from "../API/DataRecuperation";
import { use } from "react";
import '../App.css'

interface TodoListProps {
    tasksPromise: Promise<TaskRead[]>;
    onDelete: (id: number) => void
}

export default function TodoList({ tasksPromise, onDelete }: TodoListProps) {
    const tasks: TaskRead[] = use(tasksPromise)

    if (tasks.length === 0)return <p>No tasks to complete.</p>
    return (
        <section id="displayTasks">
            {
            tasks.map((item) => (
                <TodoItem key={item.id} todo={item} onDelete={onDelete} />
            ))}
        </section>
    );
}