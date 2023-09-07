import { Route, Routes } from "react-router-dom";
import { FloatButton } from "antd";

import HomePage from "./pages/HomePage/HomePage";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import { WhatsAppOutlined } from "@ant-design/icons";

import "./App.css";

// #5680e9

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />

      <FloatButton.Group
        shape="circle"
        style={{
          right: 24,
        }}
      >
        <FloatButton
          icon={<WhatsAppOutlined />}
          style={{ backgroundColor: "#25D366" }}
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send/?phone=919606009079&text=Hi&type=phone_number&app_absent=0"
            );
          }}
        />
        <FloatButton.BackTop />
      </FloatButton.Group>
    </>
  );
}

export default App;
