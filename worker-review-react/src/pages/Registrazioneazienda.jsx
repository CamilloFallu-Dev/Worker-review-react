import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/global/globalSlice";
import { useRegisterCompanyMutation } from "../services/apiService";
import toast, { Toaster } from "react-hot-toast";
import Information from "../components/Information";

function RegistrazioneAzienda() {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.global.company) || {};
  const [register, { isLoading, error }] = useRegisterCompanyMutation();

  useEffect(() => {
    const savedCompany = localStorage.getItem("company");
    if (savedCompany) {
      dispatch(setCompany(JSON.parse(savedCompany)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("Company", JSON.stringify(company));
  }, [company]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setCompany({ ...user, [name]: value }));
  };

  const onRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await register({
        nome: company.nome,
        sede: company.sede,
        settore: company.settore,
        email: company.email,
        password: company.password,
        descrizione: company.descrizione,
      }).unwrap();
      localStorage.setItem("company", JSON.stringify(response));
      dispatch(setCompany(response));
      toast.success("Registrazione riuscita!");
    } catch (err) {
      toast.error("Errore nella registrazione");
    }
  };

  return (
    <div>
      <Toaster position="center" reverseOrder={false} />
      <div className="relative bg-green-600 py-16">
        <div className="absolute inset-0">
          <img
            src="/registrazioneazienda.jpg"
            alt="LAVORATORE-IMAGE"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-green-950 opacity-50"></div>
        </div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold">Worker Review</h1>
          <h2 className="text-xl mt-2">Registra la tua azienda</h2>
        </div>

        <div className="relative bg-white border border-gray-400 rounded-lg p-6 w-72 mx-auto mt-12 shadow-2xl">
          <form onSubmit={onRegister}>
            <label>Nome azienda</label>
            <input
              type="text"
              name="nome"
              placeholder="Nome azienda"
              value={company.nome || ""}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />

            <label>Sede principale</label>
            <input
              type="text"
              name="sede"
              placeholder="Sede"
              value={company.sede || ""}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />

            <label>Settore</label>
            <input
              type="text"
              name="settore"
              placeholder="Settore"
              value={company.settore || ""}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={company.email || ""}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={company.password || ""}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />

            <label>Descrizione azienda</label>
            <textarea
              name="descrizione"
              placeholder="Scrivi qui..."
              value={company.descrizione || ""}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            ></textarea>

            <button
              type="submit"
              className="bg-green-600 w-full rounded-lg py-2 text-white hover:bg-green-700"
              disabled={isLoading}
            >
              {isLoading ? "Registrazione in corso..." : "Registra Azienda"}
            </button>

            {error && <p className="text-red-500 text-sm mt-2">Errore: {error.message}</p>}
          </form>
        </div>
      </div>
      <Information />
    </div>
  );
}

export default RegistrazioneAzienda;
