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
import two from "../../assets/Picture/2.png";

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
    description:
      "Website streaming mirip Disney+ dibuat dengan React.js dan Axios, menampilkan konten dinamis.",
  },
  {
    id: "02",
    projectTitle: "Website IPA Madura",
    projectImage: IpaMadura,
    tech: ["React Js", "Firebase", "Axios"],
    type: "WebDev",
    description:
      "Platform edukasi sains berbasis budaya Madura, menyediakan modul pembelajaran interaktif dan wisata edukasi.",
  },
  {
    id: "03",
    projectTitle: "SiPerang",
    projectImage: Siperang,
    tech: ["React Js", "Firebase", "Axios"],
    type: "WebDev",
    description:
      " Sistem informasi penganggaran UKM untuk pengelolaan administrasi dan keuangan organisasi kampus.",
  },
  {
    id: "04",
    projectTitle: "Plita Kemsaba",
    projectImage: Plita,
    tech: ["React Js", "Firebase", "Axios"],
    type: "WebDev",
    description:
      "Website informasi kegiatan dan berita terkait organisasi Kemsaba dengan desain profesional.",
  },
  {
    id: "05",
    projectTitle: "PT AKU",
    projectImage: PtAku,
    tech: ["React Js", "Firebase", "Axios"],
    type: "WebDev",
    description:
      "Website company profile PT AKU yang bergerak di bidang pemasangan WiFi dan layanan teknologi lainnya.",
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
      <div className="w-full gap-4 flex flex-wrap justify-center py-10">
        {tabData.map((project, index) => (
          <div key={project.id} className="my-3">
            <ProjectCard
              projectImage={project.projectImage}
              projectName={project.projectTitle}
              tech={project.tech}
              description={project.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
