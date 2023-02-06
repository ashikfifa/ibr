import Home from "./components/Home/Home";
import Page2 from "./components/Page2/Page2";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Navigation />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/file-uploads" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
