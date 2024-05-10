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
import AddCab from "./components/Admin/Sidebar/AddCab";

function App() {
  return (
    <>

      <Routes>
        <Route index path="/" element={<Home />} />
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
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                {/* <Download /> */}
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
    </>
  );
}

export default App;
