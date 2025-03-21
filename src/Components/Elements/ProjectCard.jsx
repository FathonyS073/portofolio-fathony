import React from "react";

const ProjectCard = ({
  projectImage,
  projectName,
  description,
  tech,
  projectLink,
}) => {
  return (
    <div className=" p-2 min-h-[400px] md:min-h-[370px] rounded-xl transform transition-all hover:-translate-y-2 duration-300 border-2 border-purple-200 flex flex-col">
      <img src={projectImage} className="h-40 object-cover rounded-xl" alt="" />
      <div className="p-2 flex-grow">
        <h2 className="font-bold text-lg mb-2 text-white text-[15px] md:text-lg">
          {projectName}
        </h2>
        {tech.map((tech, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-purple-400 ring-inset mr-2 mt-2 md:mt-0"
          >
            {tech}
          </span>
        ))}
        <p className="text-xs md:text-[12px] mt-2 md:mt-3 text-white">
          {description}
        </p>
      </div>
      <div className="m-2 mt-auto">
        <a
          role="button"
          target="_blank"
          href={projectLink}
          className="text-white text-[12px] bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
        >
          Detail
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
