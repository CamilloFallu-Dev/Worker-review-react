import Information from "../components/Information";
import { useDispatch, useSelector } from "react-redux";
import { setCompany } from "../features/global/globalSlice";
import { useRegisterCompanyMutation } from "../services/apiService";
import toast from "react-hot-toast";
import { useEffect } from "react";

function RegistrazioneAzienda() {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.global.company) || {};
  const [registerCompany, { isLoading, error }] = useRegisterCompanyMutation();

  useEffect(() => {
    const savedCompany = localStorage.getItem("company");
    if (savedCompany) {
      dispatch(setCompany(JSON.parse(savedCompany)));
    }
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedCompany = { ...company, [name]: value };

    dispatch(setCompany(updatedCompany));
    localStorage.setItem("company", JSON.stringify(updatedCompany));
  };

  const onRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await registerCompany(company).unwrap();
      localStorage.setItem("company", JSON.stringify(response));
      dispatch(setCompany(response));
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
            {[
              { label: "Nome azienda", name: "name", type: "text" },
              { label: "Sede principale", name: "address", type: "text" },
              { label: "Settore", name: "workSector", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Password", name: "password", type: "password" },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label>{label}</label>
                <input
                  type={type}
                  name={name}
                  placeholder={label}
                  value={company[name] || ""}
                  onChange={handleChange}
                  className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                />
              </div>
            ))}

            <label>Descrizione azienda</label>
            <textarea
              name="description"
              placeholder="Scrivi qui..."
              value={company.description || ""}
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

export default RegistrazioneAzienda;
