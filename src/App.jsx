import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/portfolio">
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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
