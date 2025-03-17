import React from "react";

const ProjectCard = ({ projectTitle, projectImage, description }) => {
  return (
    <div className="w-[250px] mx-auto flex flex-col bg-[#2a2a2e] text-white rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <img src={projectImage} alt="" className="w-full h-48 object-cover" />
    </div>
  );
};

export default ProjectCard;
