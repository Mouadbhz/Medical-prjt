import React from 'react'

const Guide = () => (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <img src="/favicon.png" alt="brain" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-blue-500">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="regular-16 text-black xl:max-w-[520px]">
Reflect on gaming habits, setting intentions for change. Break the recovery into small goals, celebrating victories. Join a supportive community for understanding and advice. Foster healthy habits to replace gaming activities. Regularly assess progress with technology and professional guidance for a continuous path to recovery.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <img 
          src="/gaming-affects-the-brain.png"
          alt=""
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <img 
            src="/meter.jpg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-blue-500">Destination</p>
                <p className="bold-16 text-blue-500">weeks</p>
              </div>
              <p className="bold-20 mt-2"> normal and happy life </p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-blue-500">Start your way</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">lost & addiction</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )


export default Guide