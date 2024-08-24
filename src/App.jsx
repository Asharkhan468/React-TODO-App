import { useState } from "react"
import { useRef } from "react"


function App (){

  let todoValue = useRef()

  let [todo , setTodo] = useState([])


  const AddTodo = (event)=>{
    event.preventDefault()

    if(todoValue.current.value==""){
      alert('Please Enter some todo')
    }else{

      
      todo.push(todoValue.current.value)
      
      todoValue.current.value=""
      
      setTodo([...todo])
    }
    
    
    
  }


  const deleteTodo = (index)=>{
    console.log("delete btn clicked");
  todo.splice(index , 1)

  setTodo([...todo])
    
  }

  const editTodo = (index)=>{
    console.log("edit btn clicked");
    let editedValue = prompt('Enter updated Value');

    if(editedValue==""){
      alert('Please enter edited value')
    }else{
       todo.splice(index , 1 , editedValue)

    setTodo([...todo])

    }

   
    
  }
  
  
  
  return(
    <>
   <h1 className="text-center text-3xl font-bold mt-6">React Todo App</h1>
   <form onSubmit={AddTodo}>

    <div className="text-center mt-9">
      <input type="text" placeholder="Enter todo" className="input input-bordered w-full max-w-xs" ref={todoValue} /><br />
   <button className="btn btn-primary mt-3 text-[white]">Add Todo</button>
    </div><hr className="mt-6" />

   </form>

   <ul className="mt-5">
     
   {todo.map((item , index)=>{
    return(
      <div className="text-center">


         <li className="mt-5 text-2xl">{item}
           <i className="fa-solid fa-pen-to-square pr-5 pl-8 text-[green]" onClick={()=>{editTodo(index)}}></i>
      <i className="fa-solid fa-trash text-[red] pr-5" onClick={()=>{deleteTodo(index)}}></i>

         </li><hr />
      
     
        
      </div>
     
    )
   })}
   </ul>
   
   </>
  )
}

export default App