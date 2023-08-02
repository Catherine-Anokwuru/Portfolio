import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <ToastContainer
          position="top-center"
          pauseOnHover={false}
          pauseOnFocusLoss={false}
        />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
