import React from 'react'

function Home() {
  return (
      <div className="w-full h-screen relative z-20 bg-[#F7F7F7]" id='home'>
          <div className="absolute top-0 left-0 border-0 p-4 w-full h-auto px-5 flex justify-between text-white">
              <div className="flex justify-center items-center gap-10">
                  <div className='w-20 h-20 rounded-full overflow-hidden'>
                      <img className="h-20 w-20 lg:w-auto origin-center rounded-full border-2 lg:rotate-45 shadow-lg shadow-gray-500 drop-shadow-lg" src="./logo.jpg" alt="" />
                  </div>
                  <h1 className="text-xl">Shiv Shankar Kushwaha</h1>
              </div>
              <div className="hidden lg:flex justify-center items-center text-xl gap-10 group-hover:cursor-pointer" id="header-menu">
                  <a href='#home'>Home</a>
                  <a href='#about'>About</a>
                  <a href='#projects'>Projects</a>
                  <a href='#experience'>Experience</a>
                  <a href='#contact'>Contact</a>
                  <a href='https://drive.google.com/file/d/1jgpX7Eqt5wdnH9LJPSddEIwh2FEcoNav/view?usp=sharing' target='_blank' className='text-[#e31b6d]'>My Resume</a>
              </div>
          </div>
          <img className='w-full h-full opacity- absolute -z-10' src="./home.gif" alt="" />
          <div className='z-10 text-white w-full h-full flex flex-col justify-center items-center gap-1'>
              <h1 className="lg:text-4xl">Hello , I'm <span className="text-[#e31b6d]">Shiv Shankar Kushwaha</span></h1>
              <h1 className="lg:text-4xl">I'm Full Stack Web Developer</h1>
              <a href='#projects' className="p-2 lg:text-xl text-sm border-2 border-white my-2 flex gap-2 justify-center items-center hover:bg-sky-500 hover:border-transparent viewwork group active:scale-95">
                  <p>View my work</p>
                  <img className='group-hover:rotate-90 duration-200' src="./arrow.png" alt="" />
              </a>
          </div>
      </div>
  )
}

export default Home;