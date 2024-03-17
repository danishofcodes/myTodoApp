
import { useState, useRef } from 'react';
import './App.css';
import Todolist from './components/Todolist';

function App() {
  let todoVal = useRef();

  // this is an array object that I have created inside useState Hook so that it can be taken as initial values (dummy values for testing sake);

  const [listitems, setListItems] = useState([
    { todo: 'itenary this todo', complete: false, id: 3424213 },
    { todo: 'itenary that', complete: false, id: 3424214 },
  ]);

  // function to add ne todo
  function addNewTodo() {
    let newItem = { todo: todoVal.current.value.trim(), complete: false, id: Date.now() };
    console.log(newItem)
    if (newItem.todo!== ""){
    setListItems((prevItems) => [...prevItems, newItem]);
  }
  else{
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

  function deleteToDo(id){
     let updatedList = listitems.filter((item)=> item.id!=id);
     console.log(updatedList)
     setListItems(updatedList);
  }

  return (
    <>
      <input type="text" placeholder="note your todo" ref={todoVal} />
      <button className="save" onClick={addNewTodo}>
        Save
      </button>

      <div className="todolist">
        {/* here we are rendering each new items in the todo list using map to map over the array of todo objs */}
        <ol>
          {listitems.map((item) => (
            <Todolist
              key={item.id}
              item={item}
              handleChange={() => handleChange(item.id)} handleClick={()=>deleteToDo(item.id)} // Pass item.id for targeted update
            />
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;