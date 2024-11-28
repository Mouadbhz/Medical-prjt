import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

// import pcgame from '../images/doctor.jpeg'
// import pcgame from 'public/assets/about-us-img/doctor.jpeg';
import pcgame from '../../../public/assets/about-us-img/doctor.jpeg';


const Team = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full h-full relative ">
      <div className="max-w-[1240px] mx-auto flex flex-col  px-4  py-10 relative">
        <h1 className="  md:text-5xl font-bold font-Montserrat text-center">
          {' '}
          Our doctors
          <div className="md:mt-[1cm] flex justify-center items-center ">
            <hr className="w-[3cm] md:w-[6cm] border-[3px] border-solid border-[#478fee] "/>
          </div>
        </h1>
      </div>

      <Carousel className="h-[400px] px-[30px]  relative" responsive={responsive}>
        <div>
          <div className="group  w-[7cm] h-[9cm] shadow-md bg-[#eff6ff] rounded-[25px] ">
            <div className="image-content  relative  rounded-[25px_25px_0_25px] flex flex-col items-center  pt-7 ">
              <div className="card-image relative h-40 w-40 p-1 ">
                <img
                  className="card-img w-full h-full object-cover rounded-full border-[6px] border-[#478fee]"
                  src={pcgame}
                  alt=""
                />
              </div>
            </div>
            <div className="card-content flex flex-col items-center  pt-4 pb-8 px-14">
              <h2 className="name text-lg font-medium "> Nabil</h2>
              <p className="desc text-center text-sm">Front-End </p>
            </div>
            <div
              className=" grid grid-rows-1 grid-cols-3  bg-white pb-[18px] pt-[14px] rounded-b-[25px] group-hover:bg-[#478fee]
              text-2xl "
            >
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center ">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-[#478fee] group-hover:text-white cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="group  w-[7cm] h-[9cm] shadow-md bg-[#eff6ff] rounded-[25px] ">
            <div className="image-content  relative  rounded-[25px_25px_0_25px] flex flex-col items-center  pt-7 ">
              <div className="card-image relative h-40 w-40 p-1 ">
                <img
                  className="card-img w-full h-full object-cover rounded-full border-[6px] border-[#478fee]"
                  src={pcgame}
                  alt=""
                />
              </div>
            </div>
            <div className="card-content flex flex-col items-center  pt-4 pb-8 px-14">
              <h2 className="name text-lg font-medium "> Ilyes</h2>
              <p className="desc text-center text-sm">Front-End </p>
            </div>
            <div
              className=" grid grid-rows-1 grid-cols-3  bg-white pb-[18px] pt-[14px] rounded-b-[25px] group-hover:bg-[#478fee]
              text-2xl "
            >
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center ">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-[#478fee] group-hover:text-white cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="group  w-[7cm] h-[9cm] shadow-md bg-[#eff6ff] rounded-[25px] ">
            <div className="image-content  relative  rounded-[25px_25px_0_25px] flex flex-col items-center  pt-7 ">
              <div className="card-image relative h-40 w-40 p-1 ">
                <img
                  className="card-img w-full h-full object-cover rounded-full border-[6px] border-[#478fee]"
                  src={pcgame}
                  alt=""
                />
              </div>
            </div>
            <div className="card-content flex flex-col items-center  pt-4 pb-8 px-14">
              <h2 className="name text-lg font-medium "> Haroune </h2>
              <p className="desc text-center text-sm">Front-End </p>
            </div>
            <div
              className=" grid grid-rows-1 grid-cols-3  bg-white pb-[18px] pt-[14px] rounded-b-[25px] group-hover:bg-[#478fee]
              text-2xl "
            >
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center ">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-[#478fee] group-hover:text-white cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="group  w-[7cm] h-[9cm] shadow-md bg-[#eff6ff] rounded-[25px] ">
            <div className="image-content  relative  rounded-[25px_25px_0_25px] flex flex-col items-center  pt-7 ">
              <div className="card-image relative h-40 w-40 p-1 ">
                <img
                  className="card-img w-full h-full object-cover rounded-full border-[6px] border-[#478fee]"
                  src={pcgame}
                  alt=""
                />
              </div>
            </div>
            <div className="card-content flex flex-col items-center  pt-4 pb-8 px-14">
              <h2 className="name text-lg font-medium "> Faycel </h2>
              <p className="desc text-center text-sm">Front-End </p>
            </div>
            <div
              className=" grid grid-rows-1 grid-cols-3  bg-white pb-[18px] pt-[14px] rounded-b-[25px] group-hover:bg-[#478fee]
              text-2xl "
            >
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center ">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-[#478fee] group-hover:text-white cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="group  w-[7cm] h-[9cm] shadow-md bg-[#eff6ff] rounded-[25px] ">
            <div className="image-content  relative  rounded-[25px_25px_0_25px] flex flex-col items-center  pt-7 ">
              <div className="card-image relative h-40 w-40 p-1 ">
                <img
                  className="card-img w-full h-full object-cover rounded-full border-[6px] border-[#478fee]"
                  src={pcgame}
                  alt=""
                />
              </div>
            </div>
            <div className="card-content flex flex-col items-center  pt-4 pb-8 px-14">
              <h2 className="name text-lg font-medium "> Rahma </h2>
              <p className="desc text-center text-sm">Front-End </p>
            </div>
            <div
              className=" grid grid-rows-1 grid-cols-3  bg-white pb-[18px] pt-[14px] rounded-b-[25px] group-hover:bg-[#478fee]
              text-2xl "
            >
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center ">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-[#478fee] group-hover:text-white cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="group  w-[7cm] h-[9cm] shadow-md bg-[#eff6ff] rounded-[25px] ">
            <div className="image-content  relative  rounded-[25px_25px_0_25px] flex flex-col items-center  pt-7 ">
              <div className="card-image relative h-40 w-40 p-1 ">
                <img
                  className="card-img w-full h-full object-cover rounded-full border-[6px] border-[#478fee]"
                  src={pcgame}
                  alt=""
                />
              </div>
            </div>
            <div className="card-content flex flex-col items-center  pt-4 pb-8 px-14">
              <h2 className="name text-lg font-medium "> Aladin </h2>
              <p className="desc text-center text-sm">Front-End </p>
            </div>
            <div
              className=" grid grid-rows-1 grid-cols-3  bg-white pb-[18px] pt-[14px] rounded-b-[25px] group-hover:bg-[#478fee]
              text-2xl "
            >
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center ">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-[#478fee] group-hover:text-white cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="group  w-[7cm] h-[9cm] shadow-md bg-[#eff6ff] rounded-[25px] ">
            <div className="image-content  relative  rounded-[25px_25px_0_25px] flex flex-col items-center  pt-7 ">
              <div className="card-image relative h-40 w-40 p-1 ">
                <img
                  className="card-img w-full h-full object-cover rounded-full border-[6px] border-[#478fee]"
                  src={pcgame}
                  alt=""
                />
              </div>
            </div>
            <div className="card-content flex flex-col items-center  pt-4 pb-8 px-14">
              <h2 className="name text-lg font-medium "> Farhat</h2>
              <p className="desc text-center text-sm">Front-End </p>
            </div>
            <div
              className=" grid grid-rows-1 grid-cols-3  bg-white pb-[18px] pt-[14px] rounded-b-[25px] group-hover:bg-[#478fee]
              text-2xl "
            >
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center ">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-[#478fee] group-hover:text-white cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="group  w-[7cm] h-[9cm] shadow-md bg-[#eff6ff] rounded-[25px] ">
            <div className="image-content  relative  rounded-[25px_25px_0_25px] flex flex-col items-center  pt-7 ">
              <div className="card-image relative h-40 w-40 p-1 ">
                <img
                  className="card-img w-full h-full object-cover rounded-full border-[6px] border-[#478fee]"
                  src={pcgame}
                  alt=""
                />
              </div>
            </div>
            <div className="card-content flex flex-col items-center  pt-4 pb-8 px-14">
              <h2 className="name text-lg font-medium "> Anis </h2>
              <p className="desc text-center text-sm">Front-End </p>
            </div>
            <div
              className=" grid grid-rows-1 grid-cols-3  bg-white pb-[18px] pt-[14px] rounded-b-[25px] group-hover:bg-[#478fee]
              text-2xl "
            >
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center ">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-[#478fee] group-hover:text-white cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          {' '}
          <div className="group  w-[7cm] h-[9cm] shadow-md bg-[#eff6ff] rounded-[25px] ">
            <div className="image-content  relative  rounded-[25px_25px_0_25px] flex flex-col items-center  pt-7 ">
              <div className="card-image relative h-40 w-40 p-1 ">
                <img
                  className="card-img w-full h-full object-cover rounded-full border-[6px] border-[#478fee]"
                  src={pcgame}
                  alt=""
                />
              </div>
            </div>
            <div className="card-content flex flex-col items-center  pt-4 pb-8 px-14">
              <h2 className="name text-lg font-medium "> Mouad </h2>
              <p className="desc text-center text-sm">Front-End </p>
            </div>
            <div
              className=" grid grid-rows-1 grid-cols-3  bg-white pb-[18px] pt-[14px] rounded-b-[25px] group-hover:bg-[#478fee]
              text-2xl "
            >
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center ">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-[#478fee] group-hover:text-white cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          {' '}
          <div className="group  w-[7cm] h-[9cm] shadow-md bg-[#eff6ff] rounded-[25px] ">
            <div className="image-content  relative  rounded-[25px_25px_0_25px] flex flex-col items-center  pt-7 ">
              <div className="card-image relative h-40 w-40 p-1">
                <img
                  className="card-img w-full h-full object-cover rounded-full border-[6px] border-[#478fee]"
                  src={pcgame}
                  alt=""
                />
              </div>
            </div>
            <div className="card-content flex flex-col items-center  pt-4 pb-8 px-14">
              <h2 className="name text-lg font-medium "> Wissal </h2>
              <p className="desc text-center text-sm">Front-End </p>
            </div>
            <div
              className=" grid grid-rows-1 grid-cols-3  bg-white pb-[18px] pt-[14px] rounded-b-[25px] group-hover:bg-[#478fee]
              text-2xl "
            >
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#478fee] group-hover:text-white cursor-pointer"
                />
              </div>
              <div className=" flex justify-center ">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-[#478fee] group-hover:text-white cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Team;
