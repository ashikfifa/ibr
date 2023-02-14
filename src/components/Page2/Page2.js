import Navbar from "../Home/Navbar/Navbar";
import Toggle from "../Toggle/Toggle";
import Imageupload from "./Imageupload/Imageupload";

import Leftsidebar from "./Left-sidebar/Leftsidebar";
import Rightsidebar from "./Right-sidebar/Rightsidebar";

function Page2() {
  return (
    <div className="Page2">
      <Navbar />
      <Toggle></Toggle>
      <div className="grid sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-1">
        <div className="...">
          <Leftsidebar />
        </div>

        <div className="col-span-3 ...">
          <Imageupload />
        </div>
        <div className="...">
          <Rightsidebar />
        </div>
      </div>
    </div>
  );
}

export default Page2;
