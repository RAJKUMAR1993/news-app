import "./App.css";
import Nav from "./componets/Nav";
import FetchData from "./FetchData";
import Home from "./componets/Home";

import Footer from "./componets/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/general" element={<FetchData cat="general" />} />
          <Route path="/business" element={<FetchData cat="business" />} />
          <Route
            path="/entertainment"
            element={<FetchData cat="entertainment" />}
          />
          <Route path="/health" element={<FetchData cat="health" />} />
          <Route path="/science" element={<FetchData cat="science" />} />
          <Route path="/sports" element={<FetchData cat="sports" />} />
          <Route path="/technology" element={<FetchData cat="technology" />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
