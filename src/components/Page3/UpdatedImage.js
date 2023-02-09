import hoody from "./img/hoody.jpg";
import ViewDwnld from "./ViewDwnld";

const UpdatedImage = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-1">
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
          <a href="#">
            <img className="rounded-t-lg" src={hoody} alt="" />
          </a>
          <div className="p-3">
            <ViewDwnld />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatedImage;
