export interface Task {
  id: number;
  title: string;
  due_date: string;
  content: string;
  done: boolean;
}

  // Data 
export const tasks: Task[] = [
    { id: 1, title: "Tomate", due_date: "02/04/2026", content: "Rouge", done: false },
    { id: 2, title: "Banana", due_date: "27/04/2026", content: "Jaune", done: true },
    { id: 3, title: "Orange", due_date: "27/04/2026", content: "Orange", done: true },
  ];
  
  // API
  const url = "https://api.todos.in.jt-lab.ch/todos"

export const CallAPI = async () => {
  // Request
    const response = await fetch(url)
    if (!response.ok)throw Error("Data wasn't found")
    const data: Task[] = await response.json()
    return data
}
  