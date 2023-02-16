import { Link } from "react-router-dom";
import "./banner.css";
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const Banner = () => {
  return (
    <div className=" bg-light-black" style={{ height: "100vh" }}>
      <div className="container mx-auto ">
        <div className="grid sm:grid-cols-1   gap-6">
          <div className="lg:h-40 lg:w-full text-white border-double border-2 pl-5 pt-3 mt-0">
            <div className="lg:flex">
              <p className="text-4xl mr-5 font-semibold">Retouch.ai</p>
              <p>
                <i class="fa-solid mt-4 fa-location-dot"></i> Dhaka,Bangladesh
              </p>
            </div>
            <p className="mt-3">Best Photo Retouching Services</p>
            <div className="flex mt-3 ">
              <button className="rounded-md mr-6 bg-white hover:bg-black hover:text-white text-black text-sm px-2">
                Follow
              </button>
              <button>
                <FaFacebookSquare className="h-6 w-6 mr-2 hover:text-blue-500"></FaFacebookSquare>
              </button>
              <button>
                <FaTwitter className="h-6 w-6 mr-2 hover:text-blue-500"></FaTwitter>
              </button>
              <button>
                <FaLinkedin className="h-6 w-6 hover:text-blue-500"></FaLinkedin>
              </button>
            </div>
          </div>
          <div className="lg:ml-60">
            <p
              className="text-white "
              style={{
                paddingBottom: "0",

                fontWeight: "700",
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              START HERE
            </p>
            <div className="text-center ">
              <Link to="/file-uploads">
                <button
                  className="rounded-lg font-bold text-white justify-center bg-black hover:text-black hover:bg-white "
                  id="btn-up"
                >
                  UPLOAD
                </button>
              </Link>
              <br />
              <br />
              <div className="flex gap-24">
                <div className="lg:-ml-36 mr-2 md:flex lg:flex  lg:mt-10  lg:gap-5">
                  <button className="rounded-full h-20 w-20 font-semibold bg-emerald-100 text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 border-b-4 border-gray-400 hover:border-b-2 bg-gradient-to-t from-gray-600   shadow-lg to-gray-700  hover:translate-y-px">
                    Liquify
                  </button>
                  <button className="rounded-full h-20 w-20 font-semibold bg-emerald-100 text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 border-b-4 border-gray-400 hover:border-b-2 bg-gradient-to-t from-gray-600   shadow-lg to-gray-700  hover:translate-y-px">
                    Recolor
                  </button>
                  <button className="rounded-full h-20 w-20 font-semibold bg-emerald-100 text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 border-b-4 border-gray-400 hover:border-b-2 bg-gradient-to-t from-gray-600   shadow-lg to-gray-700  hover:translate-y-px">
                    Clipping
                  </button>
                  <button className="rounded-full  h-20 w-20  font-semibold bg-emerald-100 text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 border-b-4 border-gray-400 hover:border-b-2 bg-gradient-to-t from-gray-600   shadow-lg to-gray-700  hover:translate-y-px">
                    Masking
                  </button>
                </div>
                <button id="btn-aic" className="text-white text-2xl">
                  AI-Professionals Collaboration
                </button>
              </div>

              <p className="text-white text-lg mt-3">
                Obtain Services at a Lower Cost with{" "}
                <strong className="text-white">
                  <u>AI-Professionals Collaboratio</u>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
