export interface Task {
  id: number;
  title: string;
  due_date: string;
  content: string;
  done: boolean;
}

  // Data 
export const tasks: Task[] = []
  
  // API
  const url = "https://api.todos.in.jt-lab.ch/todos"

export const CallAPI = async () => {
  // Request
    const response = await fetch(url)
    if (!response.ok)throw Error("Data wasn't found")
    const data: Task[] = await response.json()
    return data
}
