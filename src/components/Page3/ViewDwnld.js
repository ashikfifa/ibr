import React, { useState } from "react";
import hoody from "./img/hoody.jpg";
import "./page3.css";
const ViewDwnld = () => {
  const [isImageVisible, setImageVisibility] = useState(false);

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
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={hoody}
            alt="Your Image"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
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
      <div>
        <button className="viewbtn" onClick={handleViewClick}>
          View
        </button>
        <a href={hoody} download>
          <button className="dwnldbtn">Download</button>
        </a>
      </div>
    </div>
  );
};

export default ViewDwnld;
