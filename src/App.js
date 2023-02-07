import Home from "./components/Home/Home";
import Page2 from "./components/Page2/Page2";
import Signup from "./components/Signup/Signup";
import Login from "./components/Signup/Login";
import { Routes, Route } from "react-router-dom";
import Imageupload from "./components/Imageupload";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Navigation />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/file-uploads" element={<Page2 />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/img-upload" element={<Imageupload />} />
      </Routes>
    </div>
  );
}

export default App;
