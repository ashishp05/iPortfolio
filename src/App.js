import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Element } from "react-scroll";

function App() {
  return (
    <main className="flex lg:flex-row flex-col w-full bg-richblack-25 lg:bg-black  " >
             <div>  <Navbar/></div>
        <Routes>
          <Route path="/" element={<Home/>} />
         
        </Routes>
        
    </main>
  );
}

export default App;
