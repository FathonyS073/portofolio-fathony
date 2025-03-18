import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      className="flex justify-center my-5 h-full sm:h-[70vh] items-center py-28"
      id="contact"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
            <h1 className="text-4xl sm:text-5xl text-white">
              Contact <span>Me</span>
            </h1>
            <p className="text-normal text-lg font-medium text-gray-400 mt-5">
              Let's connect on LinkedIn <br /> or send me an email
            </p>
            <div className="flex items center mt-3 text-gray-400">
              <HiOutlineMail className="w-6 h-6" />
              <div className="ml-4 text-md tracking-wide w-50">
                <p>Fathony Syaennulloh</p>
              </div>
            </div>
          </div>
          <form
            action="https://getform.io/f/ayvkwmnb"
            method="POST"
            className="p-6 flex flex-col justify-center max-w-[700px]"
          >
            <div className="flex flex-col">
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-100 mt-4 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-100 mt-4 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />
            </div>
            <div className="flex flex-col">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-100 mt-4 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="md:w-32 bg-purple-500 text-white py-3 px-3 rounded-lg mt-4"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
