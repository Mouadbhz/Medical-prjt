import Image from "next/image";

interface GameProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const GameSite = ({ backgroundImage, title, subtitle}: GameProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-white p-4">
          <Image
            src="/manette.png"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>
     </div>
    </div>
  )
}

const Game = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <GameSite 
          backgroundImage="bg-bg-img-1"
          title="Gaming & Dopamine Levels"
          subtitle="Playing video games releases the same amounts of dopamine as when you take drugs like ecstasy. "
        />
        <GameSite 
          backgroundImage="bg-bg-img-2"
          title="Gaming & The prefrontal cortex of the brain"
          subtitle="playing violent video games for just 30 minutes, immediately lowered activity in the prefrontal cortex compared to the brains of those who played non-violent video games."
        />
      </div>

      <div className="flexEnd space-around  mt-10 px-8 pt-60 lg:-mt-60 lg:mr-6">
        <div className="bg-blue-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-18 xl:regular-20 mt-5 text-white">
         You’re here because you want real results. <br /> <strong>ALPHA AI</strong> is your guide to overcome your gaming problem and start living a life you’re proud of.         </p>
          <Image 
            src="/quote.svg"
            alt="Game-2"
            width={186}
            height={219}
            className="Game-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Game