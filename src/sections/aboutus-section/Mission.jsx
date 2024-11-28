import React from "react";
import { motion } from "framer-motion";
import aboutusimg from '../../../public/assets/about-us-img/stop.webp';

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const fadeInAnimationVariant = {
  initial: { x: 580 },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const Mission = () => (
  <div className="w-full h-full flex flex-col font-Montserrat relative ">
    <div className="absolute -left-20 -top-30 w-[250px] h-[250px] bg-[#88b7f3] blur-[150px]" />
    <div className="absolute right-1 -bottom-40 w-[250px] h-[250px] bg-[#88b7f3] blur-[150px]" />
    <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{
          once: true,
        }}
        className="w-full relative py-4 "
      >
        <motion.h1
          style={{ fontSize: 50, color: "#ff2994" }}
          className="py-8 md:text-5xl font-bold relative "
        >
          Our Mission
          <div className="r md:mt-[1cm] ">
            <hr className="w-[3cm] md:w-[6cm] border-[3px] border-solid border-[#478fee]" />
          </div>
        </motion.h1>
        <div className="">
          <p className="md:text-2xl md:text-center ">
            At Alpha IA, our mission is to empower gamers on their journey to break free from gaming addiction. We believe in the transformative power of professional support, combining the expertise of doctors with a compassionate approach.
            <br /> By providing a dedicated space for individuals to find guidance, resources, and understanding, we aim to foster a community that supports each other in overcoming gaming addiction and reclaiming a balanced, fulfilling life.
          </p>
        </div>
      </motion.div>

      <div className="hidden md:flex justify-center">
        <motion.img
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 1, duration: 1 }}
          viewport={{
            once: true,
          }}
          className="object-cover w-[550px] h-[450px] rounded-[20px] "
          src={aboutusimg}
          alt=""
        />
      </div>
    </div>
  </div>
);

export default Mission;





























// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// // import aboutusimg from '../images/stop.webp'
// import aboutusimg from '../../../public/assets/about-us-img/stop.webp';

// const fadeInAnimationVariants = {
//   initial: { opacity: 0, y: 100,},
//   animate: {
//   opacity:1,
//   y: 0 ,
//   },
// };
// const fadeInAnimationVariant = {
//   initial: {  x:580,},
//   animate: {
//   opacity:1,
//   x: 0 ,
//   },
// };

//  const Mission = () => (
//     <div className="w-full h-full flex flex-col font-Montserrat relative ">
    
//     <div className="absolute -left-20 -top-30 w-[250px] h-[250px] bg-[#88b7f3] blur-[150px]" />
//     <div className="absolute right-1 -bottom-40 w-[250px] h-[250px] bg-[#88b7f3] blur-[150px]" />
//       <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
//         <motion.div 
//         variants={fadeInAnimationVariants}
//         initial="initial"
//         whileInView="animate"
//         transition={{delay:0.5 , duration:0.5}}
//         viewport={{
//           once:true
//         }
//         }
//         className=" w-full relative  py-4 ">
//           <h1
//           animate={{fontSize:50 , color:'#ff2994' }} 
//           className="py-8  md:text-5xl font-bold relative ">Our Mission
//                     <div className="r md:mt-[1cm] ">
//             <hr className="w-[3cm] md:w-[6cm] border-[3px] border-solid border-[#478fee] " />
//           </div>

//           </h1>
//           <div className="">
//           <p className="md:text-2xl md:text-center  "> At Alpha IA, our mission is to empower gamers on their journey to break free from gaming addiction. We believe in the transformative power of professional support, combining the expertise of doctors with a compassionate approach.<br /> By providing a dedicated space for individuals to find guidance, resources, and understanding, we aim to foster a community that supports each other in overcoming gaming addiction and reclaiming a balanced, fulfilling life.</p>
//           </div>
//         </motion.div>

//         <div
//         className="hidden md:flex  justify-center">
//           <motion.img
//           variants={fadeInAnimationVariant}
//            initial="initial" 
//            whileInView="animate"
//            transition={{delay:1 , duration:1}}
//            viewport={{
//             once:true
//           }
//           }
//            className="object-cover w-[550px] h-[450px] rounded-[20px] " 
//             src={aboutusimg} alt="" />
         
     

//       </div>
      

//         </div>
//       </div>

//   )
 
//  export default Mission;