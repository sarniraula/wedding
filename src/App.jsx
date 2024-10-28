import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import RSVP from './components/RSVP';
import Ourstory from './components/Ourstory';
import Countdown from './components/Countdown';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Events />
      <Ourstory />
      <Countdown />
      <RSVP />
    </div>
  );
}

export default App;
