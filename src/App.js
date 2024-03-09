import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'


import { IoIosArrowForward } from "react-icons/io";



import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Home from './pages/Home';

function App() {

  const [menu, setMenu] = useState(false)

  return (
   <BrowserRouter>
     <div className='main_bg'> 
        <div className="main_box py-4 w-[70%] my-0 mx-auto min-h-[100vh]">
          <div className="navbar mb-4">
            <Navbar />
          </div>
          <div className={menu ? "open active" : "open"} onClick={() => !menu ? setMenu(true) : setMenu(false)}><IoIosArrowForward /></div>
          <div className="pages_box flex">
              <div className={menu ? "sidebar_box w-[30%] transition-all active" : "sidebar_box w-[30%] transition-all"}>
              <Sidebar />
              </div>
              <div className="page_box w-[68.5%] ml-auto text-white bg-[--gray] min-h-[76.5vh] rounded-md p-6 pages_box">
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/skills' element={<Skills />}/>
                <Route path='/blog' element={<Blog />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/404' element={<PageNotFound />}/>
              </Routes>
              </div>
          </div>
          <div className="footer_box">
            <Footer />
          </div>
        </div>
    </div>
   </BrowserRouter>
  )
}

export default App
