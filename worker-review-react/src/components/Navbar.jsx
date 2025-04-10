import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoWR from "/public/logoWR.png";

export default function Navbar() {
  const user = useSelector((state) => state.global.user);  
  const isLoggedIn = user && user.email && user.password ? true : false;
  console.log("Navbar: isLoggedIn =", isLoggedIn, "user =", user);

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex">
        <Link
          to={isLoggedIn ? `/profile/${user.id}` : "/"}
          className="flex justify-center items-center font-bold"
        >
          <img src={logoWR} alt="Logo" className="w-20 h-auto" />
        </Link>
      </div>

      <div className="flex justify-between">
        <div className="flex justify-between items-center gap-5 p-2 bg-white">
          <div className="hidden md:flex gap-5">
            <Link
              to="/"
              className="hover:bg-green-600 hover:text-white p-2 rounded-lg text-sm flex justify-center items-center gap-2"
            >
              <div>Home</div>
            </Link>
            <Link
              to="/search"
              className="hover:bg-green-600 hover:text-white p-2 rounded-lg text-sm flex justify-center items-center gap-2"
            >
              <div>Aziende</div>
            </Link>
            <Link
              to="/contact"
              className="hover:bg-green-600 hover:text-white p-2 rounded-lg text-sm flex justify-center items-center gap-2"
            >
              <div>Contatti</div>
            </Link>
            <Link
              to="/register-company"
              className="hover:bg-green-600 hover:text-white p-2 rounded-lg text-sm flex justify-center items-center gap-2"
            >
              <div>Registra Azienda</div>
            </Link>
            {!isLoggedIn && (
              <>
                <Link
                  to="/register"
                  className="hover:bg-green-600 hover:text-white text-black p-2 rounded-lg text-sm flex justify-center items-center gap-2"
                >
                  <div>Registrati</div>
                </Link>
                <Link
                  to="/login"
                  className="hover:bg-green-600 hover:text-white p-2 rounded-lg text-sm flex justify-center items-center gap-2"
                >
                  <div>Accedi</div>
                </Link>
              </>
            )}
          </div>

          <div className="flex">
            {isLoggedIn && (
              <Link
                to={`/profile/${user.id}`}
                className="bg-green-600 hover:text-white text-black p-2 rounded-full flex justify-center items-center gap-2"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
