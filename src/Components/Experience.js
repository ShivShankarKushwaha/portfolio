import React from 'react'

function Experience() {
  return (
    <div className='bg-[#F7F7F7] w-full min-h-[70vh] flex flex-col lg:justify-start justify-center items-center p-10 gap-10' id='experience'>
      <h1 className='text-center font-bold text-xl lg:text-3xl border-b-4 border-spacing-x-5 border-[#e31b6d]'>EXPERIENCE</h1>
      <div className='lg:w-1/2 border-l-2 border-green-600 flex flex-col lg:flex-row justify-between lg:gap-20 items-center px-2'>
        <div className='relative w-full'>
          <p className='absolute w-full h-[2px] -left-2 bottom-0 bg-green-500'></p>
          <button className='uppercase hover:text-gray-500 text-sm lg:text-base'>Suvidha Foundation</button>
        </div>
        <div style={{letterSpacing:'1px'}} className='flex flex-col justify-center items-start gap-2 p-2 robotolite text-sm font-normal'>
          <h1 className='font-bold '>Oct 2023- Present</h1>
          <p className='text-justify'>Suvidha Foundation is a nagpur, Maharastra based organization dedicated to  focus on education, healthcare, women's empowerment, and sustainable community development.</p>
          <p>
            I am workin here as frontend developer Intern.
          </p>
          <p>The skills used are</p>
          <ul>
            <li className='experienceskills'>Reactjs</li>
            <li className='experienceskills'>TailwindCss</li>
            <li className='experienceskills'>Redux</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience;