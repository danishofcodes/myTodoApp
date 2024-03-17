export default function Todolist({ item, handleChange, handleClick }) {
  return (
    // striking off the checked items conditionally
    <li id={item.id} >
      <div className="todo-container" >
        <div className="todo" style={{ textDecoration: item.complete ? 'line-through' : 'none' }}>
          <input type="checkbox" onChange={handleChange} checked={item.complete} />
          <label htmlFor={item.id}>{item.todo}</label>
        </div>
        <button className="delete-todo" onClick={handleClick} type="button">remove</button>
      </div>
    </li>
  );
}