import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/global/globalSlice";
import { useLazyLoginQuery, useRegisterMutation } from "../services/apiService";
import toast from "react-hot-toast";
import ChiSiamo from "../components/ChiSiamo";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.global);

  const [triggerLogin, { isFetching }] = useLazyLoginQuery();
  const [register] = useRegisterMutation();

  useEffect(() => {
    if (!user && localStorage.getItem("user")) {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      dispatch(setUser(savedUser)); 
    }
  }, [dispatch, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email" || name === "password") {
      dispatch(setUser({ ...user, [name]: value }));
    }
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await triggerLogin({
        email: user?.email || "",
        password: user?.password || "",
      }).unwrap();

      console.log("Risposta dal server:", response); 

      if (response.length === 1) { // Salva l'utente nel localStorage solo dopo un login riuscito
        dispatch(setUser(response[0]));
        localStorage.setItem("user", JSON.stringify(response[0]));
        toast.success("Login riuscito!");
        navigate(`/profile/${response[0].id}`);
      } else {
        toast.error("Email o password errate");
      }
    } catch (err) {
      toast.error("Errore durante il login");
    }
  };

  return (
    <div>
      <div className="relative bg-green-600 py-16">
        <div className="absolute inset-0">
          <img
            src="/login.jpg"
            alt="LAVORATORE-IMAGE"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-green-950 opacity-50"></div>
        </div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold">Worker Review</h1>
          <h2 className="text-xl mt-2">Accedi ed inizia a recensire</h2>
        </div>

        <div className="relative bg-white border-1 border-gray-400 rounded-lg p-6 w-72 mx-auto mt-12 shadow-2xl">
          <form onSubmit={onLogin}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user?.email || ""}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user?.password || ""}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-green-600 w-full rounded-lg py-2 text-white hover:bg-green-700 cursor-pointer"
              disabled={isFetching}
            >
              {isFetching ? "Accesso in corso..." : "Accedi"}
            </button>
          </form>
          <p className="mt-4 text-center text-black-600 cursor-pointer">
            Non sei registrato? <Link to="/Register">Registrati</Link>
          </p>
        </div>
      </div>
      <ChiSiamo />
    </div>
  );
}

export default Login;
