import React, { useState } from "react";
import hoody from "./img/hoody.jpg";
import { BiShow, BiDownload } from "react-icons/bi";
import ReactCompareImage from "react-compare-image";
import "./page3.css";
const ViewDwnld = () => {
  const [isImageVisible, setImageVisibility] = useState(false);
  const before =
    "//cdn.shopify.com/s/files/1/0195/1065/7124/files/34_651f3a4a-f372-4083-81c8-54fe9d68c639.png?v=1647164471";

  const after =
    "//cdn.shopify.com/s/files/1/0195/1065/7124/files/35_4935cf4f-a51b-4f8f-b683-efc3a20b3499.png?v=1647164471";

  const handleViewClick = () => {
    setImageVisibility(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseClick = () => {
    setImageVisibility(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div>
      {isImageVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9,
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ReactCompareImage
            hover={true}
            vertical={false}
            leftImage={before}
            rightImage={after}
          />

          <button
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              backgroundColor: "white",
              border: "none",
              padding: "10px 15px",
            }}
            onClick={handleCloseClick}
          >
            Close
          </button>
        </div>
      )}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
        <div class="col-span-3 ...">
          <BiShow
            className="h-8 w-8 opacity-40"
            onClick={handleViewClick}
            style={{ cursor: "pointer" }}
          ></BiShow>
        </div>
        <div className="...">
          <a href={hoody} download>
            <BiDownload className="h-7 w-7 opacity-40"></BiDownload>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ViewDwnld;
