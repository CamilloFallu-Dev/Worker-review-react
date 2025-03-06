import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PaginaAzienda from "./pages/PaginaAzienda";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="max-w-100 mx-auto"> 
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PaginaAzienda />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

