import banner from '../assets/banner10.jpg';

const RSVP = () => {
    return (
      <section 
        id="rsvp" 
        className="py-20 relative bg-fixed bg-cover" 
        style={{ backgroundImage: `url(${banner})` }}
      >

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-30 z-0"></div>

        {/* RSVP Form */}
        <form className="relative max-w-lg mx-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-md">
          <h2 className="text-center text-3xl text-gray-700 font-body2 tracking-widest mb-8">RSVP</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Will you attend?</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
        </form>
      </section>
    );
  }
  
  export default RSVP;
  