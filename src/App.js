import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import { BiLogoLinkedin, BiLogoTwitter, BiLogoGithub, BiLogoGoogle } from 'react-icons/bi'
import { FaEnvelope} from 'react-icons/fa'
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
function App()
{
  return (
    <div className="app">
      <div className='hidden lg:flex fixed bottom-1/3 flex-col justify-center items-center gap-2 p-1 left-5 w-auto border-2 text-white bg-white z-10'>
        <a href='https://github.com/ShivShankarKushwaha/' target='_blank' className='text-3xl text-black hover:bg-[#e31b6d] p-2 cursor-pointer hover:text-white'>
          <BiLogoGithub></BiLogoGithub>
        </a>
        <a href='https://www.linkedin.com/in/shiv-shankar-kushwaha-4083a3250/' target='_blank' className='text-3xl text-blue-900 hover:bg-[#e31b6d] hover:text-white p-2 cursor-pointer'>
          <BiLogoLinkedin></BiLogoLinkedin>
        </a>
        <a href='https://twitter.com/ShivSha77163441' target='_blank' className='text-3xl text-blue-500 hover:bg-[#e31b6d] p-2 cursor-pointer hover:text-white'>
          <BiLogoTwitter></BiLogoTwitter>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shivshankarkushwaha0000@gmail.com" target="_blank" className='text-3xl text-blue-600 hover:bg-[#e31b6d] hover:text-white p-2 cursor-pointer'>
          <FaEnvelope></FaEnvelope>
        </a>
      </div>
      <a href='#home' className='hidden lg:block lg:fixed z-10 bottom-5 right-5 border-0 w-10 h-10 group hover:animate-pulse hover:cursor-pointer opacity-30 scale-110 hover:opacity-100'>
        <img className='scale-125 ' src="./arrow-up-double-line.png" alt="" />
        <span className='hidden group-hover:flex relative -top-12 w-20 -left-5'>Go to Top</span>
      </a>
      <Home></Home>
      {/* <br /> */}
      <About></About>
      <hr />
      <Projects></Projects>
      <hr />
      <Experience></Experience>
      <hr />
      <Contact></Contact>
      <Footer></Footer>
    </div>

  );
}

export default App;
