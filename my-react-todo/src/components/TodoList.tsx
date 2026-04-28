import TodoItem from "./TodoItem";
import type { Task } from "../App";

interface TodoListProps {
    tasks: Task[];
}

export default function TodoList({ tasks }: TodoListProps) {
    return (
        <section>
            {tasks.map((item) => (
                <TodoItem key={item.id} todo={item} />
            ))}
        </section>
    );
}