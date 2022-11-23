import { useState } from "react";

function List({ task, date, i, addForm, setAddForm }) {
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = () => {
    setIsComplete(!isComplete);
  };

  const deleteHandler = (index) => {
    addForm.splice(index, 1);
    setAddForm([...addForm]);
    localStorage.setItem("items", JSON.stringify(addForm));
  };

  return (
    <div
      className='flex justify-between m-2 border-2 border-orange-700 py-2 px-5 rounded-lg bg-amber-300 bg-opacity-[.5]'
      onClick={handleComplete}
    >
      <div style={{ textDecoration: isComplete ? "line-through" : "" }}>
        <div className='text-black font-bold text-xl w-[26rem] break-words'>
          {task}
        </div>
        <div className='text-black text-lg'>{date}</div>
      </div>
      <div className='flex items-center'>
        <button onClick={() => deleteHandler(i)}>
          <span className='material-symbols-outlined font-bold text-white hover:scale-125'>
            close
          </span>
        </button>
      </div>
    </div>
  );
}

export default List;
