
import CodeIcon from '@mui/icons-material/Code';
import CropIcon from '@mui/icons-material/Crop';
import JavascriptIcon from '@mui/icons-material/Javascript';
// import Figma from '../assets/images/figma.svg';
import { FiFigma } from "react-icons/fi";
import { FaBootstrap } from "react-icons/fa";
// import Bootstrap from '../assets/images/bootstrap.svg';
// import Tailwind from '../assets/images/tailwind-css.svg';
import { SiTailwindcss } from "react-icons/si";



const Services = () => {
  return (
    <div className="max-w-screen-xl px-[10%] sm:px-[25px] lg:px-[15px] mx-auto mt-[10rem]" id="services">
      <h1 className="md:text-[60px] text-[45px] text-center font-bold text-white">My <span className="text-[#ff004f]">Services</span></h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 mt-10">
        <div className="col-span-1 hover:translate-y-[-20px] duration-500 cursor-pointer">
          <div className="p-[40px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white hover:bg-[#080808] duration-500">  
          <i>
          <CodeIcon className="!text-[60px]"/>
          </i>
            <h1 className="text-[30px] font-bold my-5">Web Design</h1>
            <p className="text-[#ababab]">I am a seasoned web designer with a proven track record of crafting visually stunning and intuitive websites. My proficiency in HTML, CSS, and JavaScript allows me to create seamless user experiences. I look forward to the opportunity to contribute to your team&apos;s success.</p>
            <button className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white my-5">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Learn more</a>
            </button>
          </div>
        </div>
        <div className="col-span-1 hover:translate-y-[-20px] duration-500 cursor-pointer">
          <div className="p-[40px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white hover:bg-[#080808] duration-500">
            <CropIcon className="!text-[60px]"/>
            <h1 className="text-[30px] font-bold my-5">PSD TO HTML</h1>
            <p className="text-[#ababab]">I am a seasoned web designer with a proven track record of crafting visually stunning and intuitive websites. My proficiency in HTML, CSS, and JavaScript allows me to create seamless user experiences. I look forward to the opportunity to contribute to your team&apos;s success.</p>
            <button className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white my-5">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Learn more</a>
            </button>
          </div>
        </div>
        <div className="col-span-1 hover:translate-y-[-20px] duration-500 cursor-pointer">
          <div className="p-[40px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white hover:bg-[#080808] duration-500">
            <i id='figma'>
              {/* <img className='w-[60px] text-[#fff]' src={Figma} alt="figma.svg" /> */}
              <FiFigma className='!text-[60px]'/>
            </i>
            <h1 className="text-[30px] font-bold my-5">Figma to HTML</h1>
            <p className="text-[#ababab]">I am a seasoned web designer with a proven track record of crafting visually stunning and intuitive websites. My proficiency in HTML, CSS, and JavaScript allows me to create seamless user experiences. I look forward to the opportunity to contribute to your team&apos;s success.</p>
            <button className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white my-5">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Learn more</a>
            </button>
          </div>
        </div>
        <div className="col-span-1 hover:translate-y-[-20px] duration-500 cursor-pointer">
          <div className="p-[40px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white hover:bg-[#080808] duration-500">
            <JavascriptIcon className='!text-[60px]'/>
            <h1 className="text-[30px] font-bold my-5">JavaScript</h1>
            <p className="text-[#ababab]">I am a seasoned web designer with a proven track record of crafting visually stunning and intuitive websites. My proficiency in HTML, CSS, and JavaScript allows me to create seamless user experiences. I look forward to the opportunity to contribute to your team&apos;s success.</p>
            <button className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white my-5">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Learn more</a>
            </button>
          </div>
        </div>
        <div className="col-span-1 hover:translate-y-[-20px] duration-500 cursor-pointer">
          <div className="p-[40px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white hover:bg-[#080808] duration-500">
            <i>
              {/* <img className='!w-[60px]' src={Bootstrap} alt="Bootstrap" /> */}
              <FaBootstrap className='!text-[60px]'/>
            </i>
            <h1 className="text-[30px] font-bold my-5">Bootstrap</h1>
            <p className="text-[#ababab]">I am a seasoned web designer with a proven track record of crafting visually stunning and intuitive websites. My proficiency in HTML, CSS, and JavaScript allows me to create seamless user experiences. I look forward to the opportunity to contribute to your team&apos;s success.</p>
            <button className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white my-5">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Learn more</a>
            </button>
          </div>
        </div>
        <div className="col-span-1 hover:translate-y-[-20px] duration-500 cursor-pointer">
          <div className="p-[40px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white hover:bg-[#080808] duration-500"> 
          <i> 
            {/* <img className='!w-[60px]' src={Tailwind} alt="tailwind" />            */}
            <SiTailwindcss className='!text-[60px]'/>
          </i>           
            <h1 className="text-[30px] font-bold my-5">Tailwind</h1>
            <p className="text-[#ababab]">I am a seasoned web designer with a proven track record of crafting visually stunning and intuitive websites. My proficiency in HTML, CSS, and JavaScript allows me to create seamless user experiences. I look forward to the opportunity to contribute to your team&apos;s success.</p>
            <button className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white my-5">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Learn more</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;