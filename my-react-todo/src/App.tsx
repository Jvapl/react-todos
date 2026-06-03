import { useState, Suspense } from "react";
import { fetchTodosAPI, type Task, createTodosAPI, deleteTodosAPI, type TaskRead, updateTodosAPI } from "./API/DataRecuperation";
import  { AddTask } from "./components/NewTask";
import TodoList from "./components/TodoList";
import { SortingPopover } from "./components/SortingPopover";

const App = () => {
  
  const [tasksPromise, setTasksPromise] = useState(() => fetchTodosAPI())
  const [filterType, setFilterType] = useState("none")
  const [sortType, setSortType] = useState("none")
  const handleNewTask = async (taskFromChild: Task) => {
  console.log("New task reached from AddTask: ", taskFromChild)
    
  try {
    await createTodosAPI(taskFromChild)
    console.log('Task created')
    setTasksPromise(fetchTodosAPI())
    
  }catch(error){
    console.error('Could not create task: ', error);
  }
}

  const handleDeleteTask = async (id: number) => {
      try {
      await deleteTodosAPI(id)
      setTasksPromise(fetchTodosAPI())
    }catch(error){
      console.error('Error supression: ',error)
    }
  }
  
  const handleEditTask = async (id: number, updatedTask: Partial<TaskRead>) => {
    try {
      await updateTodosAPI(id, updatedTask)
      setTasksPromise(fetchTodosAPI())
    }catch(error){
      console.error('Error editing: ', error)
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
        <div className="sortDiv">
          <h4>Tasks List</h4>
          <div className="sortAndDeleteALl">
            <SortingPopover
              onSortChange={setSortType}
              onFilterChange={setFilterType}
              currentFilter={filterType}
              currentSort={sortType}
            />
            <button className="CSSBase cursorPointer popoverBtns">Delete All</button>
          </div>
        </div>
        <Suspense fallback="Loading Tasks . . .">
          <TodoList
            tasksPromise={tasksPromise} 
            onDelete={handleDeleteTask} 
            onEdit={handleEditTask}
            filterType={filterType}
            sortType={sortType}
            />
        </Suspense> 
      </section>
    </main>
  );  
};

export default App;