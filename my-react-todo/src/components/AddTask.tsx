import { useState } from "react";
import { type Task } from "../API/DataRecuperation";


interface AddTaskProps {
    onAddTask: (tasks:Task) => void 
}

export const AddTask = ({onAddTask}: AddTaskProps) => {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [showError, setShowError] = useState(false)
    
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!title){
            setShowError(true)
            return
        }
        const newTask:Task = {
            title: title,
        }

        if (date !== ""){
            newTask.due_date = date
        }
        if (description !== ""){
            newTask.content  = description
        }
    onAddTask(newTask)
    setTitle("")
    setDate("")
    setDescription("")

    }

    return (
        <>
                
                <section
                    className={`CSSBase error-message ErrorMSG ${showError ? 'visible' : 'hidden'}`}> {/* si vrai classe visible si faux hidden */}
                    <h3>Chamb requis manquant</h3>
                    <p>Le titre de la tâche est obligatoire.</p>
                </section>

            <form id='NewTaskHolder' onSubmit={handleSubmit}>
                <p>Titre</p>
                <input value={title} onChange={(e) => {
                    setTitle(e.target.value)
                    setShowError(false)
                }} className="CSSBase" placeholder="Task Title . . ." />
                <p>Date</p>
                <input value={date} onChange={(e) => setDate(e.target.value)} className="CSSBase" id="date_Input" type="date" />
                <p>Description</p>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="CSSBase" id="description_Input" placeholder="Task detail . . ."/>
                <div id="buttonContainer">
                    <button type="submit" className='CSSBase' id='addTaskButton'>+ New Task</button>
                </div>
            </form>
        </>
    )
}

 
