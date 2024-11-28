import React from "react";
import { motion, spring } from "framer-motion";

import aboutusimg from '../../../public/assets/about-us-img/pexels-photo-8088495.jpeg';

const AboutUs = () => (
  <div className="w-full h-screen flex flex-col font-Montserrat relative ">
    <div className="absolute -top-40 -right-20 w-[200px] h-[300px] bg-[#88b7f3] blur-[120px]" />
    <div className="absolute left-1/3 -bottom-40 w-[250px] h-[250px] bg-[#88b7f3] blur-[150px]" />
    <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: spring, stiffness: 120 }}
        className="flex flex-col justify-center  md:items-center w-full relative  py-8 "
      >
        <motion.h1
          initial={{ fontSize: 20, color: "#ff2994" }}
          animate={{ fontSize: 50, color: "#ff2994" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="py-8  md:text-5xl font-bold relative text-center"
        >
          About ALPHA IA
        </motion.h1>
        <p className="md:text-2xl text-[#478fee] text-center">
          Game Quitters is a global support community for gamers from around the
          world.
        </p>
      </motion.div>

      <motion.div className="hidden md:flex justify-center">
        {/* Your image components */}
      </motion.div>
    </div>
  </div>
);

export default AboutUs;





























// import React, { useEffect, useRef } from "react";
// import { motion, spring , useAnimation, useInView } from "framer-motion";

// // import aboutusimg from '../images/pexels-photo-8088495.jpeg'
// import aboutusimg from '../../../public/assets/about-us-img/pexels-photo-8088495.jpeg';

//  const AboutUs = () => (
//     <div className="w-full h-screen flex flex-col font-Montserrat relative ">
//     <div className="absolute -top-40 -right-20 w-[200px] h-[300px] bg-[#88b7f3] blur-[120px]" />
//     <div className="absolute left-1/3 -bottom-40 w-[250px] h-[250px] bg-[#88b7f3] blur-[150px]" />
//       <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
//         <motion.div 
       
//         initial={{y:-500}}
//         animate={{y:-10 }}
//         transition={{delay:0.2 , type:spring , stiffness:120}}
//         className="flex flex-col justify-center  md:items-center w-full relative  py-8 ">
//           <h1
//           animate={{fontSize:50 , color:'#ff2994' }} 
//           className="py-8  md:text-5xl font-bold relative text-center">About ALPHA IA
//           </h1>
//           <p className="md:text-2xl  text-[#478fee] text-center"> Game Quitters is a global support community for gamers from around the wolrd. </p>
//         </motion.div>

//         <motion.div
//          className="hidden md:flex  justify-center">
//           <motion.img
//            initial={{y:600}} 
//            animate={{y:10}}
//            transition={{delay:1 , duration:1}}
//            className="object-cover object-left-bottom  w-1/4 h-96 rounded-2xl " 
//             src={aboutusimg} alt="" />
//           <motion.img 
//            initial={{y:500}} 
//            animate={{y:10}}
//            transition={{delay:1 , duration:1}}
//            className="object-cover object-center w-1/4 h-96 rounded-2xl mt-28 ml-4 mr-4 relative"  src={aboutusimg} alt="" />
//           <motion.img 
//           wh
//            initial={{y:600}} 
//            animate={{y:10}}
//            transition={{delay:1 , duration:1}}
//            className="object-cover relative object-right-bottom w-1/4 h-96 rounded-2xl" src={aboutusimg} alt="" />

//            {/* Show images vertically stacked on smaller screens */}
     

//       </motion.div>
      

//         </div>
//       </div>

//   )
 
//  export default AboutUs 