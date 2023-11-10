
import { AiOutlineGithub } from 'react-icons/Ai';
import { AiOutlineTwitter } from 'react-icons/Ai';
import { AiFillInstagram } from 'react-icons/Ai';
import { AiFillLinkedin } from 'react-icons/Ai';
import { FaPaperPlane } from 'react-icons/Fa';


const hero = () => {
  return (
    <div className="container mx-auto text-center lg:my-[190px] my-[130px]">
      <h2 className="2xl:text-[30px] xl:text-[26px] lg:text-[22px] md:text-[18px] text-[18px] font-bold text-white">Hi There <span className="text-[#ff004f]">!!</span></h2>
      <h1 className="text-6xl 2xl:text-[60px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] text-[35px]  font-bold text-white xl:leading-[6rem] sm:leading-[60px]">I&apos;m <span className="text-[#ff004f]">Riyad</span> <br />
      I Am a <span className="text-[#ff004f]">Web Designer</span>
      </h1>
      <p className="text-[#ababab] 2xl:px-[302px] lg:px-[200px] xl:text-lg text-[15px]">I am an expert in HTML5, CSS3, JavaScript, SCSS, PSD to HTML, Figma to HTML with Responsive design, and Twitter Bootstrap. I have excellent development skills and I am proficient in Web Designing. I have incredible attention to detail and I enjoy new challenges.</p>

      <div className="my-[30px] text-center">
        <div className="flex justify-center gap-4">
          <i>
          <a href="#" className=''></a>
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
        <a href="https://github.com/riyad-ahmed">
        <button className="relative px-[20px] py-[10px] pl-8 hover:scale-[1.1] duration-500  border-2 border-[#ff004f] rounded-md text-white font-bold text-lg hover:bg-[#ff004f] hover:text-white mr-2">
          <AiOutlineGithub color='#ababab' fontSize='20px' style={{position: 'absolute', left: '4px', top:'13px',}} className='IconContext'/>
          GitHub</button>
        </a>
        <a href="#">
        <button className="relative px-[20px] py-[10px] pl-8 hover:scale-[1.1] duration-500  border-2 border-[#ff004f] rounded-md text-white font-bold text-lg hover:bg-[#ff004f] hover:text-white ml-2">
        <FaPaperPlane color='#ababab' fontSize='15px' style={{position: 'absolute', left: '5px', top:'15px'}}/>
          Contact</button>
        </a>
      </div>
    </div>
  );
};

export default hero;