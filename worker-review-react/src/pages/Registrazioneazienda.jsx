import React, { useState } from "react";

function RegistrazioneAzienda() {
  const [formData, setFormData] = useState({
    name: localStorage.getItem("azienda") || "",
    sede: localStorage.getItem("sede") || "",
    settore: localStorage.getItem("settore") || "",
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
    setFormData({ name: "", sede: "", settore: "", descrizione: "" });
  };

  return (
    <div className="bg-green-600 py-16">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Worker Review</h1>
        <h2 className="text-xl mt-2">Registra la tua azienda</h2>
      </div>

      <div className="bg-white border-1 border-gray-400 rounded-lg p-6 w-72 mx-auto mt-12 shadow-2xl">
        <p>Nome azienda</p>
        <form onSubmit={onLogin}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Nome azienda"
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          />
          <p>Sede principale</p>
          <input
            type="text"
            name="sede"
            placeholder="Sede"
            value={formData.sede}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          />
          <p>Settore</p>
          <input
            type="text"
            name="settore"
            placeholder="Settore"
            value={formData.settore}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          />
          <p>Descrizione azienda</p>
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
  );
}

export default RegistrazioneAzienda;
