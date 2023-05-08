import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="App">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home />
      <About />
      <Skills />
      <Resume />
    </div>
  );
}

export default App;
