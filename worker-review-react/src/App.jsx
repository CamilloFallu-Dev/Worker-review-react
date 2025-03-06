import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PaginaAzienda from "./pages/PaginaAzienda";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagina-azienda" element={<PaginaAzienda />} />
      </Routes>
      <Footer />
    </div>
  );
}
