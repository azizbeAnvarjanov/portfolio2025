import React from 'react'

function Footer() {
  return (
    <div className='text-white p-6 mt-4 bg-[--gray] rounded-md flex justify-between footer'>
        <h1>Azizbek Anvarjanov</h1>
        <div>
            <a href="#" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Portfolio</a>
            <a href="#" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Skills</a>
            <a href="#" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Resume</a>
            <a href="#" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Blog</a>
            <a href="#" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Contact</a>
        </div>    
    </div>
  )
}

export default Footer