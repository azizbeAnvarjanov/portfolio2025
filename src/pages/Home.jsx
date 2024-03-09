import React from 'react'




function Home() {
  return (
    <div className='home_page'>
      <div className='about_me'>
        <h1 className='text-3xl font-medium mb-4'>About me</h1>
        <p className='font-light mt-4 pr-10 text-gray-400'>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
        <p className='font-light mt-4 pr-10 text-gray-400'>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
        <p className='font-light mt-4 pr-10 text-gray-400'>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
      </div>

      <h1 className='mt-8 mb-3 text-3xl font-medium mb-4'>Skills</h1>
      <div className="skills grid grid-cols-2 gap-3">
        <div className='bg-[--gray] min-h-[25vh] py-3 px-4 rounded-md'>
          <h1 className='mb-2'>Front-end</h1>
          <li className='font-light text-[0.8em] text-gray-400'>HTML</li>
          <li className='font-light text-[0.8em] text-gray-400'>CSS</li>
          <li className='font-light text-[0.8em] text-gray-400'>Sass</li>
          <li className='font-light text-[0.8em] text-gray-400'>JS</li>
        </div>
        <div className='bg-[--gray] min-h-[25vh] py-3 px-4 rounded-md'>
          <h1 className='mb-2'>Frameworks</h1>
          <li className='font-light text-[0.8em] text-gray-400'>React Js</li>
          <li className='font-light text-[0.8em] text-gray-400'>Angular</li>
          <li className='font-light text-[0.8em] text-gray-400'>Vue JS</li>
          <li className='font-light text-[0.8em] text-gray-400'>Svetle</li>
          <li className='font-light text-[0.8em] text-gray-400'>Wordpress</li>
        </div>
        <div className='bg-[--gray] min-h-[25vh] py-3 px-4 rounded-md'>
          <h1 className='mb-2'>CRM systems & Bussines Automation</h1>
          <li className='font-light text-[0.8em] text-gray-400'>AmoCRM</li>
          <li className='font-light text-[0.8em] text-gray-400'>Bitrix24</li>
          <li className='font-light text-[0.8em] text-gray-400'>Asana</li>
          <li className='font-light text-[0.8em] text-gray-400'>Click Up</li>
        </div>
        <div className='bg-[--gray] min-h-[25vh] py-3 px-4 rounded-md'>
          <h1 className='mb-2'>Design</h1>
          <li className='font-light text-[0.8em] text-gray-400'>Figma</li>
          <li className='font-light text-[0.8em] text-gray-400'>Canva</li>
          <li className='font-light text-[0.8em] text-gray-400'>Adobe Illustrator</li>
          <li className='font-light text-[0.8em] text-gray-400'>Adobe Photoshop</li>
          <li className='font-light text-[0.8em] text-gray-400'>Framer motion</li>
        </div>
      </div>
    </div>
  )
}

export default Home