import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";
import WordDetails from "./components/WordDetails";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/word/:word" element={<WordDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
