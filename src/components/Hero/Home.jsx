import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center   gap-11 px-4 md:px-20 py-10 bg-white h-screen md:h-auto">
 
      <div className="w-full md:w-1/2 flex justify-center   md:justify-start">
        <img
          src="https://i.postimg.cc/sD6ykymM/SLIDE.jpg"
          alt="Healthy Food"
          className=" rounded-xl"
        />
      </div>

    
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-16 text-center md:text-left">
        <h1 className="text-7xl  font-bold  "> <span className="  text-teal-600"> Eat Tasty</span> Life Longer Feel Better </h1>
 
 

        <ul className="mt-6 space-y-3">
          <li className="flex justify-center md:justify-start items-center">
            <BsCheckCircle className="text-teal-500 text-xl mr-2" />
            <span className="text-lg sm:text-xl text-gray-700">Nutrition Programs</span>
          </li>
          <li className="flex justify-center md:justify-start items-center">
            <BsCheckCircle className="text-teal-500 text-xl mr-2" />
            <span className="text-lg sm:text-xl text-gray-700">Diet for Sports and Health</span>
          </li>
        </ul>

        <button className="mt-8 bg-black text-white py-3 px-6 rounded-full hover:bg-teal-500 transition-all">
          GET NOW
        </button>
      </div>
    </div>
  );
};

export default Home;
