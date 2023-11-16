import {Tabs, TabList, Tab, TabPanel} from "https://cdn.skypack.dev/react-tabs@3.2.2";
import { useState } from 'react'

import myImage from '../assets/images/me.jpg';

function About() {

  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      name: "Skills", 
      active: false
    },
    {
      id: 2, 
      name: 'Experience',
      active: false
    },
    {
      id: 3, 
      name: 'Education',
      active: false
    }
  ]

  return (   
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 grid-cols-1 max-w-screen-xl mx-auto">
        <div className="md:mx-0 mx-[15px]">
          <img src={myImage} alt="me" />
        </div>
        <div className="col-span-2">
          <div className="lg:ml-16 ml-[15px]">
          <h1 className="md:text-[60px] text-[45px] font-bold text-white">About <span className="text-[#ff004f]">Me</span></h1>
          <p className="text-[#ababab]">I bring expertise in web design and development since 2022, with a strong emphasis on crafting user-centric, visually appealing websites. Proficient in responsive design, SEO strategies, and optimizing website performance for an exceptional user experience</p>
            <Tabs className="mt-10" id="tabs">
              <TabList className="mt-10 flex gap-32">
                {tabs.map(item=>{
                  return (
                    <Tab className={`inline-flex font-bold text-white items-center justify-center p-2 rounded-md hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)]  focus:text-white
                     transition cursor-pointer duration-150 ease-in-out ${activeTab === item.id ? 'bg-[#ff004f] ' : ''}`}  key={item?.id} onClick={() => setActiveTab(item.id)}>
                      {item.name}
                  
                </Tab>
                  )
                })}
              </TabList>
              <TabPanel className="mt-6">
                <p className="text-[#b54769] text-sm">Web Design:</p>
                <h2 className="text-[#ababab]">HTML/HTML5, CSS/CSS3, Bootstrap, JavaScript, React, tailwind</h2>
                <p className="text-[#b54769] text-sm">Programming:</p>
                <h2 className="text-[#ababab]">JavaScript</h2>
                <p className="text-[#b54769] text-sm">Tools:</p>
                <h2 className="text-[#ababab]">Git, GitHub</h2>
              </TabPanel>
              <TabPanel className="mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate blanditiis modi, aspernatur incidunt animi nam corporis temporibus quia consectetur consequatur doloribus velit vel aliquam totam cumque magni sunt officia tenetur!
              </TabPanel>
              <TabPanel className="mt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti vel nisi molestiae est quisquam optio saepe neque. Quibusdam maiores suscipit, optio obcaecati architecto perspiciatis nulla cum consequatur quas eos?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quia alias adipisci vel neque, ea officiis est et ullam atque debitis eveniet repellendus magnam odio, ex aut laudantium nemo necessitatibus!
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;