import TodoItem from "./TodoItem";
import { type Task } from "../API/DataRecuperation";
import { use } from "react";

interface TodoListProps {
    tasksPromise: Promise<Task[]>;

}


export default function TodoList({ tasksPromise }: TodoListProps) {
    const tasks: Task[] = use(tasksPromise)
    if (tasks.length === 0)return <p>No tasks to complete.</p>
    return (
        <section>
            {
            tasks.map((item) => (
                <TodoItem key={item.id} todo={item} />
            ))}
        </section>
    );
}