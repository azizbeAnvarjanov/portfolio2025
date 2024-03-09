import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { FaTelegram } from "react-icons/fa6";
import { HiHome } from "react-icons/hi2";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";


function Navbar() {
  const [menu, setMenu] = useState(false);

  function openMenu() {
    !menu ? setMenu(true) : setMenu(false)
  }

  return (
    <nav className='text-white bg-[--gray] flex items-center px-1 py-3 rounded-[10px] backdrop-blur-lg navsticky'>
            <Link onClick={() => setMenu(false)} to="/" className='px-0 py-0 rounded-md mx-2 home_link bg-[--blue] hover:opacity-[0.5] transition-all mobile'><HiHome /></Link>
        <div className={menu ? "flex items-center ul active transition-all" : "flex items-center ul transition-all"}>
            <Link onClick={() => setMenu(false)} to="/" className='px-0 py-0 rounded-md mx-2 home_link bg-[--blue] hover:opacity-[0.5] transition-all'><HiHome /></Link>
            <Link onClick={() => openMenu()} to="/work" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Work experience</Link>
            <Link onClick={() => openMenu()} to="/projects" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Projects</Link>
            <Link onClick={() => openMenu()} to="/blog" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Blog</Link>
            <Link onClick={() => openMenu()} to="/contact" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Contact</Link>
        </div>
        <a  href='#' className='flex items-center ml-auto mr-3 bg-[--blue] p-2 rounded-[50px] hover:opacity-[0.5] transition-all telegram_link'>
            <FaTelegram className='size-6'/>
        </a>
        <div onClick={() => openMenu()} className="menu flex items-center ml-auto mr-3 p-2 rounded-[50px] hover:opacity-[0.5] transition-all">
          <SlMenu className='size-6'/>
        </div>
    </nav>
  )
}

export default Navbar