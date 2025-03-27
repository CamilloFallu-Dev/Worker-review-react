import { useState } from "react";
import Information from "../components/Information";

function RegistrazioneAzienda() {
  const [formData, setFormData] = useState({
    name: localStorage.getItem("azienda") || "",
    sede: localStorage.getItem("sede") || "",
    settore: localStorage.getItem("settore") || "",
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    descrizione: localStorage.getItem("descrizione") || "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };
      localStorage.setItem(name, value);
      return newData;
    });
  };

  const onLogin = (event) => {
    event.preventDefault();
    setFormData({
      name: "",
      sede: "",
      settore: "",
      email: "",
      password: "",
      descrizione: "",
    });
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
        <div className=" relative text-center text-white">
          <h1 className="text-4xl font-bold">Worker Review</h1>
          <h2 className="text-xl mt-2">Registra la tua azienda</h2>
        </div>

        <div className=" relative bg-white border-1 border-gray-400 rounded-lg p-6 w-72 mx-auto mt-12 shadow-2xl">
          <label>Nome azienda</label>
          <form onSubmit={onLogin}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              placeholder="Nome azienda"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <label>Sede principale</label>
            <input
              type="text"
              name="sede"
              placeholder="Sede"
              value={formData.sede}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <label>Settore</label>
            <input
              type="text"
              name="settore"
              placeholder="Settore"
              value={formData.settore}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <label>Descrizione azienda</label>
            <textarea
              name="descrizione"
              placeholder="Scrivi qui..."
              value={formData.descrizione}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            ></textarea>

            <button
              type="submit"
              className="bg-green-600 w-full rounded-lg py-2 text-white hover:bg-green-700"
            >
              Registra Azienda
            </button>
          </form>
        </div>
      </div>
      <Information />
    </div>
  );
}

export default RegistrazioneAzienda;
