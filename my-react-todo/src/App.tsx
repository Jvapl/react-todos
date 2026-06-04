import { useState, Suspense } from "react";
import { fetchTodosAPI, type Task, createTodosAPI, deleteTodosAPI, type TaskRead, updateTodosAPI } from "./API/DataRecuperation";
import { AddTask } from "./components/NewTask";
import TodoList from "./components/TodoList";
import { SortingPopover } from "./components/SortingPopover";
import { ErrorBanner } from "./components/ErrorBanner";

const App = () => {
  const [apiError, setApiError] = useState<string | null>(null)
  const [tasksPromise, setTasksPromise] = useState(() => fetchTodosAPI())
  const [filterType, setFilterType] = useState("none")
  const [sortType, setSortType] = useState("none")

  const handleNewTask = async (taskFromChild: Task) => {
    try {
      setApiError(null)
      await createTodosAPI(taskFromChild)
      setTasksPromise(fetchTodosAPI())
    } catch (error: unknown) {
      if(error instanceof Error){} // instanceof système de verification d'heritage
      if(error instanceof Error){
        setApiError(error.message || "An error occurred while creating the task.")
      }else{
        setApiError("An unexpected error occurred.")
      }
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      setApiError(null)
      await deleteTodosAPI(id)
      setTasksPromise(fetchTodosAPI())
    } catch (error: unknown) {
      if(error instanceof Error){
        setApiError(error.message || "An error occurred while deleting the task.")
      }
      setApiError("An unexpected error occurred.")
    }
  };
  
  const handleEditTask = async (id: number, updatedTask: Partial<TaskRead>) => {
    try {
      setApiError(null)
      await updateTodosAPI(id, updatedTask)
      setTasksPromise(fetchTodosAPI())
    } catch (error: unknown) {
      if(error instanceof Error){
        setApiError(error.message || "An error occured while updating the task.")
      }
      setApiError("An unexpected error occurred.")
    }
  }

  return (
    <main className="React-Todo">
      {apiError && (
        <ErrorBanner 
          message={apiError} 
          onDismiss={() => setApiError(null)} 
        />
      )}

      <h1>TodoList React</h1>

      <section className='CSSBase padding' id='NewTaskHolder'>
        <div id="informations">
          <h2>New Task</h2>
          <AddTask onAddTask={handleNewTask}></AddTask>
        </div>
      </section>

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