import TodoItem from "./TodoItem";
import type { TaskRead } from "../API/DataRecuperation";
import { use } from "react";
import '../App.css'

interface TodoListProps {
    tasksPromise: Promise<TaskRead[]>;
    onDelete: (id: number) => void
    onEdit: (id: number, updatedTask: Partial<TaskRead>) => void
    filterType: string
    sortType: string
}

export default function TodoList({ tasksPromise, onDelete, onEdit, sortType, filterType }: TodoListProps) {
    const tasks: TaskRead[] = use(tasksPromise)

    let filteredTasks = tasks.filter((task) => {
        if (filterType === 'done') return task.done;
        if (filterType === 'undone') return !task.done;
        return true;
    });

    const sorted = [...filteredTasks].sort((a, b) => {
        if (sortType === 'name') {
            return a.title.localeCompare(b.title);// Compare des strings
        }
        if (sortType === 'date') {
            if(!a.due_date && !b.due_date) return 0 // Pas de date = egales

            if(!a.due_date) return 1 //passe devant
            if(!b.due_date) return -1   //  est après
            // Les task qui n'on pas de date vont en tout dernier
            return new Date(a.due_date).getTime() - new Date(b.due_date).getTime();
        }
        return 0; // 
    });

    if (tasks.length === 0)return <p>No tasks to complete.</p>
    if (sorted.length === 0) return <p>No tasks match your criteria.</p>;

    return (
        <section id="displayTasks">
            {
            sorted.map((item) => (
                <TodoItem key={item.id} todo={item} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </section>
    );
}
