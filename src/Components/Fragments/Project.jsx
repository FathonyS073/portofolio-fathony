import React from "react";
import Tab from "../Elements/Tabs";

// Import Image
import Mahaltra from "../../assets/Picture/Mahaltra.png";
import DisneyClone from "../../assets/Picture/DisneyClone.png";
import ProjectCard from "../Elements/ProjectCard";

const PROJECT_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "UiUx", value: "uiux" },
  { id: "03", label: "WebDev", value: "WebDev" },
  { id: "04", label: "Data", value: "Data" },
];

const PROJECT = [
  {
    id: "01",
    projectTitle: "UI / UX 1",
    projectImage: Mahaltra,
    type: "uiux",
    description: "Ui/Ux",
  },
  {
    id: "02",
    projectTitle: "Web 1",
    projectImage: DisneyClone,
    type: "WebDev",
    description: "Web Dev",
  },
  {
    id: "03",
    projectTitle: "Data 1",
    projectImage: Mahaltra,
    type: "Data",
    description: "Data",
  },
  {
    id: "03",
    projectTitle: "Web 1",
    projectImage: DisneyClone,
    type: "WebDev",
    description: "Web Dev",
  },
  {
    id: "04",
    projectTitle: "Data 1",
    projectImage: Mahaltra,
    type: "Data",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[230px]">
        {tabData.map((project, index) => (
          <div key={project.id} className="my-3">
            <ProjectCard
              projectImage={project.projectImage}
              projectName={project.projectTitle}
              description={project.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
