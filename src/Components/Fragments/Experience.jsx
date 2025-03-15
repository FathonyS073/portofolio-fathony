import React from "react";

const Experience = () => {
  const listExperience = [
    {
      id: 1,
      company: "First Company",
      time: "2020 - Present",
      description: "Description Of Your Experience",
    },
    {
      id: 2,
      company: "Second Company",
      time: "2020 - Present",
      description: "Description Of Your Experience",
    },
    {
      id: 3,
      company: "Third Company",
      time: "2020 - Present",
      description: "Description Of Your Experience",
    },
  ];
  return (
    <div className="py-10">
      <h2 className="mb-8 text-3xl text-white text-center">
        My <span>Experience</span>
      </h2>
      {listExperience.map((item) => (
        <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[600px] mx-auto">
          <h3>{item.company}</h3>
          <p className="text-gray-40">{item.time}</p>
          <p className="text-gray-40">{item.description}</p>
        </div>
      ))}
      <div className="h-[50px] w-[2px] bg-slate-400 my-1 mx-auto"></div>
    </div>
  );
};

export default Experience;
