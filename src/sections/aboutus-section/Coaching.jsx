import React from "react";

// import teamembr from '../images/team.jpeg'
import teamembr from '../../../public/assets/about-us-img/team.jpeg';

const Coaching = () => (
    <div className="w-full h-full relative md:pt-4 ">
      <div className="absolute w-full h-full  bg-gray-800 ">
        <img className="w-full h-full object-cover mix-blend-overlay" src={teamembr} alt="" />
      </div>

      <div className="max-w-[1240px] mx-auto flex flex-col justify-center md:items-center px-4 font-Montserrat text-[#f4f3f2] py-10 relative">
          
          <h1 className="  md:text-5xl font-bold  text-center">Stop Gaming Issues For Good
            <div className="flex justify-center md:mt-[1cm] ">
              <hr className="w-[3cm] md:w-[6cm] border-[3px] border-solid border-[#478fee] " />
            </div>
          </h1>
      </div>
      <div className="max-w-[1240px] mx-auto  justify-center font-Montserrat relative text-[#f4f3f2] py-10 ">
    <p className="md:text-3xl  text-center  ">
    Our bespoke 12-week coaching programs are designed to get gaming under control while thriving in life. We accept both individuals and families, including gamers currently in denial.</p>
</div>
<div className="max-w-[1240px] mx-auto flex justify-center items-cente p-12"> 
<button
  type="button"  
  className="text-[#f4f3f2] bg-[#478fee] shadow-[0.5px_0px_1px_rgb(150,150,150)] cursor-pointer opacity-100 transition-[0.15s] px-6 py-2 rounded-full border-[none] hover:bg-[#478fee] hover: relative"
>
  APPLY FOR COACHING
</button>

    </div>
</div>
  )


export default Coaching