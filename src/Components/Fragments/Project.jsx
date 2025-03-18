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
import Gacoan from "../../assets/Picture/Redesain-Mie-Gacoan.webp";
import growpkl from "../../assets/Picture/GrowthPKl.webp";
import stmik from "../../assets/Picture/STMIK_Primakara.webp";
import kangbakso from "../../assets/Picture/KangBakso.webp";

const PROJECT_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "UiUx", value: "uiux" },
  { id: "03", label: "Website", value: "website" },
  { id: "04", label: "Data", value: "Data" },
];

const PROJECT = [
  {
    id: "01web",
    projectTitle: "Website",
    projectImage: DisneyClone,
    tech: ["React Js", "Tailwind", "Axios"],
    type: "website",
    link: "https://disney-clone-porto1-git-main-fathonysyns-projects.vercel.app/",
    description:
      "Website streaming mirip Disney+ dibuat dengan React.js dan Axios, menampilkan konten dinamis.",
  },
  {
    id: "01uiux",
    projectTitle: "Aplikasi Mahaltra",
    projectImage: Mahaltra,
    tech: ["Figma"],
    link: "https://www.figma.com/proto/BwhHXmgSAMAaThAthJJpY1/Portofolio-2?node-id=76-312&t=dpPdgbNaUQ81zpGJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=76%3A312&show-proto-sidebar=1",
    type: "uiux",
    description:
      "Platform edukasi sains berbasis budaya Madura, menyediakan modul pembelajaran interaktif dan wisata edukasi.",
  },
  {
    id: "02web",
    projectTitle: "Website IPA Madura",
    projectImage: IpaMadura,
    tech: ["Wordpress"],
    link: "https://ipamadura.com/",
    type: "website",
    description:
      "Platform edukasi sains berbasis budaya Madura, menyediakan modul pembelajaran interaktif dan wisata edukasi.",
  },
  {
    id: "02uiux",
    projectTitle: "Redesain Mie Gacoan",
    projectImage: Gacoan,
    tech: ["Figma"],
    link: "https://dribbble.com/shots/22067779-Mie-Gacoan-Restaurant-Food-Landing",
    type: "uiux",
    description:
      "Saya melakukan sebuah redesain website mie gacoan dengan menggunakan figma",
  },
  {
    id: "03web",
    projectTitle: "SiPerang",
    projectImage: Siperang,
    tech: ["Bootstrap 5", "Laravel 8", "MySQL"],
    link: "https://siperang.triplec.or.id/",
    type: "website",
    description:
      " Sistem informasi penganggaran UKM untuk pengelolaan administrasi dan keuangan organisasi kampus.",
  },
  {
    id: "03uiux",
    projectTitle: "Aplikasi Grow PKL",
    projectImage: growpkl,
    tech: ["Figma"],
    link: "https://www.figma.com/design/sWb3VctwsogngWnuAsobpt/Portfolio?node-id=101-6&p=f&t=SWv0DQhW7D8A7Adu-0",
    type: "uiux",
    description:
      "Saya membuat aplikasi grow pkl dengan menggunakan figma dengan tujuan untuk membantu pedagang kaki lima",
  },
  {
    id: "04web",
    projectTitle: "Plita Kemsaba",
    projectImage: Plita,
    tech: ["Wordpress", "SEO"],
    link: "https://sdnkemayoran1-bangkalan.sch.id/",
    type: "website",
    description:
      "Website informasi kegiatan dan berita terkait organisasi Kemsaba dengan desain profesional.",
  },
  {
    id: "04uiux",
    projectTitle: "Profile Company STMIK Primakara",
    projectImage: stmik,
    tech: ["Figma"],
    link: "https://www.figma.com/design/sWb3VctwsogngWnuAsobpt/Portfolio?node-id=101-6&p=f&t=SWv0DQhW7D8A7Adu-0",
    type: "uiux",
    description:
      "Redesain profile company STMIK Primakara dengan menggunakan figma",
  },
  {
    id: "05web",
    projectTitle: "PT AKU",
    projectImage: PtAku,
    tech: ["Wordpress"],
    link: "#",
    type: "website",
    description:
      "Website company profile PT AKU yang bergerak di bidang pemasangan WiFi dan layanan teknologi lainnya.",
  },
  {
    id: "05uiux",
    projectTitle: "Applikasi KangBakso",
    projectImage: kangbakso,
    tech: ["Figma"],
    link: "https://www.figma.com/design/sWb3VctwsogngWnuAsobpt/Portfolio?node-id=101-6&p=f&t=SWv0DQhW7D8A7Adu-0",
    type: "uiux",
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
      {/* <div className="w-full gap-4 flex flex-wrap justify-center py-10"> */}
      <div className="gap-3 md:gap-8  grid grid-cols-2 md:grid-cols-4 justify-center py-5 md:py-10 mx-10 md:mx-20">
        {tabData.map((project, index) => (
          <div key={project.id} className="my-3">
            <ProjectCard
              projectImage={project.projectImage}
              projectName={project.projectTitle}
              tech={project.tech}
              description={project.description}
              projectLink={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
