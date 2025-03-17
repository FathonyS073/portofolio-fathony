import React from "react";
import Tab from "../Elements/Tabs";

// Import Image
import Mahaltra from "../../assets/Picture/Mahaltra.png";
import DisneyClone from "../../assets/Picture/DisneyClone.png";
import ProjectCard from "../Elements/ProjectCard";
import Siperang from "../../assets/Picture/Siperang.png";
import IpaMadura from "../../assets/Picture/IpaMadura.png";
import Plita from "../../assets/Picture/Plita.png";
import PtAku from "../../assets/Picture/PtAku.png";

const PROJECT_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "UiUx", value: "uiux" },
  { id: "03", label: "WebDev", value: "WebDev" },
  { id: "04", label: "Data", value: "Data" },
];

const PROJECT = [
  {
    id: "01",
    projectTitle: "Website",
    projectImage: DisneyClone,
    tech: ["React Js", "Firebase", "Axios"],
    type: "WebDev",
    description: "Website Portofolio with React Js and Axios ",
  },
  {
    id: "02",
    projectTitle: "Website IPA Madura",
    projectImage: IpaMadura,
    type: "WebDev",
    description: "lorem ipsum",
  },
  {
    id: "03",
    projectTitle: "SiPerang",
    projectImage: Siperang,
    type: "WebDev",
    description: "Lorem Ipsum",
  },
  {
    id: "04",
    projectTitle: "Web 1",
    projectImage: Plita,
    type: "WebDev",
    description: "Web Dev",
  },
  {
    id: "04",
    projectTitle: "Data 1",
    projectImage: PtAku,
    type: "WebDev",
    description: "Data",
  },
];

const Project = () => {
  const [tabData, setTabData] = React.useState(PROJECT);
  const [activeTab, setActiveTab] = React.useState("all");

  const handleTabValueChange = (value) => {
    if (value == "all") {
      setTabData(PROJECT);
      setActiveTab("all");
      return;
    }
    const updateList = PROJECT.filter((project) => project.type === value);
    setTabData(updateList);
    setActiveTab(value);
  };
  return (
    <div id="project" className="bg-[#232325]">
      <div className="text-white pt-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h2 className="text-3xl  text-center">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-[13px] md:text-[15px] text-center leading-6 p-10 md:p-5">
            I have worked on 15+ projects in Web Development, UI/UX Design, and
            Machine Learning, covering various industries and use cases. My
            projects include website development, mobile UI/UX design, data
            analysis dashboards, and AI-powered solutions. Each project is
            crafted with a focus on user experience, functionality, and
            innovation to solve real-world problems.
          </p>
        </div>
      </div>
      <Tab
        tabList={PROJECT_TABS}
        activeTab={activeTab}
        onChange={handleTabValueChange}
      />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 min-h-[230px]">
        {tabData.map((project, index) => (
          <div key={project.id} className="my-3">
            <ProjectCard
              projectImage={project.projectImage}
              projectName={project.projectTitle}
              description={project.description}
            />
          </div>
        ))}
      </div> */}
      <div className="w-full gap-4 flex-wrap flex justify-center py-10">
        <div className="w-60 p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl shadow-white">
          <img src={Mahaltra} className="object-cover rounded-xl" alt="" />
          <div className="p-2">
            {/* Heading */}
            <h2 className="font-bold text-lg mb-2">Mahaltra</h2>
            {/* Description */}
            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quas voluptas eligendi!
            </p>
            {/* CTA */}
          </div>
          <div className="m-2">
            <a
              role="button"
              href="#"
              class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-60 p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl shadow-white">
          <img src={Mahaltra} className="object-cover rounded-xl" alt="" />
          <div className="p-2">
            {/* Heading */}
            <h2 className="font-bold text-lg mb-2">Mahaltra</h2>
            {/* Description */}
            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quas voluptas eligendi!
            </p>
            {/* CTA */}
          </div>
          <div className="m-2">
            <a
              role="button"
              href="#"
              class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-60 p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl shadow-white">
          <img src={Mahaltra} className="object-cover rounded-xl" alt="" />
          <div className="p-2">
            {/* Heading */}
            <h2 className="font-bold text-lg mb-2">Mahaltra</h2>
            {/* Description */}
            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quas voluptas eligendi!
            </p>
            {/* CTA */}
          </div>
          <div className="m-2">
            <a
              role="button"
              href="#"
              class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-60 p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl shadow-white">
          <img src={Mahaltra} className="object-cover rounded-xl" alt="" />
          <div className="p-2">
            {/* Heading */}
            <h2 className="font-bold text-lg mb-2">Mahaltra</h2>
            {/* Description */}
            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quas voluptas eligendi!
            </p>
            {/* CTA */}
          </div>
          <div className="m-2">
            <a
              role="button"
              href="#"
              class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-60 p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl shadow-white">
          <img src={Mahaltra} className="object-cover rounded-xl" alt="" />
          <div className="p-2">
            {/* Heading */}
            <h2 className="font-bold text-lg mb-2">Mahaltra</h2>
            {/* Description */}
            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quas voluptas eligendi!
            </p>
            {/* CTA */}
          </div>
          <div className="m-2">
            <a
              role="button"
              href="#"
              class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
