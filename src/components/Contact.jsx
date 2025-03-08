// import {MdOutgoingMail} from 'react-icons/md'
// import {BsTelephoneForwardFill} from 'react-icons/bs'
// import { BsFacebook } from 'react-icons/Bs';
// import { AiOutlineTwitter } from 'react-icons/Ai';
// import { AiFillInstagram } from 'react-icons/Ai';
// import { AiFillLinkedin } from 'react-icons/Ai';
// import { BsCloudArrowDownFill } from 'react-icons/Bs';
const Contact = () => {
  return (
    <div className="max-w-screen-xl px-[10%] sm:px-[25px] lg:px-[15px] mx-auto my-[10rem]">
      <div className="grid lg:grid-cols-3 grid-cols-1 mx-auto">
        <div className="text-left">
          <h1 className="text-[60px] font-bold text-white">Contact <span className="text-[#ff004f]">Me</span></h1>
          <span className='flex items-center my-4'>
        {/* <MdOutgoingMail color='#ff004f' fontSize='30px'/> */}
        <p className=" ml-2">riyadahmed@gmail.com</p>
          </span>
          <span className='flex items-center'>
        {/* <BsTelephoneForwardFill color='#ff004f' fontSize='25px'/> */}
        <p className=" ml-3">01863......</p>
          </span>
            <div className="my-[30px]">
          <div className="flex gap-4">
            <i>
            <a href="#" className=''>
              {/* <BsFacebook color='#ababab' fontSize='35px'/> */}
              </a>
            </i>
            <i>
            <a href="#" className=''>
              {/* <AiOutlineTwitter color='#ababab' fontSize='35px'/> */}
              </a>
            </i>
            <i>
            <a href="#" className=''>
              {/* <AiFillInstagram color='#ababab' fontSize='35px'/> */}
              </a>
            </i>
            <i>
            <a href="#" className=''>
              {/* <AiFillLinkedin color='#ababab' fontSize='35px'/> */}
              </a>
            </i>
          </div>
          <div className="mt-10">

          <button className="px-[50px] py-[14px] bg-[#ff004f] hover:bg-[#080808] hover:scale-[1.1] duration-500 border-2 border-[#ff004f] rounded-md hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] text-white mt-4">
            <span className='flex items-center'>
            {/* <BsCloudArrowDownFill fontSize='25px'/> */}
                <a href="/public/bio-Riyad.pdf" className="ml-2 relative text-lg py-2 pl-3 pr-4 font-bold bg-transparent md:bg-transparent md:p-0" aria-current="page" download >Download CV</a>
            </span>
            </button>
          </div>
        </div>
        </div>
        <div className="col-span-2 lg:pl-[8rem]">
          <div className="">
          <div>
            <input className="w-full bg-[#262626] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="Full Name" />
          </div>

          <div className="mt-8">
            <input className="w-full bg-[#262626] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="Email" />
          <div className="mt-8">
            <textarea
              className="w-full h-32 bg-[#262626] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder="Your Message"></textarea>
          </div>
          <div className="mt-8">
            <button
              className="px-[50px] font-bold py-[14px] bg-[#ff004f] hover:bg-[#080808] hover:scale-[1.1] duration-500 border-2 border-[#ff004f] rounded-md hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] text-white mt-4">
              Submit
            </button>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;