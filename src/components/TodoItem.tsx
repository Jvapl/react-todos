import Trash from "../medias/Trash.png";
import { type TaskRead } from "../API/DataRecuperation";
import { useState } from "react";
import { EditableField } from "./EditField";

interface TodoItemProps {
    todo: TaskRead;
    onDelete: (id: number) => void
    onEdit: (id: number, updatedTask: Partial<TaskRead>) => void
}


export default function TodoItem({ todo, onDelete, onEdit }: TodoItemProps) {
    const [editingField, setEditingField] = useState<"title" | "due_date" | "content" | null>(null)
    return (
        <>
            <div className="Task">
                <div id="taskInformations">
                    <input onChange={(e) => {
                        const updatedTaskStatus = { done: e.target.checked }
                        onEdit(todo.id, updatedTaskStatus)
                    }} type="checkbox" className="checkBoxTask" checked={todo.done} />
                    <div className="TaskContent">
                        <EditableField
                            inputType="text"
                            value={todo.title}
                            placeholder="Task title"
                            isEditing={editingField === "title"}
                            onEditStart={() => setEditingField("title")}
                            onSave={(newValue) => {
                                setEditingField(null)
                                const updatedTaskTitle = {
                                    title: newValue
                                };
                                onEdit(todo.id, updatedTaskTitle)
                            }}
                        />
                        <EditableField
                            inputType="date"
                            value={todo.due_date}
                            placeholder="Date"
                            isEditing={editingField === "due_date"}
                            onEditStart={() => setEditingField("due_date")}
                            onSave={(newValue) => {
                                setEditingField(null)
                                const updatedTaskDate = {
                                    due_date: newValue
                                }
                                onEdit(todo.id, updatedTaskDate)
                            }}
                        />
                        <EditableField
                            isTextArea={true}
                            value={todo.content}
                            placeholder="Content"
                            isEditing={editingField === "content"}
                            onEditStart={() => setEditingField("content")}
                            onSave={(newValue) => {
                                setEditingField(null)
                                const updatedTaskContent = {
                                    content: newValue
                                }
                                onEdit(todo.id, updatedTaskContent)
                            }}
                        />
                    </div>
                </div>

                {/* Tasks Buttons */}
                <div className="TaskButtons">
                    <button className="CSSBase" onClick={() => onDelete(todo.id)}><img className="imgButton" src={Trash} alt="" /></button>
                </div>
            </div>
        </>
    );
}
