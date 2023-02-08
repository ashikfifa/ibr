import Navbar from "../Home/Navbar/Navbar";
import Imageupload from "../Imageupload/Imageupload";
import Leftsidebar from "./Left-sidebar/Leftsidebar";
import Rightsidebar from "./Right-sidebar/Rightsidebar";

function Page2() {
  return (
    <div className="Page2">
      <Navbar />
      <div class="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-1">
        <div class="...">
          <Leftsidebar />
        </div>

        <div class="col-span-3 ...">
          <Imageupload />
        </div>
        <div class="...">
          <Rightsidebar />
        </div>
      </div>
    </div>
  );
}

export default Page2;
