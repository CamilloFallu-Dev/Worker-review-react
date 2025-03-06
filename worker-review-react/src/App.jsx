import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PaginaAzienda from "./pages/PaginaAzienda";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PaginaRicercaAziende from "./pages/PaginaRicercaAziende";
import PaginaContatti from "./pages/PaginaContatti";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagina-azienda" element={<PaginaAzienda />} />
        <Route
          path="/pagina-ricerca-aziende"
          element={<PaginaRicercaAziende />}
        />
        <Route path="/pagina-contatti" element={<PaginaContatti />} />
      </Routes>
      <Footer />
    </div>
  );
}
