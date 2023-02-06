import Navbar from "../Home/Navbar/Navbar";
import Leftsidebar from "./Left-sidebar/Leftsidebar";
import Rightsidebar from "./Right-sidebar/Rightsidebar";

function Page2() {
  return (
    <div className="Page2">
      <Navbar />
      <Rightsidebar />

      <Leftsidebar />
    </div>
  );
}

export default Page2;
