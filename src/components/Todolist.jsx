export default function Todolist({ item, handleChange, handleClick }) {
  return (
    // striking off the checked items conditionally
    <li id={item.id} >
      <div className="flex justify-between my-2" >
        <div className="checkboxes flex">
          <label htmlFor={item.id} className="text-left" style={{ textDecoration: item.complete ? 'line-through' : 'none' }}> 
          <input className="accent-emerald-300/25" type="checkbox" onChange={handleChange} checked={item.complete} />
          <span className="ms-1 text-teal-900">{item.todo}</span></label>
        </div>
        {/* <button className="removeBtn bg-teal-500  text-sm px-2 rounded-[20px] hover:bg-[#ef4444] text-[#fff]" onClick={handleClick} type="button">Remove</button> */}
      </div>
    </li>
  );
}