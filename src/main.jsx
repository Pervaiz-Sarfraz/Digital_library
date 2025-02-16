import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./pages/Home";
import BookDetails from "./components/BookList/Bookdetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { DarkModeProvider } from "./context/context";
import Noval from "./components/Novel";
import Detail from "./pages/Detail";
import Layout from "./Layout";
import Engineering from "./components/Engineering";
import Educational from "./components/Educational";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <DarkModeProvider>
      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<Detail />} />
            <Route path="/novel" element={<Noval />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/educational" element={<Educational />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/noval" element={<Noval />} />
        </Routes>
      </Router>
      </AuthProvider>
    </DarkModeProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>
);
