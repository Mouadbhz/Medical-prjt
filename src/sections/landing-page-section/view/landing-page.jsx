import Hero from "../Hero.tsx";
import Game from "../Game.tsx";
import Guide from "../Guide.tsx";
import Features from "../Features.tsx";


export default function LandingPageView (){
  return(
    <>
    <Hero />
      <Game />
      <Guide />
      <Features />
    </>
  );
}