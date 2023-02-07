import React, { useState } from "react";

function Imageupload() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleImageChange = (event) => {
    const newImages = [...images];
    for (let i = 0; i < event.target.files.length; i++) {
      const imageUrl = URL.createObjectURL(event.target.files[i]);
      newImages.push(imageUrl);
    }
    setImages(newImages);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = images.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageChange} />
      <div className="flex flex-wrap">
        {currentImages.map((image, index) => (
          <div key={index} className="w-1/4 p-2">
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "200px",
                height: "200px",
                display: "inline-block",
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          disabled={currentPage === 1}
          className="cursor-pointer"
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          disabled={currentPage === Math.ceil(images.length / itemsPerPage)}
          className="cursor-pointer"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      <div className="flex justify-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Process
      </button>
    </div>
    </div>
  );
}

export default Imageupload;
