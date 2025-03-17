import React from "react";

const ProjectCard = ({ projectImage, projectName, description }) => {
  return (
    <div className="w-60 p-2 min-h-[350px] rounded-xl transform transition-all hover:-translate-y-2 duration-300 border-2 border-purple-200 flex flex-col">
      <img src={projectImage} className="h-40 object-cover rounded-xl" alt="" />
      <div className="p-2 flex-grow">
        <h2 className="font-bold text-lg mb-2 text-white">{projectName}</h2>
        <p className="text-[12px] text-white">{description}</p>
      </div>
      <div className="m-2 mt-auto">
        <a
          role="button"
          href="#"
          className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
