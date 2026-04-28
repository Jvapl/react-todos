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

  const tasks = [
    { id: 1, text: "Tomate", date: "02/04/2026", description: "Rouge", completed: false },
    { id: 2, text: "Banana", date: "27/04/2026", description: "Jaune", completed: true },
    { id: 2, text: "Orange", date: "27/04/2026", description: "Orange", completed: true },
  ];

  return (
    <main className="React-Todo">
      <h1>TodoList React</h1>
      
      <section className='CSSBase'>
        <h4>Nouvelle Tâche</h4>
        <input type="text" placeholder='Titre de la Tâche . . .' />
        <button>+ Crée la Tâche</button>
      </section>
      <TodoList tasks={tasks} />
    </main>
  );
};

export default App;