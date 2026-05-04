import './App.css';
import TodoList from './components/TodoList';
import { Suspense } from 'react';
import { CallAPI } from './API/DataRecuperation';

const tasksPromise = CallAPI()

const App = () => {

  return (
    <main className="React-Todo">

      {/* Input Informations */}
      <h1>TodoList React</h1>
      <section className='CSSBase' id='ErrorMSG'>
        <h3>Chamb requis manquant</h3>
        <p>Le ( name ) de la tâche est obligatoire.</p>
      </section>
      <section className='CSSBase padding' id='NewTaskHolder'>
        <div id="informations">
          <h2>Nouvelle Tâche</h2>
          <p>Titre</p>
          <input className='CSSBase' id="title_Input" type="text" placeholder='Task Title . . .' />
          <p>Date</p>
          <input className='CSSBase' id="date_Input" type="date"/>
          <p>Description</p>
          <input className='CSSBase' id="description_Input" type="text" placeholder='Task details . . .' />
        </div>
        <div id='buttonContainer'>
          <button className='CSSBase' id='addTaskButton'>+ Crée la Tâche</button>
        </div>
      </section>

      {/* Tasks Display */}
      <section className='CSSBase padding' id='displayTasks'>
        <h4>Liste des Tâches</h4>
        <Suspense fallback="Loading Tasks . . .">
          <TodoList tasksPromise={tasksPromise} />
        </Suspense> 
        
      </section>
    </main>
  );  
};

export default App;

