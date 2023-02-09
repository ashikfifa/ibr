import React, { useContext, useState } from "react";
import { FileContextManager } from "../../../App";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function Imageupload() {
  const [currentPage, setCurrentPage] = useState(1);
  const [fileInfo, setFileInfo] = useState([]);
  const [imageShow, setImageShow] = useState([]);
  const [imgUrl, setimgUrl] = useState();
  const [getMainFile, setMainFile] = useContext(FileContextManager);
  const itemsPerPage = 32;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = imageShow.slice(indexOfFirstItem, indexOfLastItem);
  const uploadFl = (e) => {
    const newFile = e.target.files;

    setMainFile(newFile);
    for (const file of newFile) {
      if (file.type == "image/jpeg" || file.type == "image/png") {
        setFileInfo((fileInfo) => [...fileInfo, file]);
        const imageUrl = URL.createObjectURL(file);
        setImageShow((imageShow) => [...imageShow, imageUrl]);
      }
    }
  };

  const processImagesAi = () => {
    toast.success("Items Process Successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    console.log(getMainFile);
    let input = fileInfo;
    console.log(input[0]);
    let data = new FormData();
    data.append("order_no", "12455");
    data.append("file_path", "myimage/path/");
    data.append("api_key", "Agfd11384HSOTITYH@84584DHFDgsdg3746$$FGDSF7hgdh");
    data.append("file", input[0]);
    data.append("return_public_url", "True");
    data.append("output_format", "png");

    fetch("http://27.147.191.97:8008/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };
  const [showImage, setShowImage] = useState(false);

  const handleClose = () => {
    setShowImage(false);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const viewImg = (img) => {
    setimgUrl(img);
    setShowImage(true);
  };

  return (
    <div id="middleImageWrap " className="mt-1">
      {imageShow.length == 0 && (
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
      )}
      {imageShow.length > 0 && (
        <>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-8 gap-4">
            {currentImages.map((image, index) => (
              <div key={index}>
                <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
                  <div
                    onClick={() => viewImg(image)}
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      cursor: "pointer",
                      height: "80px",
                    }}
                  />
                  {showImage && (
                    <div
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 9,
                        background: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={imgUrl}
                        style={{ maxWidth: "90%", maxHeight: "90%" }}
                      />
                      <button
                        onClick={handleClose}
                        style={{
                          position: "absolute",
                          top: 20,
                          right: 20,
                          background: "white",
                          border: "none",
                          padding: "10px 15px",
                          borderRadius: "50%",
                          cursor: "pointer",
                        }}
                      >
                        X
                      </button>
                    </div>
                  )}
                </div>
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
              disabled={
                currentPage === Math.ceil(imageShow.length / itemsPerPage)
              }
              className="cursor-pointer"
              onClick={nextPage}
            >
              Next
            </button>
          </div>
          <div className="flex justify-center items-center mb-4 mr-10">
            <div class=" w-32 h-4 ml-10 bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: "45%" }}
              >
                {" "}
                45%
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Link to="/processed-img">
              <button
                onClick={processImagesAi}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Process
              </button>
            </Link>
            <ToastContainer />
          </div>
        </>
      )}
    </div>
  );
}

export default Imageupload;
