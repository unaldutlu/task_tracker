import { useEffect, useState } from "react";

const initialFormValue = { task: "", date: "" };
function Form({ addForm, setAddForm, isClick }) {
  const [form, setForm] = useState(initialFormValue);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setAddForm(items);
    }
  }, []);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.task === "" || form.date === "") {
      return false;
    }

    setAddForm([...addForm, form]);
    localStorage.setItem("items", JSON.stringify([...addForm, form]));
    setForm(initialFormValue);
  };
  return (
    <>
      {!isClick ? (
        <form onSubmit={onSubmit}>
          <div className='flex flex-col mt-4 justify-center items-center'>
            <label htmlFor='task' className='text-center font-bold italic'>
              Task
            </label>
            <input
              id='task'
              className='w-4/6 p-1 rounded-xl border-none outline-none px-4'
              autoComplete='off'
              name='task'
              placeholder='Add Task'
              value={form.task}
              required
              onChange={onChangeInput}
            />
          </div>
          <div className='flex flex-col mt-4 justify-center items-center'>
            <label htmlFor='date' className='text-center font-bold italic'>
              Day&Time
            </label>
            <input
              id='date'
              className='w-4/6 p-1 rounded-xl border-none outline-none px-4'
              autoComplete='off'
              type={"datetime-local"}
              name='date'
              value={form.date}
              required
              onChange={onChangeInput}
            />
          </div>
          <div className='text-center mt-3'>
            <button className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 w-20'>
              Add
            </button>
          </div>
        </form>
      ) : (
        ""
      )}
    </>
  );
}

export default Form;
