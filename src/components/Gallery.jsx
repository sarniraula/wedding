import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import gallery7 from '../assets/gallery7.jpg';
import gallery8 from '../assets/gallery8.jpg';
import gallery9 from '../assets/gallery9.jpg';
import gallery10 from '../assets/gallery10.jpg';
import gallery11 from '../assets/gallery11.jpg';
import gallery12 from '../assets/gallery12.jpg';
import gallery13 from '../assets/gallery13.jpg';
import gallery14 from '../assets/gallery14.jpg';
import gallery15 from '../assets/gallery15.jpg';
import gallery16 from '../assets/gallery16.jpg';
import gallery17 from '../assets/gallery17.jpg';
import gallery18 from '../assets/gallery18.jpg';
import gallery19 from '../assets/gallery19.jpg';
import gallery20 from '../assets/gallery20.jpg';
import gallery21 from '../assets/gallery21.jpg';
import gallery22 from '../assets/gallery22.jpg';
import gallery23 from '../assets/gallery23.jpg';
import gallery24 from '../assets/gallery24.jpg';
import gallery25 from '../assets/gallery25.jpg';
import gallery26 from '../assets/gallery26.jpg';
import gallery27 from '../assets/gallery27.jpg';
import gallery28 from '../assets/gallery28.jpg';
import gallery29 from '../assets/gallery29.jpg';

const title = 'Prenup Photos';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const photos = [
    { id: 1, src: gallery1, alt: 'Photo 1', title: 'Photo 1' },
    { id: 2, src: gallery2, alt: 'Photo 2', title: 'Photo 2' },
    { id: 3, src: gallery3, alt: 'Photo 3', title: 'Photo 3' },
    // { id: 4, src: gallery4, alt: 'Photo 4', title: 'Photo 4' },
    // { id: 5, src: gallery5, alt: 'Photo 5', title: 'Photo 5' },
    // { id: 6, src: gallery6, alt: 'Photo 6', title: 'Photo 6' },
    { id: 7, src: gallery7, alt: 'Photo 7', title: 'Photo 7' },
    { id: 8, src: gallery8, alt: 'Photo 8', title: 'Photo 8' },
    { id: 9, src: gallery9, alt: 'Photo 9', title: 'Photo 9' },
    // { id: 10, src: gallery10, alt: 'Photo 10', title: 'Photo 10' },
    // { id: 11, src: gallery11, alt: 'Photo 11', title: 'Photo 11' },
    // { id: 12, src: gallery12, alt: 'Photo 12', title: 'Photo 12' },
    { id: 13, src: gallery13, alt: 'Photo 13', title: 'Photo 13' },
    // { id: 14, src: gallery14, alt: 'Photo 14', title: 'Photo 14' },
    // { id: 15, src: gallery15, alt: 'Photo 15', title: 'Photo 15' },
    // { id: 16, src: gallery16, alt: 'Photo 16', title: 'Photo 16' },
    // { id: 17, src: gallery17, alt: 'Photo 17', title: 'Photo 17' },
    { id: 18, src: gallery18, alt: 'Photo 18', title: 'Photo 18' },
    // { id: 19, src: gallery19, alt: 'Photo 19', title: 'Photo 19' },
    // { id: 20, src: gallery20, alt: 'Photo 20', title: 'Photo 20' },
    { id: 21, src: gallery21, alt: 'Photo 21', title: 'Photo 21' },
    // { id: 22, src: gallery22, alt: 'Photo 22', title: 'Photo 22' },
    // { id: 23, src: gallery23, alt: 'Photo 23', title: 'Photo 23' },
    // { id: 24, src: gallery24, alt: 'Photo 24', title: 'Photo 24' },
    // { id: 25, src: gallery25, alt: 'Photo 25', title: 'Photo 25' },
    { id: 26, src: gallery26, alt: 'Photo 26', title: 'Photo 26' },
    { id: 27, src: gallery27, alt: 'Photo 27', title: 'Photo 27' },
    // { id: 28, src: gallery28, alt: 'Photo 28', title: 'Photo 28' },
    { id: 29, src: gallery29, alt: 'Photo 29', title: 'Photo 29' },
  ]

  return (
    <section className="w-full max-w-6xl my-20 mx-auto p-4">
      {/* Title with Heart Icon */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <h2 className="text-4xl font-cursive2 font-semibold text-emerald-800">
          Prenup Photos
        </h2>
      </div>

      <div className='flex items-center gap-3 mb-24 justify-center'>
        <div className="h-1 w-16 bg-emerald-600"></div>
          <FaHeart className="text-emerald-600" size={20} />
        <div className="h-1 w-16 bg-emerald-600"></div>
      </div>

      {/* Description */}
      <div className="text-center mb-14 text-gray-700">
        <p className="text-lg text-justify leading-relaxed">
          Step into the charming streets of Shibuya and Shinjuku, where the couple's prenup session unfolds like a romantic tale. Each photograph is a loving narrative, set against the vibrant and iconic cityscapes, and masterfully captured by the gifted 
          <span className="text-emerald-700 font-bold"> @numeography</span>. Swing by their profile to see the couple's love story come to life amidst the hustle and bustle of these dynamic Tokyo districts.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
            onClick={() => handleImageClick(photo.src)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-lg text-white font-semibold">{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with Smaller Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative p-1 bg-white rounded-lg shadow-lg max-w-5xl w-full">
            <button
              className="absolute top-2 right-2 m-4 px-2 rounded-full bg-white bg-opacity-70 text-black text-xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
