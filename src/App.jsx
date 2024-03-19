
import { useState, useRef } from 'react';
import './App.css';
import Todolist from './components/Todolist';
import './index.css'


function App() {
  let todoVal = useRef();

  // this is an array object that I have created inside useState Hook so that it can be taken as initial values (dummy values for testing sake);

  const [listitems, setListItems] = useState([]);
  // if(listitems=="null"){
  //   console.log(true)
  // }else{
  //   console.log(false)
  // }
  // function to add ne todo
  function addNewTodo() {
    let newItem = { todo: todoVal.current.value.trim(), complete: false, id: Date.now() };
    console.log(newItem)
    if (newItem.todo !== "") {
      setListItems((prevItems) => [...prevItems, newItem]);
      todoVal.current.value = "";
    }
    else {
      alert("write something please before saving")
    }
  }

  // here we fire this function on every onChange triggers, everytime we check or uncheck the checkboxes, 
  // it marks it off as complete or incomplete and changes the value of "checked" in the input tag
  function handleChange(id) {
    setListItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, complete: !item.complete } : item))
    );
    console.log(listitems)
  }

  function deleteToDo(id) {
    let updatedList = listitems.filter((item) => item.id != id);
    console.log(updatedList)
    setListItems(updatedList);
  }

  function clearAll(){
    todoVal.current.value =null;
  }

  function clearMarked(){
   let pendingTodos = listitems.filter((item)=> { return !item.complete })
   setListItems(pendingTodos);
  }

  // console.log("its available : "+listitems[0].complete)
  return (
    <div className="container flex flex-col justify-center items-center">
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input ref={todoVal} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="whats your todo?" aria-label="your todo" />
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={addNewTodo}>
            Save
          </button>
          <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onClick={clearAll}>
            fresh
          </button>
        </div>
      </form>

      <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onClick={clearMarked}>
      Clear Marked
          </button>

      <div className="bg-[#ccfbf1] w-full sm:w-1/2 mt-2 p-4 text-cyan-950 font-normal rounded-lg">

        {/* here we are rendering each new items in the todo list using map to map over the array of todo objs */}
        
        {listitems.length > 0 ? (
          <ol>
            {listitems.map((item) => (
              <Todolist
                key={item.id}
                item={item}
                handleChange={() => handleChange(item.id)} handleClick={() => deleteToDo(item.id)} // Pass item.id for targeted update
              />
            ))}
          </ol>) : (<p className=" text-teal-700 font-medium">Wow so empty ! no todos added yet !</p>)}
      </div>
    </div>
  );
}

export default App;