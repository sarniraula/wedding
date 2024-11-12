import { FaHeart } from 'react-icons/fa';
import banner from '../assets/banner5.png';

const Events = () => {
    const events = [
        { title: 'Ceremony', date: '3:30 PM', location:'242 D. Jakosalem St., Cogon Central Ramos, Cebu City', venue: "Archdiocesan Shrine of the Sacred Heart of Jesus" },
        { title: 'Cocktails and Reception', date: '6:00 PM', location: 'Ouano Ave. Cor. Seno Blvd, North Reclamation Area, Mandaue, 6014 Cebu City, Philippines', venue:'Bai Hotel Cebu' }
    ];

    return (
      <section 
        id="events" 
        className="pt-28 relative bg-fixed bg-center bg-cover" 
        style={{ backgroundImage: `url(${banner})` }}
      > 
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-center text-4xl md:text-5xl mb-8 text-white font-cursive2">Wedding Details</h2>

          <div className='flex items-center gap-3 mb-8 justify-center'>
            <div className="h-1 w-16 bg-white"></div>
              <FaHeart className="text-white" size={20} />
            <div className="h-1 w-16 bg-white"></div>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Vertical Timeline Line */}
            {/* <div className="absolute w-0.5 bg-gray-200 h-full left-1/2 transform -translate-x-1/2"></div> */}

            <ul className="timeline space-y-16 mb-20">
              {events.map((event, index) => (
                <li 
                  key={index} 
                  className={`relative flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Dot */}
                  {/* <div className="absolute w-2 h-2 bg-gray-100 rounded-full border-2 border-white left-1/2 transform -translate-x-1/2"></div> */}
                  
                  {/* Event Content */}
                  <div className="p-4 text-center font-body2 tracking-wider w-2/3 mx-auto text-white bg-opacity-50 bg-secondary rounded-md">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-md">{event.date}</p>
                    <p className="text-sm text-white">{event.venue}</p>
                    <p className="text-sm text-white">{event.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
};

export default Events;
