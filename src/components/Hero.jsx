import { BsFacebook } from 'react-icons/Bs';
import { AiOutlineGithub } from 'react-icons/Ai';
import { AiOutlineTwitter } from 'react-icons/Ai';
import { AiFillInstagram } from 'react-icons/Ai';
import { AiFillLinkedin } from 'react-icons/Ai';
import { FaPaperPlane } from 'react-icons/Fa';


const hero = () => {
  return (
    <div className="container mx-auto text-center my-[190px]">
      <h2 className="text-[30px] font-bold text-white">Hi There <span className="text-[#ff004f]">!!</span></h2>
      <h1 className="text-6xl font-bold text-white leading-[6rem]">I&apos;m <span className="text-[#ff004f]">Riyad</span> <br />
      I Am a <span className="text-[#ff004f]">Web Designer</span>
      </h1>
      <p className="text-[#ababab] px-[302px] text-lg">I am an expert in HTML5, CSS3, JavaScript, SCSS, PSD to HTML, Figma to HTML with Responsive design, and Twitter Bootstrap. I have excellent development skills and I am proficient in Web Designing. I have incredible attention to detail and I enjoy new challenges.</p>

      <div className="my-[30px] text-center">
        <div className="flex justify-center gap-4">
          <i>
          <a href="#" className=''><BsFacebook color='#ababab' fontSize='40px'/></a>
          </i>
          <i>
          <a href="#" className=''><AiOutlineTwitter color='#ababab' fontSize='40px'/></a>
          </i>
          <i>
          <a href="#" className=''><AiFillInstagram color='#ababab' fontSize='40px'/></a>
          </i>
          <i>
          <a href="#" className=''><AiFillLinkedin color='#ababab' fontSize='40px'/></a>
          </i>
        </div>
      </div>
      <div className="my-[30px]">
        <button className="relative px-[20px] py-[10px] pl-8 border-2 border-[#ff004f] rounded-md text-white font-bold text-lg hover:bg-[#ff004f] hover:text-white mr-2">
          <AiOutlineGithub color='#ababab' fontSize='20px' style={{position: 'absolute', left: '4px', top:'13px',}} className='IconContext'/>
          GitHub</button>
        <button className="relative px-[20px] py-[10px] pl-8 border-2 border-[#ff004f] rounded-md text-white font-bold text-lg hover:bg-[#ff004f] hover:text-white ml-2">
        <FaPaperPlane color='#ababab' fontSize='15px' style={{position: 'absolute', left: '5px', top:'15px'}}/>
          GitHub</button>
      </div>
    </div>
  );
};

export default hero;