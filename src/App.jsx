import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import RSVP from './components/RSVP';
import Ourstory from './components/Ourstory';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import FAQs from './components/FAQs';
import DressCode from './components/Dresscode';
import Invitation from './components/Invitation';
import Map from './components/Map';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Events />
        <Map />
        {/* <DressCode /> */}
      <Invitation />
      <Ourstory />
      <Countdown />
      <Gallery />
      <FAQs />
      <RSVP />
    </div>
  );
}

export default App;
