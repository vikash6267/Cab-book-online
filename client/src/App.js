import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";


// public and private route 
import OpenRoute from "./components/Admin/auth/OpenRoute"
import Login from "./components/Admin/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route
          path="/admin/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
