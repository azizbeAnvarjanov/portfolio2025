import React, { useState } from 'react'


import img from '../imgs/user.jpg'

import { FaUserCircle } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { FaVoicemail } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";





function Sidebar() {


  return (
    <div className='p-6 bg-[--gray] rounded-[10px] sidebar'>
        <div className="img-box overflow-hidden rounded-[10px] h-[35vh]">
            <img className='object-cover min-w-[100%] min-h-[100%]' src={img} alt="" />
        </div>
        <div className="infos py-5">
            <div className='flex items-center text-white mb-3'>
                <div className="icons w-[30px] h-[30px] rounded-md bg-[--blue] mr-2 grid place-items-center"><FaUserCircle className='size-5' /></div>
                Azizbek Anvarjanov
            </div>
            <div className='flex items-center text-white mb-3'>
                <div className="icons min-w-[30px] min-h-[30px] rounded-md bg-[--blue] mr-2 grid place-items-center"><IoCalendarNumber className='size-5'/></div>
                01 June 2002
            </div>
            <div className='flex items-center text-white mb-3'>
                <div className="icons min-w-[30px] min-h-[30px] rounded-md bg-[--blue] mr-2 grid place-items-center"><FaMapLocationDot className='size-5' /></div>
                Uzbekistan, Namangan
            </div>
            <div className='flex items-center text-white mb-3'>
                <div className="icons min-w-[30px] min-h-[30px] rounded-md bg-[--blue] mr-2 grid place-items-center"><FaPhoneAlt className='size-4' /></div>
                +998 (88) 254 77 75
            </div>
            <div className='flex items-center text-white mb-3'>
                <div className="icons min-w-[30px] min-h-[30px] rounded-md bg-[--blue] mr-2 grid place-items-center"><FaVoicemail className='size-5' /></div>
                azizbeanvarjanov@gmail.com
            </div>
            <div className='flex items-center text-white mb-3'>
                <div className="icons min-w-[30px] min-h-[30px] rounded-md bg-[--blue] mr-2 grid place-items-center"><BsInstagram className='size-5' /></div>
                @azizbek.anvarjanov
            </div>
        </div>
        <a href="#" className='bg-[--blue] flex items-center justify-center font-semibold text-white rounded-[50px] py-[8px] px-3 text-center hover:cursor-pointer hover:opacity-[0.5] transition-all'>Download CV</a>
    </div>
  )
}

export default Sidebar