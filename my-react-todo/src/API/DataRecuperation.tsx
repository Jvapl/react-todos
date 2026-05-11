export type Task = {
  title: string;
  due_date?: string;
  content?: string;
}

export type TaskRead = Task & {
  id: number
}
  
  // API
  const url = "https://api.todos.in.jt-lab.ch/todos"

  // 
export const CallAPI = async () => {
  // Request
    const response = await fetch(url, { cache: 'no-store'}) // Ignore cache from the browser.
    if (!response.ok)throw Error("Data wasn't found")
    const data: TaskRead[] = await response.json()
    return data
}

export const PostAPI = async (newTask: Task) => {
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

export const RemoveApi = async (id: number) => {
  const response = await fetch(`${url}?id=eq.${id}`,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      }
    })
    if(!response.ok){
      throw new Error("Couldn't delete the task")
    }
}