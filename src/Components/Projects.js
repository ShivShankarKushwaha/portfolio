import React from 'react'

function Projects()
{
    return (
        <div className='bg-[#F7F7F7] w-full min-h-screen flex flex-col justify-start items-center gap-10 py-5' id='projects'>
            <div className='flex flex-col justify-center items-center w-[80%] border-0 mt-5'>
                <h1 className='text-center font-bold lg:text-3xl text-xl border-b-4 border-spacing-x-5 border-[#e31b6d]'>PROJECTS</h1>
                <p className='text-center font-serif lg:text-xl lg:w-3/4 font-medium text-neutral-600 my-10'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            </div>
            <div className='roboto flex flex-col justify-center items-center gap-20'>
                <div className='w-5/6 mx-auto flex lg:flex-row flex-col-reverse justify-between items-start lg:gap-20 gap-5'>
                    <div className='lg:w-1/2 border-0 lg:h-80 overflow-hidden flex justify-end items-center'>
                        <img className='w-full h-full' src="./healthtracker.png" alt="" />
                    </div>
                    <div className='lg:w-2/3 flex justify-center lg:items-start items-center flex-col gap-5'>
                        <h1 className='lg:text-3xl text-xl font-bold'>Health Tracker</h1>
                        <p className='lg:text-base text-sm text-justify'>HealthTrack is a comprehensive web-based health monitoring platform developed to streamline personal wellness management. This application provides a user-friendly interface for logging daily activities, organizing medical appointments, tracking medication schedules, and maintaining a symptom journal. Users benefit from a robust security system with multi-factor authentication for their privacy. In addition, HealthTrack introduces a 'Health Insights Dashboard' to visualize long-term trends and a 'Community Support Forum' for sharing experiences and insights with like-minded individuals, all dedicated to fostering a healthier and happier life.</p>
                        {/* <h1 className='font-bold text-lg'>Skills Used</h1> */}
                        <div className='flex gap-3'>
                            <a href='https://github.com/ShivShankarKushwaha/Health-tracker' target='_blank' className='roboto bg-[#000000] p-2 rounded text-white hover:scale-105 active:scale-95 transition-all duration-300 text-sm lg:text-base'>GITHUB</a>
                            <a href='https://healthtracker-jwpl.onrender.com/' target='_blank' className='roboto bg-[#4ae31b] p-2 rounded text-white hover:scale-105 active:scale-95 transition-all duration-300 text-sm lg:text-base'>DEPLOYED</a>
                        </div>

                    </div>
                </div>
                <div className='w-5/6 mx-auto flex lg:flex-row-reverse flex-col-reverse justify-between items-start lg:gap-20 gap-5'>
                    <div className='lg:w-1/2 border-0 lg:h-80 overflow-hidden flex justify-end items-center'>
                        <img className='w-full h-full' src="./collegeleave.png" alt="" />
                    </div>
                    <div className='lg:w-2/3 w-full flex justify-start lg:items-start items-center flex-col gap-5'>
                        <h1 className='lg:text-3xl font-bold text-xl'>College Leave Management</h1>
                        <p className=' lg:text-base text-sm text-justify'>Welcome to IIITU CollegeLeave, your dedicated platform for streamlined and efficient college leave management. Our system is tailored to make requesting and managing leaves a breeze for both students and faculty members. CollegeLeave ensures a straightforward approval process, keeps you informed with automated email notifications, and seamlessly integrates with your academic calendar. We're here to simplify leave management and enhance the academic experience within the CollegeLeave community.</p>
                        <div className='flex gap-3'>
                            <a href='https://github.com/ShivShankarKushwaha/CollegeLeave' target='_blank' className='roboto bg-[#000000] p-2 rounded text-white hover:scale-105 active:scale-95 transition-all duration-300 text-sm lg:text-base'>GITHUB</a>
                            <a href='https://collegeleave.onrender.com' target='_blank' className='roboto bg-[#4ae31b] p-2 rounded text-white hover:scale-105 active:scale-95 transition-all duration-300 text-sm lg:text-base'>DEPLOYED</a>
                        </div>
                    </div>
                </div>
                <div className='w-5/6 mx-auto flex flex-col-reverse lg:flex-row justify-between lg:items-start items-center gap-5 lg:gap-20'>
                    <div className='lg:w-1/2 border-0 lg:h-80 overflow-hidden flex justify-end items-center'>
                        <img className='w-full h-full' src="./library.png" alt="" />
                    </div>
                    <div className='lg:w-2/3 flex justify-start lg:items-start items-center flex-col gap-5'>
                        <h1 className='lg:text-3xl font-bold'>College Library Management</h1>
                        <p className='text-sm lg:text-base text-justify'>Welcome to IIITU LIBRARY, your one-stop solution for efficient and hassle-free college library management. IIITU LIBRARY offers a user-friendly interface that enables students to easily allot books, check the status of their borrowed items, and calculate fines. We also provide an integrated reminder system that sends timely notifications to return books, ensuring that you never miss a due date. To safeguard your account, we use secure OTP verification. CollegeLibraryManager is your trusted companion for a seamless library experience tailored to the unique needs of your college community.</p>
                        {/* <a className='roboto bg-[#e31b6d] p-2 rounded text-white hover:scale-105 active:scale-95 transition-all duration-300'>CASE STUDY</a> */}
                        <div className='flex gap-3'>
                            <a href='https://github.com/ShivShankarKushwaha/library_with_express_session' target='_blank' className='roboto bg-[#000000] p-2 rounded text-white hover:scale-105 active:scale-95 transition-all duration-300 text-sm lg:text-base'>GITHUB</a>
                            <a href='https://iiitlibrary.onrender.com' target='_blank' className='roboto bg-[#4ae31b] p-2 rounded text-white hover:scale-105 active:scale-95 transition-all duration-300 text-sm lg:text-base'>DEPLOYED</a>
                        </div>
                    </div>
                </div>
                <div className='w-5/6 mx-auto flex lg:flex-row-reverse flex-col-reverse justify-between items-center lg:items-start lg:gap-20 gap-5'>
                    <div className='lg:w-1/2 border-0 lg:h-80 overflow-hidden flex justify-end items-center'>
                        <img className='w-full h-full' src="./cropconnect.png" alt="" />
                    </div>
                    <div className='lg:w-2/3 flex justify-start lg:items-start items-center flex-col gap-5'>
                        <h1 className='lg:text-3xl font-bold text-xl'>Crop Connect</h1>
                        <p className='text-sm lg:text-base text-justify'>CropConnect, born out of a collaborative effort during the GFG Hackathon, is a web platform designed to empower farmers with valuable insights and information to optimize their agricultural practices. Our website provides farmers with up-to-date data on crucial factors like monsoon predictions, information on prevalent plant diseases, and guidance on the best market prices for their produce.With CropConnect, farmers can make informed decisions about  how to protect them from diseases, and where to sell their harvest for the best returns. We understand that the success of our agricultural sector is vital for our nation, and that's why we are committed to supporting our farmers by bridging the gap between information and action.</p>
                        {/* <a className='roboto bg-[#e31b6d] p-2 rounded text-white hover:scale-105 active:scale-95 transition-all duration-300'>CASE STUDY</a> */}
                        <div className='flex gap-3'>
                            <a href='https://github.com/ShivShankarKushwaha/cropconnect' target='_blank' className='roboto bg-[#000000] p-2 rounded text-white hover:scale-105 active:scale-95 transition-all duration-300 text-sm lg:text-base'>GITHUB</a>
                            <a href='https://cropconnect-8er2.onrender.com' target='_blank' className='roboto bg-[#4ae31b] p-2 rounded text-white hover:scale-105 active:scale-95 transition-all duration-300 text-sm lg:text-base'>DEPLOYED</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;