import { useState } from 'react';
import banner from '../assets/banner10.png';

const RSVP = () => {
  const [name, setName] = useState('');
  const [attend, setAttend] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = { name, attend };

    try {
      const response = await fetch("https://formcarry.com/s/q8gJirQW_Av", {
        method: 'POST',
        headers: { 
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.code === 200) {
        setSubmitted(true); // Show success message
      } else {
        setError(data.message || "Something went wrong, please try again.");
      }
    } catch (err) {
      setError(err.message || "Network error, please try again.");
    }
  };

  // Show success message after form submission
  if (submitted) {
    return (
      <div className="flex font-cursive2 text-emerald-600 text-4xl items-center justify-center mx-auto mb-20">
        <p>Thanks for confirming!</p>
      </div>
    );
  }

  return (
    <section 
      id="rsvp" 
      className="py-20 relative md:bg-fixed bg-cover bg-right" 
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-30 z-0"></div>

      {/* RSVP Form */}
      <form 
        onSubmit={handleSubmit} 
        className="relative max-w-lg mx-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-md"
      >
        <h2 className="text-center text-3xl text-gray-700 font-body2 tracking-widest mb-8">RSVP</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="mb-4 font-body2 tracking-wide">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4 font-body2 tracking-wide">
          <label htmlFor="attend" className="block text-gray-700">Will you attend?</label>
          <select 
            id="attend" 
            name="attend" 
            value={attend}
            onChange={(e) => setAttend(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default RSVP;
