import { GoogleMap, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 40.712776, // Approximate latitude for starting point (ceremony location)
  lng: -74.005974 // Approximate longitude for starting point (ceremony location)
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  });

  const [directions, setDirections] = useState(null);

  useEffect(() => {
    if (!isLoaded) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: { lat: 40.712776, lng: -74.005974 }, // Ceremony Location (St. Patrick's Cathedral)
        destination: { lat: 40.730610, lng: -73.935242 }, // Reception Location (The Grand Ballroom)
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
      <h2 className="text-center text-4xl md:text-5xl mb-12 text-white font-cursive2">Get Directions</h2>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
};

export default Map;
