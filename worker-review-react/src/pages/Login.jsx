import { Link } from "react-router-dom";
import ChiSiamo from "../components/ChiSiamo";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/global/globalSlice";
import { useLazyLoginQuery } from "../services/apiService";
import toast from "react-hot-toast";
import { useEffect } from "react";

function Login() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.global);
  const [login, { isLoading, error }] = useLazyLoginQuery();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      dispatch(setUser(JSON.parse(savedUser)));
    }
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setUser({ ...user, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await login({
        email: user.email,
        password: user.password,
      }).unwrap();
      if (response.length === 0) {
        toast.error("Errore nell'accesso");
        return;
      }

      console.log(response);
      localStorage.setItem("user", JSON.stringify(response));
      dispatch(setUser(response));
      toast.success("Accesso effettuato!");
    } catch (err) {
      toast.error("Errore nell'accesso");
    }
  };

  return (
    <div>
      {" "}
      <div className="relative bg-green-600 py-16">
        <div className="absolute inset-0">
          <img
            src="/login.jpg"
            alt="LAVORATORE-IMAGE"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-green-950 opacity-50"></div>
        </div>
        <div className=" relative text-center text-white">
          <h1 className="text-4xl font-bold">Worker Review</h1>
          <h2 className="text-xl mt-2">Accedi ed inizia a recensire</h2>
        </div>

        <div className=" relative bg-white border-1 border-gray-400 rounded-lg p-6 w-72 mx-auto mt-12 shadow-2xl">
          <form onSubmit={onLogin}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="bg-green-600 w-full rounded-lg py-2 text-white hover:bg-green-700 cursor-pointer"
            >
              {isLoading ? "Login..." : "Accedi"}
            </button>
            {error && (
              <p className="text-red-500 text-sm mt-2">
                Errore: {error.data?.message || "Qualcosa è andato storto"}
              </p>
            )}
          </form>
          <p className="mt-4 text-center text-black-600 cursor-pointer">
            Non sei registrato? <Link to="/Registrati">Registrati</Link>
          </p>
        </div>
      </div>
      <ChiSiamo />
    </div>
  );
}

export default Login;
