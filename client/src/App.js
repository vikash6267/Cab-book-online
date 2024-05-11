import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import Contact from "./Pages/Contact";


// public and private route 
import OpenRoute from "./components/Admin/auth/OpenRoute"
import PrivateRoute from "./components/Admin/auth/PrivateRoute"
import Login from "./components/Admin/Login";
import Dashboard from "./components/Admin/Sidebar/Dashboard";
import AllCab from "./components/Admin/Sidebar/AllCab";
import AddCab from "./components/Admin/Sidebar/AddCab";
import Whatsapp from "./components/Whatsapp";
import Call from "./components/Call";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cabs, setCabs] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cab-book-online.onrender.com/api/v1/admin/get"
        );
        console.log(response.data.cabs);
        setCabs(response.data.cabs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <>

      <Routes>
        <Route index path="/" element={<Home cabs={cabs} />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/models" element={<Models />} />

        <Route
          path="/admin/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route
            path="/admin/all-cab"
            element={
              <PrivateRoute>
                <AllCab />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/add-car"
            element={
              <PrivateRoute>
                <AddCab />
              </PrivateRoute>
            }
          />
          {/*
          <Route
            path="/admin/add-service"
            element={
              <PrivateRoute>
                <AddService />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/all-offers"
            element={
              <PrivateRoute>
                <AllOffer />
              </PrivateRoute>
            }
          /> */}
          {/* <Route
            path="/admin/all-service"
            element={
              <PrivateRoute>
                <AllService />
              </PrivateRoute>
            }
          /> */}
        </Route>
      </Routes>

      <div className="fixed bottom-20 md:right-10 right-10 z-50">
    <Whatsapp />

      </div>


      <div className="fixed bottom-44 md:right-10 right-10 z-50">
    <Call />

      </div>
    </>
  );
}

export default App;
