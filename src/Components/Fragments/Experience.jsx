import React from "react";

const Experience = () => {
  const listExperience = [
    {
      id: 1,
      company: "PT Sumber Jaringan Sejahtera",
      position: "Internship IT Officer",
      time: "Februari 2025 - Present",
      description:
        "Developed and maintained the company's website using React.js and Node.js. Assisted in mobile app development with React Native, enhancing UI and performance. Managed client data processing to improve efficiency and collaborated on system security and data integration.",
    },
    {
      id: 2,
      company: "Digistar Class & Digistar Club by Telkom Indonesia",
      time: "July 2024 - November 2024",
      position: "Member – UI/UX & Data Science Enthusiast",
      description:
        "Selected as one of 500 participants from 12,176 applicants. Trained in UI/UX Design and worked on the Looge Website Use Case. Continued in Digistar Club to explore Data Analysis & Business Intelligence, focusing on web scraping, product recommendation, and customer segmentation dashboards.",
    },
    {
      id: 3,
      company: "Freelance Employee",
      position: "IT Spesialis (Web, Machine Learning, UI/UX Design)",
      time: "2022 - Present",
      description:
        "Worked on 15+ projects in website development, UI/UX design, and machine learning. Built responsive web apps, designed intuitive user experiences, and developed AI-driven solutions for various clients.",
    },
  ];

  return (
    <div className="py-10 relative" id="experience">
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
