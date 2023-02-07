import React, { useState } from "react";
import imgModel from "./img/modelimg.png";

const MiddleImage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://cutoutwiz.com/assets/images/view-professional-modern-camera-screen-tripod.jpg",
    { imgModel },
    "https://cutoutwiz.com/assets/images/view-professional-modern-camera-screen-tripod.jpg",
    "https://cutoutwiz.com/assets/images/view-professional-modern-camera-screen-tripod.jpg",
    "https://cutoutwiz.com/assets/images/view-professional-modern-camera-screen-tripod.jpg",
    "https://cutoutwiz.com/assets/images/view-professional-modern-camera-screen-tripod.jpg",
    "https://cutoutwiz.com/assets/images/view-professional-modern-camera-screen-tripod.jpg",
    "https://cutoutwiz.com/assets/images/view-professional-modern-camera-screen-tripod.jpg",
    "https://cutoutwiz.com/assets/images/view-professional-modern-camera-screen-tripod.jpg",
    // Add more images here
  ];

  return (
    <div className="container mx-auto mt-11">
      <div className="flex flex-wrap">
        {images.slice(currentImage, currentImage + 3).map((image, index) => (
          <img key={image} src={image} className="w-full sm:w-1/2 lg:w-1/3" />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="bg-gray-300 px-4 py-2"
          onClick={() =>
            setCurrentImage((currentImage - 1 + images.length) % images.length)
          }
        >
          Previous
        </button>
        <button
          className="bg-gray-300 px-4 py-2 ml-6"
          onClick={() => setCurrentImage((currentImage + 1) % images.length)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MiddleImage;
