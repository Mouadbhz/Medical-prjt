
import Image from 'next/image'
import Button from './Button'
const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/manette.png"
          alt="manette"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 text-blue-500 ">ALPHA AI</h1>
        <p className="regular-16 mt-4 text-black xl:max-w-[520px]">
        Is Gaming Taking Over Your Life? <br/> Discover a supportive journey to break free from video game addiction at ALPHA AI. Gain personalized insights into your gaming habits, receive predictive scores, and connect with expert guidance. We're here to help you find balance and foster a healthier relationship with gaming. <br/>Ready to take control of your gaming experience?      </p>


        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Get Started" 
            variant="btn_blue" 
          />
          <Button 
            type="button" 
            title="How we work?" 
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex pr-8 flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

        <div className="flex flex-col">
            <div className="flexBetween">
              <p className="bold-20 text-blue-500">Arrived safely !</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="regular-16 text-white">Celebrate this achievement.<br/> This is not just a destination <br/> it's a waypoint on your journey towards personal growth and well-being</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero