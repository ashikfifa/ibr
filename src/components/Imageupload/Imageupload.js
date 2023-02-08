import React, { useContext, useState } from "react";
import { FileContextManager } from "../../App";
import './style.css';

function Imageupload() {
  const [currentPage, setCurrentPage] = useState(1);
  const [fileInfo, setFileInfo] = useState([]);
  const [imageShow, setImageShow] = useState([]);
  const [getMainFile, setMainFile] = useContext(FileContextManager);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = imageShow.slice(indexOfFirstItem, indexOfLastItem);

  

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

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

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
          disabled={currentPage === Math.ceil(imageShow.length / itemsPerPage)}
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
      </>}
    </div>
  );
}

export default Imageupload;
