import React, { useContext, useState } from "react";
import { FileContextManager } from "../../../App";
import './style.css';

const MiddleImage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [fileInfo, setFileInfo] = useState([]);
  const [imageShow, setImageShow] = useState([]);
  const [getMainFile, setMainFile] = useContext(FileContextManager);

  const images = [
    "https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg",
    "https://pusat.edu.np/wp-content/uploads/2022/09/default-image.jpg",
    "https://pusat.edu.np/wp-content/uploads/2022/09/default-image.jpg",
    "https://pusat.edu.np/wp-content/uploads/2022/09/default-image.jpg",
    "https://pusat.edu.np/wp-content/uploads/2022/09/default-image.jpg",
    "https://pusat.edu.np/wp-content/uploads/2022/09/default-image.jpg",
    "https://pusat.edu.np/wp-content/uploads/2022/09/default-image.jpg",
    "https://pusat.edu.np/wp-content/uploads/2022/09/default-image.jpg",
    "https://pusat.edu.np/wp-content/uploads/2022/09/default-image.jpg",
    "https://pusat.edu.np/wp-content/uploads/2022/09/default-image.jpg"
  ];
  const imagesPerPage = 3;
  const totalPages = Math.ceil(imageShow.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = imageShow.slice(startIndex, endIndex);


  const uploadFl = (e) => {
    const newFile = e.target.files;

    setMainFile(newFile);
    for (const file of newFile) {
      if(file.type == 'image/jpeg' || file.type == 'image/png'){
        setFileInfo(fileInfo => [...fileInfo, file])
        const imageUrl = URL.createObjectURL(file)
        setImageShow(imageShow => [...imageShow, imageUrl])
      }
    };
  }

  const processImagesAi = ()=>{
    console.log(getMainFile)
    let input = fileInfo
    console.log(input[0])
    let data = new FormData()
    data.append('order_no', '12455')
    data.append('file_path', 'myimage/path/')
    data.append('api_key', 'Agfd11384HSOTITYH@84584DHFDgsdg3746$$FGDSF7hgdh')
    data.append('file', input[0])
    data.append('return_public_url', 'True')
    data.append('output_format', 'png')

    fetch('http://27.147.191.97:8008/upload', {
        method: 'POST',
        body: data
    })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            if (err) {
                console.log(err)
            }
        })
  }

  return (
    <div id="middleImageWrap">

      {
        imageShow.length == 0 &&
        <div id="uploadBtn">
          <input 
          onChange={uploadFl}
          type="file" 
          id="filepicker" 
          name="fileList" 
          directory="" 
          webkitdirectory="" 
          accept="image/png"
          />
        </div>
      }
      {
        imageShow.length > 0 &&
        <>
          <div className="flex flex-wrap">
            {currentImages.map((imageUrl, index) => (
              <div className="w-2/6" key={index}>
                <img src={imageUrl} alt={imageUrl} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <p className="text-center">
              Page {currentPage} of {totalPages}
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>

          <div className="flex justify-center">
            <button onClick={processImagesAi} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Process
            </button>
          </div>
        </>}
    </div>
  );
};

export default MiddleImage;
