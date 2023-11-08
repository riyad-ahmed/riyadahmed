import {Tabs, TabList, Tab, TabPanel} from "https://cdn.skypack.dev/react-tabs@3.2.2";
// import React, { useState } from 'react'

function About() {
  const tabs = [
    {
      name: "Skills", 
      id: 1,
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

  

  // const [active, setactive] = useState(true)



  // function Tab(props){
  
  //   const [visibleTab, setVisibleTab] = React.useState(props.data[0].id)
  
  //   const listTitles = props.data.map((item) => 
  //       <li onClick={() => setVisibleTab(item.id)} className={visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"}>{item.tabTitle}</li>
  //   )       
                                     
  //   const listContent = props.data.map((item) => 
  //       <p style={visibleTab === item.id ? {} : {display: 'none'}}>{item.tabContent}</p>
  //   )
    
  //   return(
  //       <div className="tabs">
  //         <ul className="tabs-titles">
  //           {listTitles}
  //         </ul>
  //         <div className="tab-content">
  //            {listContent}
  //         </div>
  //       </div>
  //     )
  // }


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
              <TabList className="mt-10 flex gap-32">
                {tabs.map(item=>{
                  return (
                    <Tab className="inline-flex font-bold text-white items-center justify-center p-2 rounded-md hover:text-gray-500 hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] focus:outline-none focus:bg-[#ff004f] focus:text-white
                     transition duration-150 ease-in-out" key={item?.id}>
                  Skills
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

// className={`new font-bold active:bg-[#ff004f] px-[10px] py-[5px] rounded-md active:drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] text-white ${active? 'active': null}` } 

// onClick="mobileMenuOpen = true" type="button"