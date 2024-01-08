import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Billing from "./pages/Billing";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <>
      <div id="container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
        {/* <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/billing"
            element={
              // Use conditional rendering directly in the element prop
              localStorage.getItem("user") ? (
                <Billing />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              // Use conditional rendering directly in the element prop
              localStorage.getItem("user") ? (
                <DashBoard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
