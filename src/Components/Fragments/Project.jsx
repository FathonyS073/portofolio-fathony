import React from "react";
import Tab from "../Elements/Tabs";

// Import Image
import Mahaltra from "../../assets/Picture/Mahaltra.png";
import DisneyClone from "../../assets/Picture/DisneyClone.png";
import ProjectCard from "../Elements/ProjectCard";

const PROJECT_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "UiUx", value: "uiux" },
  { id: "03", label: "WebDev", value: "WebDev=" },
  { id: "04", label: "Data", value: "Data" },
];

const PROJECT = [
  {
    id: "01",
    projectTitle: "UI / UX 1",
    projectImage: Mahaltra,
    type: "uiux",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, eveniet sint eum vitae aliquid perferendis maxime. Consectetur reiciendis aspernatur temporibus, obcaecati ad repellat quis facilis mollitia rerum in commodi molestiae!",
  },
  {
    id: "02",
    projectTitle: "Web 1",
    projectImage: Mahaltra,
    type: "webdev",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, eveniet sint eum vitae aliquid perferendis maxime. Consectetur reiciendis aspernatur temporibus, obcaecati ad repellat quis facilis mollitia rerum in commodi molestiae!",
  },
  {
    id: "03",
    projectTitle: "Data 1",
    projectImage: Mahaltra,
    type: "data",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, eveniet sint eum vitae aliquid perferendis maxime. Consectetur reiciendis aspernatur temporibus, obcaecati ad repellat quis facilis mollitia rerum in commodi molestiae!",
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

      {tabData.map((project, index) => (
        <div key={project.id}>
          <ProjectCard
            projectImage={project.projectImage}
            projectName={project.projectTitle}
            description={project.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Project;
