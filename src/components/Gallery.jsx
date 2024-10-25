const Gallery = () => {
    const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];
    return (
      <section id="gallery" className="py-20">
        <h2 className="text-center text-3xl mb-8">Gallery</h2>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden">
              <img src={image} alt={`Gallery ${index + 1}`} className="hover:scale-110 transform transition duration-300"/>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Gallery;
  