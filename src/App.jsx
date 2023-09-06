import { Route, Routes } from "react-router-dom";
import { FloatButton } from "antd";

import HomePage from "./pages/HomePage/HomePage";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      <FloatButton.BackTop />
    </>
  );
}

export default App;
