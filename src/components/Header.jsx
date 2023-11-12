import React, { useState } from 'react';

function Header() {
  // const menu = document.querySelector('#menu');
  const [isMenuHidden, setMenuHidden] = useState(true);
  
  return (
    <header className="container mx-auto">
     <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700">
     <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
          <a href="#" className="flex items-center">
          <h1 className="xl:text-6xl font-bold text-white lg:text-4xl sm:text-3xl ">Devloper <span className="text-[#ff004f]">R.</span></h1>
          </a>
      </div>
         <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" onClick={()=>setMenuHidden(!isMenuHidden)} className="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>       
       <div className={`w-full md:py-3 md:flex md:items-center md:w-auto ${isMenuHidden? 'hidden': ''}`} >
          <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Home</a>
              </li>
              <li className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                <a href="#about" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">About</a>
              </li>
              <li className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                <a href="#services" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Services</a>
              </li>
              <li className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Portfolio</a>
              </li>
              <li className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Contact</a>
              </li>
          </ul>
        </div>
    </nav>



          {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Home</a>
              </li>
              <li className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                <a href="#about" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">About</a>
              </li>
              <li className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                <a href="#services" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Services</a>
              </li>
              <li className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Portfolio</a>
              </li>
              <li className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Contact</a>
              </li>
            </ul>
          </div> */}
    </header>
  )
}

export default Header;