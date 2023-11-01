import {Tabs, TabList, Tab, TabPanel} from "https://cdn.skypack.dev/react-tabs@3.2.2";

function About() {
  return (   
    <div className="container mx-auto">
      <div className="grid grid-cols-3 max-w-screen-xl mx-auto">
        <div>
          <img src="/public/IMG_20220108_102818_edit.jpg" alt="IMG_20220108_102818_edit.jpg" />
        </div>
        <div className="col-span-2">
          <div className="ml-16">
          <h1 className="text-[60px] font-bold text-white">About <span className="text-[#ff004f]">Me</span></h1>
          <p className="text-[#ababab]">I bring expertise in web design and development since 2022, with a strong emphasis on crafting user-centric, visually appealing websites. Proficient in responsive design, SEO strategies, and optimizing website performance for an exceptional user experience</p>
            <Tabs className="mt-10">
              <TabList className="mt--10 flex gap-32">
                <Tab className="new font-bold active:bg-[#ff004f] px-[10px] py-[5px] rounded-md active:drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] text-white">
                  Skills
                </Tab>
                <Tab className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                  Tab 2
                </Tab>
                <Tab className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">
                  Tab 2
                </Tab>
              </TabList>
              <TabPanel className="mt-6">
                <p className="text-[#b54769] text-sm">Web Design:</p>
                <h2 className="text-[#ababab]">HTML/HTML5, CSS/CSS3, Bootstrap, JavaScript, React, tailwind</h2>
                <p className="text-[#b54769] text-sm">Programming:</p>
                <h2 className="text-[#ababab]">JavaScript</h2>
                <p className="text-[#b54769] text-sm">Tools:</p>
                <h2 className="text-[#ababab]">Git, GitHub</h2>
              </TabPanel>
              <TabPanel>
              </TabPanel>
              <TabPanel>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;