import { Link } from "react-router-dom";
import logoWR from "../assets/logoWR.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <Link to="/home">
        <img src={logoWR} alt="Logo" className="w-10 h-auto" />
      </Link>
      <button className="text-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30"
          height="30"
        >
          <rect x="5" y="6" width="20" height="2" />
          <rect x="5" y="14" width="20" height="2" />
          <rect x="5" y="22" width="20" height="2" />
        </svg>
      </button>
    </nav>
  );
}
