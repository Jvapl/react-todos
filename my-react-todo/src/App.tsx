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
      <section className='CSSBase padding'>
        <div>
          <h4>Nouvelle Tâche</h4>
          <p>Titre</p>
          <input className='CSSBase' type="text" placeholder='Task Title . . .' />
        </div>
        <button className='CSSBase' style={{justifyItems: 'right'}}>+ Crée la Tâche</button>
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



// Partial == rends les proprietées optionelles et aussi 