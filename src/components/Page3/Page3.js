import Navbar from "../Home/Navbar/Navbar";
import Leftsidebar from "../Page2/Left-sidebar/Leftsidebar";
import Rightsidebar from "../Page2/Right-sidebar/Rightsidebar";
import UpdatedImage from "./UpdatedImage";

const Page3 = () => {
  return (
    <>
      <Navbar />
      <div class="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-1">
        <div class="...">
          <Leftsidebar />
        </div>

        <div class="col-span-3 ...">
          <UpdatedImage />
        </div>
        <div class="...">
          <Rightsidebar />
        </div>
      </div>
    </>
  );
};

export default Page3;
