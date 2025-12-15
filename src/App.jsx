import { useState, useEffect } from 'react'
import Navbar from './Component/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
    let todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
    }
  }, [])

  let saveLS = ()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  let toggleBox = ()=> {
    setShowFinished(!showFinished)
  }

  let handleAdd = () => {
    setTodos([...todos,{id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
    saveLS()
  }

  let handleEdit = (id) => {
    let t = todos.filter(item=>{
      return item.id === id
    })
    setTodo(t[0].todo)
    let newTodo = todos.filter(item => {
      return item.id!=id;
    })
    setTodos(newTodo)
    saveLS()
  }
  
  let handleDelete = (id) => {
    let newTodo = todos.filter(item => {
      return item.id!=id;
    })
    setTodos(newTodo)
    saveLS()
  }

  let handleChange = (e) => {
    setTodo(e.target.value)
  }

  let handleUpdate = (e) => {
    let id = (e.target.id);
    let index = todos.findIndex(item=>{
      return item.id==id;
    })
    let newTodo = [...todos];
    newTodo[index].isCompleted = !newTodo[index].isCompleted;
    setTodos(newTodo)
    saveLS() 
  }

  return (
    <>
      <Navbar/>
      <div className="m-auto my-6 bg-emerald-100 transition md:max-w-[35%] min-h-[40rem] rounded-md px-6 py-3">
        <div className='addTodo m-3'>
          <h1 className="text-2xl font-medium text-gray-800 my-3">Add a Todo</h1>
          <div className="flex">
          <input onChange={handleChange} value={todo} type="text" className='rounded-full w-full px-3 py-1'/>
          <button onClick={handleAdd} disabled={todo.length<3} className='rounded-full bg-emerald-400 px-2 mx-2 font-bold hover:bg-emerald-200'>Save</button>
          </div>
        </div>
        <input onChange={toggleBox} type="checkbox" className="mx-3" checked={showFinished} /> Show Finished
        <div className="h-[1px] bg-black opacity- w-[85%] opacity-5 mx-auto my-2"></div>
        <h2 className='flex text-lg font-bold m-3'>Your Todos</h2>
        <div className="todos">
          {todos.length===0 && <div className='mx-3 '>No Todos to display</div>}
          {todos.map(item=>{
          return (showFinished || !item.isCompleted) && <div className="flex justify-between md:w-full m-2 todo" key={item.id}>
            <div className="flex gap-2 py-1">
            <input onClick={handleUpdate} type="checkbox" checked={item.isCompleted} id={item.id} />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
            <div className="flex button h-full">
              <button onClick={()=>{handleEdit(item.id)}} className='rounded-md bg-emerald-400 p-2 py-1 mx-2 font-bold hover:bg-emerald-200'>Edit</button>
              <button onClick={()=>{handleDelete(item.id)}} className='rounded-md bg-emerald-400 p-2 py-1 font-bold hover:bg-emerald-200'>Delete</button>
            </div>
          </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
