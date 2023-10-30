const hero = () => {
  return (
    <div className="container mx-auto text-center my-[190px]">
      <h2 className="text-[30px] font-bold text-white">Hi There <span className="text-[#ff004f]">!!</span></h2>
      <h1 className="text-6xl font-bold text-white leading-[6rem]">I&apos;m <span className="text-[#ff004f]">Riyad</span> <br />
      I Am a <span className="text-[#ff004f]">Web Designer</span>
      </h1>
      <p className="text-[#ababab] px-[302px] text-lg">I am an expert in HTML5, CSS3, JavaScript, SCSS, PSD to HTML, Figma to HTML with Responsive design, and Twitter Bootstrap. I have excellent development skills and I am proficient in Web Designing. I have incredible attention to detail and I enjoy new challenges.</p>

      <div className="my-[30px]">
        <i className="flex justify-center">
          <a href="#">
            <img className="w-[50px] text-lg fill-white hover:fill-white" src="/public/facebook.svg" alt="../assets/images/facebook.svg" />
          </a>
          <a href="#">
            <img className="w-[50px] text-lg fill-white hover:fill-white" src="/public/facebook.svg" alt="../assets/images/facebook.svg" />
          </a>
          <a href="#">
            <img className="w-[50px] text-lg fill-white hover:fill-white" src="/public/facebook.svg" alt="../assets/images/facebook.svg" />
          </a>
          <a href="#">
            <img className="w-[50px] text-lg fill-white hover:fill-white" src="/public/facebook.svg" alt="../assets/images/facebook.svg" />
          </a>
        </i>
      </div>
      <div className="my-[30px]">
        <button className="px-[20px] py-[10px] border-2 border-[#ff004f] rounded-md text-white font-bold text-lg hover:bg-[#ff004f] hover:text-white mr-2">GitHub</button>
        <button className="px-[20px] py-[10px] border-2 border-[#ff004f] rounded-md text-white font-bold text-lg hover:bg-[#ff004f] hover:text-white ml-2">GitHub</button>
      </div>
    </div>
  );
};

export default hero;