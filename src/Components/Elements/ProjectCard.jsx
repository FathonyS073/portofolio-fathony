import React from "react";

const ProjectCard = ({ projectTitle, projectImage, description }) => {
  return (
    <div className="max-w-sm flex flex-col bg-[#2a2a2e] text-white rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <img src={projectImage} alt="" className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold mt-2">{projectTitle}</h3>
        <p className="text-sm text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
