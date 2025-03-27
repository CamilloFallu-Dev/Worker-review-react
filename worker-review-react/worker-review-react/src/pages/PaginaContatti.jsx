import { useState } from "react";
import FaqContatti from "./../components/Faqcontatti";

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
    <div>
      <div className=" relative flex flex-col items-center py-16 bg-green-400/20">
        <div className="absolute inset-0">
          <img
            src="/contattipage.jpg"
            alt="LAVORATORE-IMAGE"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-green-950 opacity-50"></div>
        </div>
        <div className=" relative text-center text-black">
          <h1 className="text-4xl font-bold">Worker Review</h1>
          <h2 className="text-xl mt-2">
            Contattaci per informazioni o problemi
          </h2>
        </div>

        <div className=" relative bg-white rounded-md p-6 w-72 mx-auto mt-12 shadow-2xl">
          <form onSubmit={handleSubmit}>
            <label>Nome</label>
            <input
              className="bg-white w-full p-2 mb-4 rounded-lg border border-gray-400"
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Nome"
            />
            <label>Cognome</label>
            <input
              className="bg-white w-full p-2 mb-4 rounded-lg border border-gray-400"
              type="text"
              name="cognome"
              value={formData.cognome}
              onChange={handleChange}
              placeholder="Cognome"
            />
            <label>Email</label>
            <input
              className="bg-white w-full p-2 mb-4 rounded-lg border border-gray-400"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <label>Messaggio</label>
            <textarea
              className="bg-white w-full p-2 mb-4 rounded-lg border border-gray-400"
              name="messaggio"
              value={formData.messaggio}
              onChange={handleChange}
              placeholder="Scrivi qui il tuo messaggio..."
            />
            <button
              className="bg-green-600 w-full rounded-lg py-2 text-white hover:bg-green-700 cursor-pointer"
              type="submit"
            >
              Invia
            </button>
          </form>
        </div>
      </div>
      <FaqContatti />
    </div>
  );
}

export default PaginaContatti;
