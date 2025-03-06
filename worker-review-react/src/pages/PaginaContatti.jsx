import { useState } from "react";

function PaginaContatti() {
  const [formData, setFormData] = useState({
    nome: localStorage.getItem("nome"),
    cognome: localStorage.getItem("cognome"),
    email: localStorage.getItem("email"),
    messaggio: localStorage.getItem("messaggio"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };
      localStorage.setItem(name, value);
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Messaggio inviato!");
    setFormData({
      nome: "",
      cognome: "",
      email: "",
      messaggio: "",
    });
  };

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl font-bold mt-40">Worker Review</h1>
      <h2 className="text-xl mt-6">Contattaci...</h2>
      <div className="mt-10 mb-20 shadow-2xl w-70">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 bg-green-400/20 p-4 rounded-lg border-1 border-gray-400"
        >
          <label>Nome</label>
          <input
            className="bg-white p-1 rounded-lg border-1 border-gray-400"
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome"
          />
          <label>Cognome</label>
          <input
            className="bg-white p-1 rounded-lg border-1 border-gray-400"
            type="text"
            name="cognome"
            value={formData.cognome}
            onChange={handleChange}
            placeholder="Cognome"
          />
          <label>Email</label>
          <input
            className="bg-white p-1 rounded-lg border-1 border-gray-400"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <label>Messaggio</label>
          <textarea
            className="bg-white p-1 rounded-lg border-1 border-gray-400"
            name="messaggio"
            value={formData.messaggio}
            onChange={handleChange}
            placeholder="Scrivi qui il tuo messaggio..."
          />
          <button
            className="bg-green-600 rounded-lg border-1 border-gray-400 text-white cursor-pointer"
            type="submit"
          >
            Invia
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaginaContatti;
