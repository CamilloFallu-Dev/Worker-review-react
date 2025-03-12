// import { useState } from "react";
import { Link } from "react-router-dom";
import logoWR from "/public/logoWR.png";

export default function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // const closeMenu = () => {
  //   setIsMenuOpen(false);
  // };
  // onClick={toggleMenu}
  return (
    <div className="flex justify-between items-center p-2">
      <Link to="/" className="flex justify-center items-center font-bold">
        <img src={logoWR} alt="Logo" className="w-20 h-auto" />
      </Link>
      {/* <button className="text-3xl cursor-pointer">
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
      </button> */}
      <div className="flex justify-between items-center gap-5 p-2 bg-white">
        <div className="hidden md:flex gap-5">
          <Link to="/" className="hover:bg-green-200 p-2 rounded-lg">
            Home
          </Link>
          <Link to="/search" className="hover:bg-green-200 p-2 rounded-lg">
            Aziende
          </Link>
          <Link to="/contact" className="hover:bg-green-200 p-2 rounded-lg">
            Contatti
          </Link>
          <Link
            to="/login"
            className="bg-green-600 hover:bg-green-200 p-2 rounded-lg"
          >
            <button>Accedi</button>
          </Link>
          <Link
            to="/register-company"
            className="bg-black hover:bg-green-200 hover:text-black text-white p-2 rounded-lg"
          >
            <button>Registra Azienda</button>
          </Link>
          <Link
            to="/register"
            className="bg-black hover:bg-green-200 hover:text-black text-white p-2 rounded-lg"
          >
            <button>Registrati</button>
          </Link>
        </div>

        {/* <button className="text-3xl lg:hidden">
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
      </div> */}
        {/* {isMenuOpen && (
        <div className="fixed inset-0 bg-transparent z-50" onClick={closeMenu}>
          <div
            className="bg-white w-3/4 sm:w-1/2 md:w-1/3 p-5 m-auto rounded-lg mt-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-5">
              <Link
                to="/"
                className="hover:bg-green-200 p-2 rounded-lg"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/search"
                className="hover:bg-green-200 p-2 rounded-lg"
                onClick={closeMenu}
              >
                Aziende
              </Link>
              <Link
                to="/contact"
                className="hover:bg-green-200 p-2 rounded-lg"
                onClick={closeMenu}
              >
                Contatti
              </Link>
              <Link
                to="/login"
                className="bg-green-600 hover:bg-green-200 p-2 text-center rounded-lg"
                onClick={closeMenu}
              >
                <button>Accedi</button>
              </Link>
              <Link
                to="/register-company"
                className="bg-black hover:bg-green-200 hover:text-black text-white text-center p-2 rounded-lg"
                onClick={closeMenu}
              >
                <button>Registra Azienda</button>
              </Link>
              <Link
                to="/register"
                className="bg-black hover:bg-green-200 hover:text-black text-white text-center p-2 rounded-lg"
                onClick={closeMenu}
              >
                <button>Registrati</button>
              </Link> */}
      </div>
    </div>
    // </div>
    // )}
    // </div>
  );
}
