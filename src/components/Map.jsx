import { GoogleMap, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 10.308966636657715, 
  lng: 123.89906311035156 
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  });

  const [directions, setDirections] = useState(null);

  useEffect(() => {
    if (!isLoaded) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: { lat: 10.308966636657715, lng: 123.89906311035156 }, // Ceremony Location (St. Patrick's Cathedral)
        destination: { lat: 10.324919700622559, lng: 123.93675994873047 }, // Reception Location (Bai Hotel Cebu)
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }, [isLoaded]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="relative md:w-1/2 mx-auto py-20 z-10">
      <h2 className="text-center text-4xl md:text-5xl text-secondary mb-8 font-cursive2">Get Directions</h2>

      <div className='flex items-center gap-3 mb-8 justify-center'>
        <div className="h-1 w-16 bg-emerald-600"></div>
          <FaHeart className="text-emerald-600" size={20} />
        <div className="h-1 w-16 bg-emerald-600"></div>
      </div>

      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
};

export default Map;
