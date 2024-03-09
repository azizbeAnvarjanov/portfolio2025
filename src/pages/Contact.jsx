import React from 'react'


import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaVoicemail } from "react-icons/fa6";


function Contact() {
  return (
    <>
      <div className="contactform">
          <h1 className='text-3xl font-bold'>Aloqa</h1>
          <form className='mt-5'>
            <div className='flex '>
              <input className='w-[50%] bg-transparent border-b-2 p-3 mx-1 outline-none' type="text" placeholder='Ismibigz' />
              <input className='w-[50%] bg-transparent border-b-2 p-3 mx-1 outline-none' type="text" placeholder='Familiyangiz' />
            </div>
              <input className='w-[100%] bg-transparent border-b-2 p-3 mt-4 mx-1 outline-none' type="text" placeholder='Mavzu' />
              <textarea className='w-[100%] mt-5 bg-transparent border-b-2 outline-none p-3' cols="20" rows="8" placeholder='Habaringizni yozing...'></textarea>
              <button className='bg-[--blue] flex w-[100%] p-2 rounded-md justify-center mt-2'>Jo'natish</button>
          </form>

          <div className="contact_box mt-5">
            <div className='grid grid-cols-3 box'>
              <div className='flex items-center'>
                  <div className='w-[40px] h-[40px] bg-[--blue] my-5 grid place-items-center rounded-md mr-2'><FaPhoneAlt className='size-[1.5em]' /></div>
                  <a href='#'>+998 (88) 254 777 5</a>
              </div>
              <div className='flex items-center'>
                  <div className='w-[40px] h-[40px] bg-[--blue] my-5 grid place-items-center rounded-md mr-2'><FaInstagram className='size-[1.5em]' /></div>
                  <a href='#'>@azizbek.anvarjanov</a>
              </div>
              <div className='flex items-center'>
                  <div className='w-[40px] h-[40px] bg-[--blue] my-5 grid place-items-center rounded-md mr-2'><FaTelegram className='size-[1.5em]' /></div>
                  <a href='#'>@a_anvarjanov</a>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Contact