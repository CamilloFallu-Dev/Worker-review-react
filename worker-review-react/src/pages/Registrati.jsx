import Information from "../components/Information";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/global/globalSlice";
import { useRegisterMutation } from "../services/apiService";
import toast from "react-hot-toast";
import { useEffect } from "react";

function Registrati() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.global.user) || {};
  const [register, { isLoading, error }] = useRegisterMutation();

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

  const onRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await register({
        name: user.nome,
        surname: user.cognome,
        email: user.email,
        password: user.password,
      }).unwrap();
      localStorage.setItem("user", JSON.stringify(response));
      dispatch(setUser(response));
      toast.success("Registrazione riuscita!");
    } catch (err) {
      toast.error("Errore nella registrazione");
    }
  };

  return (
    <div>
      <div className="relative bg-green-600 py-16">
        <div className="absolute inset-0">
          <img
            src="/registrati.jpg"
            alt="LAVORATORE-IMAGE"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-green-950 opacity-50"></div>
        </div>
        <div className=" relative text-center text-white">
          <h1 className="text-4xl font-bold">Worker Review</h1>
          <h2 className="text-xl mt-2">
            Registrati e condividi con la community le tue esperienze
          </h2>
        </div>
        <div className="relative bg-white border-1 border-gray-400 rounded-lg p-6 w-72 mx-auto mt-12 shadow-2xl">
          <form onSubmit={onRegister}>
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              defaultValue={user.nome}
              onChange={handleChange}
              placeholder="Nome"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <label>Cognome</label>
            <input
              type="text"
              name="cognome"
              defaultValue={user.cognome}
              onChange={handleChange}
              placeholder="Cognome"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              defaultValue={user.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="bg-green-600 w-full rounded-lg py-2 text-white hover:bg-green-700 cursor-pointer"
            >
              {isLoading ? "Registrazione..." : "Registrati"}
            </button>
            {error && (
              <p className="text-red-500 text-sm mt-2">
                Errore: {error.data?.message || "Qualcosa è andato storto"}
              </p>
            )}
          </form>
        </div>
      </div>
      <Information />
    </div>
  );
}

export default Registrati;
