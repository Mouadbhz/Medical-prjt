
import 'src/App.css';
import AboutUs from '../AboutUs'; 
import Coaching from '../Coaching';
import Team from '../Team';
import Contact from '../Contact';
import Mission from '../Mission';
import Builder from '../Builder';




export default function AboutUsView (){
  return(
    <>
 <AboutUs />
 <Team />
 <Mission />
 <Coaching />
<Builder />
<Contact />
 </>
  );
}