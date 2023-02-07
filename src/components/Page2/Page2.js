import Navbar from "../Home/Navbar/Navbar";
import Leftsidebar from "./Left-sidebar/Leftsidebar";
import MiddleImage from "./MiddleImage/MiddleImage";
import Rightsidebar from "./Right-sidebar/Rightsidebar";

function Page2() {
  return (
    <div className="Page2">
      <Navbar />
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
        <Rightsidebar />
        <MiddleImage />
        <Leftsidebar />
      </div>
    </div>
  );
}

export default Page2;
