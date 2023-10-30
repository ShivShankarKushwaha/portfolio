import React from 'react'
import { BiLogoReact, BiLogoMongodb, BiLogoNodejs, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoTailwindCss, BiLogoRedux, BiLogoTypescript, BiLogoBootstrap } from 'react-icons/bi'
import useOnScreen from '../UseOnScreen';
function About()
{
    const [ref, isIntersecting] = useOnScreen({ root: null, rootMargin: '0px', threshold: 0.1 });
    React.useEffect(() =>
    {
        if (isIntersecting) {
            console.log('About component is now visible');
        }
    }, [isIntersecting]);

    return (
        <div ref={ref} className='bg-[#F7F7F7] w-full lg:min-h-screen flex flex-col justify-start items-center lg:gap-1 pb-5 scrollitems' id='about'>
            <div className='flex flex-col justify-center items-center w-[80%] border-0 mt-5'>
                <h1 className='text-center font-bold text-xl lg:text-3xl border-b-4 border-spacing-x-5 border-[#e31b6d]'>ABOUT ME</h1>
                <p className='lg:text-center text-center font-serif lg:text-xl lg:w-3/4 lg:font-medium text-neutral-600 my-10'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className='w-full lg:h-1/2 flex flex-col lg:flex-row justify-center items-center gap-5'>
                <div className='lg:w-1/3 flex flex-col text-justify justify-center lg:items-start items-center gap-4'>
                    <h1 className='text-xl font-bold roboto'>Get to know me!</h1>
                    <p className='w-5/6 text-sm roboto text-slate-500'>I'm a dedicated Full Stack Web Developer currently pursuing my degree at the Indian Institute of Information Technology Una. My exciting journey as a web and app developer began with a simple fascination for the boundless world of the internet. From those early days of tinkering with HTML and CSS, I've evolved into a seasoned professional with years of experience, mastering technologies such as React, Redux, Next.js, MongoDB, Node.js, React Native, JavaScript, and TypeScript along the way.</p>
                    <p className='w-5/6 text-sm roboto font-medium text-slate-500'>I specialize in developing efficient, scalable, and user-friendly software solutions with a strong foundation in object-oriented programming and expertise in the MERN stack. I'm passionate about contributing to innovative projects and staying at the forefront of technology.</p>
                    <p className='w-5/6 text-sm roboto font-medium text-slate-500'>If you're seeking a dedicated developer to bring your ideas to life, let's collaborate and make a meaningful impact in the digital world.</p>
                    <a href='#contact' className='roboto bg-[#e31b6d] p-2 rounded text-white hover:scale-105 active:scale-95 transition-all duration-300 text-sm lg:text-base'>CONTACT</a>
                </div>
                <div className='lg:w-1/3 w-full border-0 h-full flex justify-center items-center flex-wrap flex-row gap-5 icons'>
                    <div className='flex lg:w-[30%] lg:text-7xl justify-center items-center text-blue-500 p-2'>
                        <BiLogoReact></BiLogoReact>
                        <span className='lg:text-lg text-gray-500 icons'>React</span>
                    </div>
                    <div className='flex lg:w-[30%] lg:text-7xl justify-center items-center text-purple-500'>
                        <BiLogoRedux></BiLogoRedux>
                        <span className='lg:text-lg text-gray-500 icons'>Redux</span>
                    </div>
                    <div className='flex lg:w-[30%] lg:text-7xl justify-center items-center gap-3'>
                        <img className='lg:w-14 w-5' src="./nextjs.png" alt="" />
                        <span className='lg:text-lg text-gray-500 icons'>NextJs</span>
                    </div>
                    <div className='flex lg:w-[30%] lg:text-7xl justify-center items-center text-green-500'>
                        <BiLogoNodejs></BiLogoNodejs>
                        <span className='lg:text-lg text-gray-500 icons'>NodeJs</span>
                    </div>
                    <div className='flex lg:w-[30%] lg:text-7xl justify-center items-center text-green-600'>
                        <BiLogoMongodb></BiLogoMongodb>
                        <span className='lg:text-lg text-gray-500 icons'>MongoDB </span>
                    </div>
                    <div className='flex lg:w-[30%] lg:text-7xl justify-center items-center text-blue-800 p-2'>
                        <BiLogoReact></BiLogoReact>
                        <span className='lg:text-lg text-gray-500 icons'> Native</span>
                    </div>
                    <div className='flex lg:w-[30%] lg:text-7xl justify-center items-center text-orange-500'>
                        <BiLogoHtml5></BiLogoHtml5>
                        <span className='lg:text-lg text-gray-500 icons'> HTML5</span>
                    </div>
                    <div className='flex lg:w-[30%] lg:text-7xl justify-center items-center text-blue-600'>
                        <BiLogoCss3></BiLogoCss3>
                        <span className='lg:text-lg text-gray-500 icons'>CSS3 </span>
                    </div>
                    <div className='flex lg:w-[30%] lg:text-7xl justify-center items-center text-yellow-500'>
                        <BiLogoJavascript></BiLogoJavascript>
                        <span className='lg:text-lg text-gray-500 icons'>JavaScript </span>
                    </div>
                    <div className='flex lg:w-[30%] lg:text-7xl justify-center items-center text-sky-500'>
                        <BiLogoTailwindCss></BiLogoTailwindCss>
                        <span className='lg:text-lg text-gray-500 icons'>TailwindCss </span>
                    </div>
                    <div className='flex lg:w-[30%] lg:text-7xl justify-center items-center text-sky-500'>
                        <BiLogoTypescript></BiLogoTypescript>
                        <span className='lg:text-lg text-gray-500 icons'>TypeScript </span>
                    </div>
                    <div className='flex lg:w-[30%] lg:text-7xl justify-center items-center text-purple-500'>
                        <BiLogoBootstrap></BiLogoBootstrap>
                        <span className='lg:text-lg text-gray-500 icons'>Bootstrap </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;