import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='text-white p-6 mt-4 bg-[--gray] rounded-md flex justify-between footer'>
        <h1>Azizbek Anvarjanov</h1>
        <div>
            <Link to="/work" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Work experience</Link>
            <Link to="/projects" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Projects</Link>
            <Link to="/blog" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Blog</Link>
            <Link to="/contact" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Contact</Link>
        </div>    
    </div>
  )
}

export default Footer