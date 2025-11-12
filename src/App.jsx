import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Place3DPage from "./pages/Place3DPage";
import Navbar from "./components/Navbar";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen text-[#fffae6] overflow-hidden fade-bg">
        <div className="overlay-bg"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place/:id" element={<Place3DPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
