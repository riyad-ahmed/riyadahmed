function Header() {
  
  return (
    <header className="container mx-auto">
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
          <h1 className="text-6xl font-bold text-white">Devloper <span className="text-[#ff004f]">R.</span></h1>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Home</a>
              </li>
              <li className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">About</a>
              </li>
              <li className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Services</a>
              </li>
              <li className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Portfolio</a>
              </li>
              <li className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                <a href="#" className="relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;