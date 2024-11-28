import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';

// import alpha from '../images/alpha.jpg';
import alpha from '../../../public/assets/about-us-img/alpha.jpg';


const Contact = () => (
    <div className="w-full h-full  ">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 pt-2">
        <div className="md:col-span-1 border-4 border-[#478fee] rounded-[12px] py-4 mx-[2px] ">
          <div className="flex justify-center ">
            <img className="h-16 " src={alpha} alt="" />
          </div>
          <div className="px-[80px] py-6">
            <h3 className="text-xl font-bold pb-3 ">Contacts:</h3>
            <div className="flex">
              <FontAwesomeIcon icon={faLocationDot} />
              <h2 className="text-[#478fee] font-semibold px-2">Adress:</h2>
            </div>
            <p className="">Constantine</p>
            <div className="flex">
              <FontAwesomeIcon className="" icon={faPhone} />
              <h2 className="text-[#478fee] font-semibold px-2 ">Phone:</h2>
            </div>
            <p className="">+213 77689457</p>
            <div className="flex">
              <FontAwesomeIcon className="" icon={faEnvelope} />
              <h2 className=" text-[#478fee] font-semibold px-2 ">Email:</h2>
            </div>
            <p className="">alphaia@gmail.com</p>
          </div>
        </div>

        <div className="md:col-span-3 relative ">
          <iframe
            title="Google Maps"
            className="w-full h-[350px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.7301244445334!2d6.567431374736807!3d36.246049272410204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1655aaa0d63ab%3A0xa80cc72a9da3c77b!2sUniversity%20of%20Constantine%202%20-%20Abdelhamid%20Mehri!5e0!3m2!1sen!2sdz!4v1699616612206!5m2!1sen!2sdz"
            width="800"
            height="600"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );

export default Contact;
