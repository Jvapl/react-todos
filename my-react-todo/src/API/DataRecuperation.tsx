export type Task = {
  title: string;
  due_date?: string;
  content?: string;
  is_done:boolean
}

export type TaskRead = Task & {
  id: number
}
  
  // API
  const url = "https://api.todos.in.jt-lab.ch/todos"

  // 
export const fetchTodosAPI = async () => {
  // Request
    const response = await fetch(url, { cache: 'no-store'}) // Ignore caches from the browser.
    if (!response.ok)throw Error("Data wasn't found")
    const data: TaskRead[] = await response.json()
    return data
}

export const createTodosAPI = async (newTask: Task) => {
  // 
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask)
  })
    if (!response.ok)throw new Error("Error detected when creating task")
}

export const deleteTodosAPI = async (id: number) => {
  const dynamicURL = `${url}?id=eq.${id}` as const
  const response = await fetch(dynamicURL,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      }
    })
    if(!response.ok){
      throw new Error("Couldn't delete the task")
    }
}

export const updateTodosAPI = async (id: number, updatedTask: Partial<TaskRead>) => {
  const dynamicURL = `${url}?id=eq.${id}` as const
  const response = await fetch(dynamicURL,{
    method: 'PATCH',
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedTask)
  })
  if(!response.ok){
    throw new Error('Error when updating task')
  }
}