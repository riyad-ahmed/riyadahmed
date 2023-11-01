import {Tabs, TabList, Tab, TabPanel} from "https://cdn.skypack.dev/react-tabs@3.2.2";

function About() {
  return (   
    <div className="container mx-auto">
      <div className="grid grid-cols-3 max-w-screen-xl mx-auto">
        <div>
          <img src="/public/IMG_20220108_102818_edit.jpg" alt="IMG_20220108_102818_edit.jpg" />
        </div>
        <div className="col-span-2">
          <div>
            <Tabs>
              <TabList className="mt--10 flex gap-32">
                <Tab className="px-[10px] py-[5px] bg-[#262626] rounded-md active:drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">Skills</Tab>
                <Tab className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">Tab 2</Tab>
                <Tab className="px-[10px] py-[5px] bg-[#262626] rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_8px_rgba(255,0,79,1)] hover:text-[#ff004f] text-white">Tab 2</Tab>
              </TabList>
              <TabPanel>
                Content of tab 1
              </TabPanel>
              <TabPanel>
                Content of tab 2
              </TabPanel>
              <TabPanel>
                Content of tab 3
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;