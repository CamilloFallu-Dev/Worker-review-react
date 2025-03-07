import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PaginaAzienda from "./pages/PaginaAzienda";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PaginaRicercaAziende from "./pages/PaginaRicercaAziende";
import PaginaContatti from "./pages/PaginaContatti";
import Formlogin from "./pages/Formlogin";
import Registrati from "./pages/Registrati";
import Registrazioneazienda from "./pages/Registrazioneazienda";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Formlogin />} />
        <Route path="/register" element={<Registrati />} />
        <Route path="/register-company" element={<Registrazioneazienda />} />
        <Route path="/company-page" element={<PaginaAzienda />} />
        <Route path="/search" element={<PaginaRicercaAziende />} />
        <Route path="/contact" element={<PaginaContatti />} />
      </Routes>
      <Footer />
    </div>
  );
}
