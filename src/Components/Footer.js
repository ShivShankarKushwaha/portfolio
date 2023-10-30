import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import useOnScreen from '../UseOnScreen';
const Footer = () =>
{
  const [ref, isIntersecting] = useOnScreen({ root: null, rootMargin: '0px', threshold: 0.1 });

  // Log the component name when it becomes visible
  React.useEffect(() =>
  {
    if (isIntersecting) {
      console.log('Footer component is now visible');
    }
  }, [isIntersecting]);

  return (
    <footer ref={ref} className="bg-slate-800 min-h-[20rem] text-white py-10 relative z-20 scrollitems">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0 p-2">
          <h2 className="text-3xl font-bold">Shiv Shankar Kushwaha</h2>
          <p className="text-sm">Web Developer & Designer</p>
          <p className="my-4">Passionate about crafting digital experiences that make a difference.</p>
          <p className='lg:w-2/3'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        </div>
        <div className="text-center md:text-right">
          <ul className="flex space-x-6">
            <li>
              <a href="https://github.com/ShivShankarKushwaha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-4xl hover:animate-pulse">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/shiv-shankar-kushwaha-4083a3250/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-4xl hover:animate-pulse">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ShivSha77163441" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-4xl hover:animate-pulse">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shivshankarkushwaha0000@gmail.com" target='_blank' className="hover:text-blue-500 text-4xl hover:animate-pulse">
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-10 text-sm">&copy; Copyright {new Date().getFullYear()}. Made by Shiv Shankar Kushwaha</p>
    </footer>
  );
}

export default Footer;
