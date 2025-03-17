import React from "react";
import Tab from "../Elements/Tabs";

const Project = () => {
  const [tabData, setTabData] = React.useState("PORTOFOLIOS");
  const [activeTab, setActiveTab] = React.useState("all");

  const handleTabValueChange = (value) => {};

  const PORTFOLIO_TABS = [
    { id: "01", label: "All", value: "all" },
    { id: "02", label: "UiUx", value: "uiux" },
    { id: "03", label: "WebDev", value: "WebDev=" },
    { id: "04", label: "Data", value: "Data" },
  ];

  const PORTOFOLIOS = [
    {
      id: "01",
    },
  ];
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
        tabList={PORTFOLIO_TABS}
        activeTab={activeTab}
        onChange={handleTabValueChange}
      />
    </div>
  );
};

export default Project;
