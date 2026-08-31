import { useState } from "react";
import { type Task } from "../API/DataRecuperation";
import { useTodoStore } from "../store/todoStore";

export const AddTask = () => {
    const stateAddTask = useTodoStore((state) => state.addTask)
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [showError, setShowError] = useState(false)

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement> /* Je dit que l'evenement que j'ai clické
        est un submit event de React */) => {
        e.preventDefault()
        if (!title || !title.trim()) {
            setShowError(true)
            return
        }
        const currentDate = new Date().toISOString().split('T')[0]
        
        const newTask: Task = {
            title: title,
            done: false
        }
        if (date !== "" && date >= currentDate) {
            newTask.due_date = date
        }else{
            throw new Error("This date isn't valid")
        }
        if (description.trim() !== "") {
            newTask.content = description
        }
        stateAddTask(newTask)
        setTitle("")
        setDate("")
        setDescription("")

    }

    return (
        <>
            <section
                className={`CSSBase error-message ErrorMSG ${showError ? 'visible' : 'hidden'}`}> {/* si vrai classe visible si faux hidden */}
                <h3>Something is Missing</h3>
                <p>The Task Title is needed.</p>
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
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="CSSBase" id="description_Input" placeholder="Task detail . . ." />
                <div id="buttonContainer">
                    <button type="submit" className='CSSBase' id='addTaskButton'>+ New Task</button>
                </div>
            </form>
        </>
    )
}

// // // 1. Récupérer la valeur de l'input (ex: "2026-08-28")
// const dateBrute = document.getElementById("monInputDate").value; 

// if (dateBrute) {
//     // 2. Convertir la chaîne en objet Date JavaScript
//     const dateObj = new Date(dateBrute);

//     // 3. Formater la date en français
//     const dateLisible = dateObj.toLocaleDateString('fr-FR', {
//         weekday: 'long', // "vendredi" (optionnel)
//         year: 'numeric',  // "2026"
//         month: 'long',    // "août"
//         day: 'numeric'    // "28"
//     });

//     console.log(dateLisible); // Résultat : "vendredi 28 août 2026"
// }

