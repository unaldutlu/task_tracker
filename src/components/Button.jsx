import React from "react";

function Button({ handleClick, isClick }) {
  return (
    <div className='text-center'>
      <button
        type='button'
        className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 w-96'
        onClick={handleClick}
      >
        {isClick ? <p>Show Add Task Bar</p> : <p>Close Add Task Bar</p>}
      </button>
    </div>
  );
}

export default Button;
