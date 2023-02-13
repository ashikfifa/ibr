import React, { useContext, useState } from "react";
import { FileContextManager } from "../../../App";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import UpdatedImage from "../../Page3/UpdatedImage";

function Imageupload() {
  const [currentPage, setCurrentPage] = useState(1);
  const [fileInfo, setFileInfo] = useState([]);
  const [imageShow, setImageShow] = useState([]);
  const [imgUrl, setimgUrl] = useState();
  const [actionStatus, setActionStatus] = useState("");
  const [getAfterBeforeImg, setAfterBeforeImg] = useState([]);
  const [LoadProgress, setLoadProgress] = useState(0); 

  const [getMainFile, setMainFile] = useContext(FileContextManager);
  const itemsPerPage = 32;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = imageShow.slice(indexOfFirstItem, indexOfLastItem);

  const uploadFl = (e) => {
    const newFile = e.target.files;

    setMainFile(newFile);
    setFileInfo([]);
    setImageShow([]); 
    setLoadProgress(0); 
    setActionStatus("");

    let i = 0; 
    for (const file of newFile) {
      i++; 
      console.log(Math.round((100/newFile.length)*i))
      setLoadProgress(Math.round((100/newFile.length)*i)); 

      if (file.type == "image/jpeg" || file.type == "image/png") {
        setFileInfo((fileInfo) => [...fileInfo, file]);
        const imageUrl = URL.createObjectURL(file);
        setImageShow((imageShow) => [...imageShow, imageUrl]);
      }

    }
  };

  const uniqueOrderId = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const getFileType = (fileType) => {
    const fileTypeIs = fileType.type.split("/");
    return fileTypeIs[1];
  }
 

  const processImagesAi = () => {
    
    toast.success("Items Process Successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setActionStatus("process");

    // let input = fileInfo;
    let order_id = uniqueOrderId(7);

    myOwnLoop(order_id)
    /*
    fileInfo.map((img_file, index) => {
      debugger
      
      const filePath = img_file.webkitRelativePath;

      const imgType = getFileType(img_file);

      let data = new FormData();
      data.append("order_no", order_id);
      data.append("file_path", "filePath/psdfspd/");
      data.append("api_key", "Agfd11384HSOTITYH@84584DHFDgsdg3746$$FGDSF7hgdh");
      data.append("file", img_file);
      data.append("return_public_url", "True");
      data.append("output_format", "png");

      debugger
      
      //dataTransfer(data)

      /*
      fetch("http://27.147.191.97:8008/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((result) => {
          setAfterBeforeImg(getAfterBeforeImg => [...getAfterBeforeImg, result]);
          console.log(result);
        })
        .catch((err) => {
          if (err) {
            console.log(err);
          }
        });
    })
    */
  };

  
  const myOwnLoop = (order_id, p = 0) => {

    if (fileInfo.length > p) {

    const img_file = fileInfo[p]; 
    const filePath = img_file.webkitRelativePath;

    const imgType = getFileType(img_file);

    let data = new FormData();
    data.append("order_no", order_id);
    data.append("file_path", "filePath/psdfspd/");
    data.append("api_key", "Agfd11384HSOTITYH@84584DHFDgsdg3746$$FGDSF7hgdh");
    data.append("file", img_file);
    data.append("return_public_url", "True");
    data.append("output_format", "png");
    
    fetch("http://27.147.191.97:8008/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        setAfterBeforeImg(getAfterBeforeImg => [...getAfterBeforeImg, result]);
        console.log(result);
        console.log(p);
        myOwnLoop(order_id , p + 1)
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          myOwnLoop(order_id, p + 1)
        }
      });

    } else {
      console.log("have no data avaialble")
    }
  }

  const dataTransfer = async formData =>{
    debugger

    try {
      const response = await fetch("http://27.147.191.97:8008/upload", {
        method: "POST",
        body: formData
      });
      debugger
      const data = await response.json();
      setAfterBeforeImg(getAfterBeforeImg => [...getAfterBeforeImg, data]);
      console.log(data); 
    } catch (error) {
      console.error(error);
    }

  }
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
      <input
        onChange={uploadFl}
        type="file"
        id="filepicker"
        name="fileList"
        directory=""
        webkitdirectory=""
        accept="image/png"
      />

      {imageShow.length > 0 && actionStatus == "" && 
      <input
        onChange={uploadFl}
        type="file"
        id="filepicker"
        name="fileList"
        directory=""
        webkitdirectory=""
        accept="image/png"
      />
    }
      {imageShow.length > 0 && actionStatus == "" && (
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
                style={{ width: `${LoadProgress}%` }}
              >
                {LoadProgress}%
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={processImagesAi}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Process
            </button>
            <ToastContainer />
          </div>
        </>
      )}
      <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-1">
        {getAfterBeforeImg.length > 0 && actionStatus == "process" &&
          getAfterBeforeImg.map((data, index) =>
            <UpdatedImage afterBeforeImage={data} key={index} />
          )
        }
      </div>
    </div>
  );
}

export default Imageupload;
