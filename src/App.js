import Home from "./components/Home/Home";
import Page2 from "./components/Page2/Page2";
import Page3 from "./components/Page3/Page3";
import Signup from "./components/Signup/Signup";
import Login from "./components/Signup/Login";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

export const FileContextManager = createContext();

function App() {
  const [getMainFile, setMainFile] = useState([]);

  return (
    <FileContextManager.Provider value={[getMainFile, setMainFile]}>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Navigation />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/file-uploads" element={<Page2 />} />
          <Route path="/processed-img" element={<Page3 />} />
          <Route path="/log-in" element={<Login />} />

          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </div>
    </FileContextManager.Provider>
  );
}

export default App;
