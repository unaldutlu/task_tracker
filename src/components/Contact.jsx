import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-around items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a
            className='flex justify-around items-center w-full text-gray-300'
            href='https://www.linkedin.com/in/unaldutlu/'
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-around items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
          <a
            className='flex justify-around items-center w-full text-gray-300'
            href='https://github.com/unaldutlu'
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-around items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
          <a
            className='flex justify-around items-center w-full text-gray-300'
            href='https://mail.google.com/mail/u/0/?hl=tr&tf=cm&fs=1&to=unaldutlu@gmail.com'
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-around items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
          <a
            className='flex justify-around items-center w-full text-gray-300'
            href='#'
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
