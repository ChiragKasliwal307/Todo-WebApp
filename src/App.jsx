import { useEffect, useState } from 'react'
import { TodoProvider } from './Context/TodoContext'
import TodoForm from './Components/TodoForm'
import TodoItems from './Components/TodoItems'



function App() {
  const [todos, setTodo] = useState([])
  const [activeTodo, setActiveTodo] = useState(null)

  const addTodo = (todo)=>setTodo((prev)=>[{id: Date.now(), ...todo}, ...prev])
  const updateTodo = (id, todo)=>setTodo((prev)=>prev.map((each)=>(each.id === id ? todo : each)))
  const deleteTodo = (id)=>setTodo((prev)=>prev.filter((each) =>(each.id !== id)))
  const toggleComplete = (id)=>setTodo((prev)=>prev.map((each)=>(each.id === id ? {...each, completed: !each.completed} : each)))

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length >0){
      setTodo(todos)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}} >
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos - {activeTodo}</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItems todo={todo} setActiveTodo={setActiveTodo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
