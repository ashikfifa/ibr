import { Link } from "react-router-dom";
import "./banner.css";
import imgModel from "./img/recolor-02.png";
const Banner = () => {
  return (
    <div style={{ backgroundColor: "#e3f2f3", height: "100vh" }}>
      <div className="container mx-auto ">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="..">
            <div style={{ position: "" }}>
              {" "}
              <img src={imgModel} />
            </div>
          </div>
          <div className="..">
            <p
              style={{
                padding: "18%",
                paddingBottom: "0",
                color: "#125a31",
                fontWeight: "700",
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              START HERE
            </p>
            <div className="text-center">
              <Link to="/file-uploads">
                {" "}
                <button style={{ marginTop: "3%" }} id="btn-up">
                  Upload
                </button>
              </Link>
              <br />
              <br />
              <button id="btn-aic">AI-Professionals Collaboration</button>
              <p style={{ marginTop: "4%" }}>
                Obtain Services at a Lower Cost with{" "}
                <strong>
                  <u>AI-Professionals Collaboratio</u>
                </strong>
              </p>
              <div className="flex mt-10 ml-20 gap-6">
                <button className="rounded-full h-20 w-20  bg-emerald-100 text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 border-b-4 border-gray-600 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-400 shadow-lg to-gray-400  hover:translate-y-px">
                  Liquify
                </button>
                <button className="rounded-full h-20 w-20  bg-emerald-100 text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 border-b-4 border-gray-600 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-400 shadow-lg to-gray-400  hover:translate-y-px">
                  Recolor
                </button>
                <button className="rounded-full h-20 w-20  bg-emerald-100 text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 border-b-4 border-gray-600 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-400 shadow-lg to-gray-400  hover:translate-y-px">
                  Clipping
                </button>
                <button className="rounded-full h-20 w-20 bg-emerald-100 text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 border-b-4 border-gray-600 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-400 shadow-lg to-gray-400  hover:translate-y-px">
                  Masking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
