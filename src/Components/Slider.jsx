import React from 'react';
import './Slider.css'; // Import custom CSS for animations
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { MdCss } from 'react-icons/md';
import { RiJavascriptFill } from 'react-icons/ri';
import { IoLogoDocker, IoLogoReact } from 'react-icons/io5';
import { DiNodejs } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';

const Slider = () => {
  return (
    <>
      <div className="main w-[100%] h-[100vh] bg-[#2e0043] ">
        
        <h1 className="text-2xl w-[150px] p-2 mx-auto rounded-bl-4xl rounded-tr-4xl  text-white block text-center share-tech bg-gradient-to-r from-[#15001F] shadow-[#2e0043] shadow-xl via-[#2e0043] to-[black] ... ">My Skills</h1>
        <div className="bounce flex justify-center items-center mt-36 gap-20 h-full">
          <div className="goal  flex justify-center items-center w-[100px] h-[100px] rounded-full text-white text-5xl bg-[#DE4B25] animate-bounce-1 border-2 border-black">
          <FaHtml5 />
          </div>
          <div className="goal flex justify-center items-center w-[100px] h-[100px] rounded-full text-white text-5xl bg-[#006AB2] animate-bounce-2">
          <FaCss3Alt />
          </div>
          <div className="goal flex justify-center items-center w-[100px] h-[100px] rounded-full text-white text-5xl bg-yellow-400 animate-bounce-3">
          <RiJavascriptFill />
          </div>
          <div className="goal flex justify-center items-center w-[100px] h-[100px] rounded-full text-white text-5xl bg-[#52D7F1] animate-bounce-4">
          <IoLogoReact />
          </div>
          <div className="goal flex justify-center items-center w-[100px] h-[100px] rounded-full text-white text-7xl bg-[#76C50A] animate-bounce-5">
          <DiNodejs />
          </div>
          <div className="goal flex justify-center items-center w-[100px] h-[100px] rounded-full text-white text-7xl bg-green-800 animate-bounce-6">
          <SiMongodb />
          </div>
          <div className="goal flex justify-center items-center w-[100px] h-[100px] rounded-full text-white text-7xl bg-[#019AFA] animate-bounce-7 ">
          <IoLogoDocker />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Slider;