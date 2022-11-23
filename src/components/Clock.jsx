import React from "react";

function Clock() {
  return (
    <div className='hidden lg:flex fixed flex-col top-[40%] right-28 group cursor-pointer'>
      <div className='relative flex items-center justify-end w-32 h-32 overflow-hidden bg-gray-900 rounded-full '>
        <div className='absolute w-1/2 h-1 bg-gradient-to-t from-white to-red-400 rounded-full origin-left -rotate-[70deg] group-hover:rotate-[300deg] duration-1000 ease-in-out' />

        <div className='absolute w-1/2 h-1  origin-left rotate-180 group-hover:rotate-[180deg] duration-1000 ease-in-out'>
          <div className='w-2/3 h-full bg-gradient-to-t from-white to-blue-400 rounded-full' />
        </div>

        <div className='absolute flex justify-center flex-1 w-full'>
          <div className='w-1 h-1 bg-white rounded-full' />
        </div>
      </div>
    </div>
  );
}

export default Clock;
