import './App.css';
import TodoList from './components/TodoList';
import { Suspense, useState } from 'react';
import { CallAPI, PostAPI } from './API/DataRecuperation';
import { AddTask } from './components/AddTask';
import type { Task } from './API/DataRecuperation';


const App = () => {
  
  const [tasksPromise, setTasksPromise] = useState(CallAPI())

  const handleNewTask = async (taskFromChild: Task) => {
  console.log("New task reached from AddTask: ", taskFromChild)
  
  try {

    await PostAPI(taskFromChild)
    console.log('Task created')
    setTasksPromise(CallAPI())
    
  }catch(error){
    console.error('Impossible to create task: ', error);
  }
}

  return (
    <main className="React-Todo">

      {/* Input Informations */}
      <h1>TodoList React</h1>

      <section className='CSSBase padding' id='NewTaskHolder'>
        <div id="informations">
          <h2>Nouvelle Tâche</h2>
          <AddTask onAddTask={handleNewTask}></AddTask>
          {/* tout ce qui est input */}
        </div>
      </section>

      {/* Tasks Display */}
      <section className='CSSBase padding'>
        <h4>Liste des Tâches</h4>
        <Suspense fallback="Loading Tasks . . .">
          <TodoList tasksPromise={tasksPromise} />
        </Suspense> 
      </section>
    </main>
  );  
};

export default App;

