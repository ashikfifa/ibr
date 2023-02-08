import hoody from "./img/hoody.jpg";
import ViewDwnld from "./ViewDwnld";

const UpdatedImage = () => {
  return (
    <>
      <div class="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-1">
        <div style={{ position: "relative" }}>
          <img src={hoody} style={{ position: "relative" }} />
          <input
            type="checkbox"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
          <ViewDwnld />
        </div>
      </div>
    </>
  );
};

export default UpdatedImage;
