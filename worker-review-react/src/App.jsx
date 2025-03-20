import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registrati from "./pages/Registrati";
import RegistrazioneAzienda from "./pages/Registrazioneazienda";
import PaginaAzienda from "./pages/PaginaAzienda";
import PaginaRicercaAziende from "./pages/PaginaRicercaAziende";
import PaginaContatti from "./pages/PaginaContatti";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registrati />} />
        <Route path="/register-company" element={<RegistrazioneAzienda />} />
        <Route path="/company-page/:companyName" element={<PaginaAzienda />} />
        <Route path="/search" element={<PaginaRicercaAziende />} />
        <Route path="/contact" element={<PaginaContatti />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
