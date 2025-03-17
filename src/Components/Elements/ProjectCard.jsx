import React from "react";

const ProjectCard = ({ description, projectImage }) => {
  return (
    <div className="">
      <img src={projectImage} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
