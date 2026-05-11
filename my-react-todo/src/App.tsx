import './App.css';
import TodoList from './components/TodoList';
import { Suspense, useState } from 'react';
import { CallAPI, PostAPI, RemoveApi } from './API/DataRecuperation';
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
    console.error('Could not create task: ', error);
  }
}

  const handleDeleteTask = async (id: number) => {
      try {
      await RemoveApi(id)
      setTasksPromise(CallAPI())
    }catch(error){
      console.error('Error supression: ',error)
    }
  }

  return (
    <main className="React-Todo">

      {/* Input Informations */}
      <h1>TodoList React</h1>

      <section className='CSSBase padding' id='NewTaskHolder'>
        <div id="informations">
          <h2>New Task</h2>
          <AddTask onAddTask={handleNewTask}></AddTask>
          {/* tout ce qui est input */}
        </div>
      </section>

      {/* Tasks Display */}
      <section className='CSSBase padding'>
        <h4>Tasks List</h4>
        <Suspense fallback="Loading Tasks . . .">
          <TodoList tasksPromise={tasksPromise} onDelete={handleDeleteTask} />
        </Suspense> 
      </section>
    </main>
  );  
};

export default App;

