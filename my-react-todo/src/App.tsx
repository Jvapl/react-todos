import './App.css';
import TodoList from './components/TodoList';

export interface Task {
  id: number;
  text: string;
  date: string;
  description: string;
  completed: boolean;
}

const App = () => {
  const tasks: Task[] = [
    { id: 1, text: "Tomate", date: "02/04/2026", description: "Rouge", completed: false },
    { id: 2, text: "Banana", date: "27/04/2026", description: "Jaune", completed: true },
    { id: 2, text: "Orange", date: "27/04/2026", description: "Orange", completed: true },
  ];

  return (
    <main className="React-Todo">
      <h1>TodoList React</h1>
      <section className='CSSBase' id='ErrorMSG'>
        <h3>Chamb requis manquant</h3>
        <p>Le ( Nom ) de la tâche est obligatoire.</p>
      </section>
      <section className='CSSBase padding'>
        <div>
          <h4>Nouvelle Tâche</h4>
          <p>Titre</p>
          <input className='CSSBase' type="text" placeholder='Titre de la Tâche . . .' />
        </div>
        <button className='CSSBase' style={{justifyItems: 'right'}}>+ Crée la Tâche</button>
      </section>

      <section className='CSSBase padding' id='displayTasks'>
        <h4>Liste des Tâches</h4>
        <TodoList tasks={tasks} />
      </section>
    </main>
  );
};

export default App;