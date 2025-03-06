import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PaginaAzienda from "./pages/PaginaAzienda";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Formlogin from "./pages/Formlogin";
import Registrati from "./pages/Registrati";
import Registrazioneazienda from "./pages/Registrazioneazienda";

export default function App() {
  return (
    <div className="max-w-100 mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Formlogin" element={<Formlogin/>}/>
        <Route path="/Registrati" element={<Registrati/>}/>
        <Route path="/Registrazioneazienda" element={<Registrazioneazienda/>}  />
        <Route path="/pagina-azienda" element={<PaginaAzienda />} />
      </Routes>
      <Footer />
    </div>
  );
}
