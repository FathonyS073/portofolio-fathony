import React from "react";

const Experience = () => {
  const listExperience = [
    {
      id: 1,
      company: "PT Sumber Jaringan Sejahtera",
      position: "Internship IT Officer",
      time: "Februari 2025 - Present",
      description:
        "I'm as IT Officer At PT Sumber Jaringan Sejahtera my Job desk Web Developer With ReactJS.",
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
    <div className="py-10 relative">
      <h2 className="mb-8 text-3xl text-white text-center">
        My <span className="text-purple-400">Experience</span>
      </h2>

      <div className="relative flex flex-col items-center">
        {listExperience.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center w-full"
          >
            {index !== 0 && (
              <div className="h-[30px] w-[2px] bg-slate-400"></div>
            )}

            <div className="text-white bg-gray-700/20 p-4 rounded-3xl min-h-[180px] w-[90%] md:w-[700px] flex flex-col justify-between shadow-lg">
              <h3 className="text-lg font-semibold">{item.company}</h3>
              <p className="text-gray-400">{item.time}</p>
              {item.position && (
                <p className="text-gray-400">{item.position}</p>
              )}
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
