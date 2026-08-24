import { Suspense } from "react";
import { AddTask } from "./components/NewTask";
import TodoList from "./components/TodoList";
import { SortingPopover } from "./components/SortingPopover";
import { ErrorBanner } from "./components/ErrorBanner";
import { useTodoStore } from "./store/todoStore";

const App = () => {
  const {
    taskPromise,
    apiError,
    filterType,
    sortType,
    setFilter,
    setSort,
    setApiError,
    deleteTask,
    editTask
  } = useTodoStore()

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
          <AddTask />
        </div>
      </section>

      <section className='CSSBase padding'>
        <div className="sortDiv">
          <h4>Tasks List</h4>
          <div className="sortAndDeleteALl">
            <SortingPopover
              onSortChange={setSort}
              onFilterChange={setFilter}
              currentFilter={filterType}
              currentSort={sortType}
            />
            <button className="CSSBase cursorPointer popoverBtnCouls">Delete All</button>
          </div>
        </div>
        <Suspense fallback="Loading Tasks . . .">
          <TodoList
            tasksPromise={taskPromise}
            onDelete={deleteTask}
            onEdit={editTask}
            filterType={filterType}
            sortType={sortType}
          />
        </Suspense>
      </section>
    </main>
  );
};

export default App;