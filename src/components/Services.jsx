
import CodeIcon from '@mui/icons-material/Code';
import CropIcon from '@mui/icons-material/Crop';
import JavascriptIcon from '@mui/icons-material/Javascript';
// import Figma from '../assets/images/figma.svg';
import Bootstrap from '../assets/images/bootstrap.svg';
import Tailwind from '../assets/images/tailwind-css.svg';



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
            <i>
              {/* <img className='w-[60px] text-[#fff]' src={Figma} alt="figma.svg" /> */}
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" aria-hidden="true" focusable="false" height="24px"><path d="M 9.5 1 C 7.026562 1 5 3.026562 5 5.5 C 5 6.9426457 5.7334437 8.1748313 6.7988281 9 C 5.7334437 9.8251687 5 11.057354 5 12.5 C 5 13.942646 5.7334437 15.174831 6.7988281 16 C 5.7334437 16.825169 5 18.057354 5 19.5 C 5 21.973438 7.026562 24 9.5 24 C 11.973438 24 14 21.973438 14 19.5 L 14 16 L 14 10 L 16.5 10 C 18.973438 10 21 7.973438 21 5.5 C 21 3.026562 18.973438 1 16.5 1 L 13 1 L 9.5 1 z M 9.5 3 L 12 3 L 12 8 L 9.5 8 C 8.107438 8 7 6.892562 7 5.5 C 7 4.107438 8.107438 3 9.5 3 z M 14 3 L 16.5 3 C 17.892562 3 19 4.107438 19 5.5 C 19 6.892562 17.892562 8 16.5 8 L 14 8 L 14 3 z M 9.5 10 L 12 10 L 12 15 L 9.5 15 C 8.107438 15 7 13.892562 7 12.5 C 7 11.107438 8.107438 10 9.5 10 z M 17 10 A 3 3 0 0 0 17 16 A 3 3 0 0 0 17 10 z M 9.5 17 L 12 17 L 12 19.5 C 12 20.892562 10.892562 22 9.5 22 C 8.107438 22 7 20.892562 7 19.5 C 7 18.107438 8.107438 17 9.5 17 z"/></svg>
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
              <img className='!w-[60px]' src={Bootstrap} alt="Bootstrap" />
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
            <img className='!w-[60px]' src={Tailwind} alt="tailwind" />           
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