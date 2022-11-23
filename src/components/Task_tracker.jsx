import { useState } from "react";
import Button from "./Button";
import Clock from "./Clock";
import Contact from "./Contact";
import Form from "./Form";
import Header from "./Header";
import List from "./List";

function Task_tracker() {
  const [addForm, setAddForm] = useState([]);
  const [isClick, setIsClick] = useState(true);

  const handleClick = (e) => {
    setIsClick(!isClick);
  };

  return (
    <div className='w-[92%] sm:w-[72%] lg:w-[36%] h-[33rem] m-5 bg-slate-600 rounded-xl bg-opacity-[.4]'>
      <Header />
      <Button handleClick={handleClick} isClick={isClick} />
      <Form addForm={addForm} setAddForm={setAddForm} isClick={isClick} />
      <div>
        {addForm.length ? (
          <div
            className='over mt-5 m-2 overflow-auto  rounded-lg'
            style={{
              height: isClick ? "25rem" : "13rem",
            }}
          >
            {addForm.map((item, i) => {
              const { task, date } = item;
              return (
                <List
                  key={i}
                  task={task}
                  date={date}
                  i={i}
                  addForm={addForm}
                  setAddForm={setAddForm}
                />
              );
            })}
          </div>
        ) : (
          <div className=' text-center text-yellow-400 m-20 shadow-xl'>
            <p className='font-bold text-2xl italic'>No Task to Show</p>
          </div>
        )}
      </div>

      <Contact />
      <Clock />
    </div>
  );
}

export default Task_tracker;
