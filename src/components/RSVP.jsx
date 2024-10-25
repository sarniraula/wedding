const RSVP = () => {
    return (
      <section id="rsvp" className="py-20 bg-gray-100">
        <h2 className="text-center text-3xl mb-8">RSVP</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
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
  