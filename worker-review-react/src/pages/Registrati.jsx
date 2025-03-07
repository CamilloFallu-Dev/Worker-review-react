import { useState } from "react";

function Registrati() {
  const [formData, setFormData] = useState({
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    nome: localStorage.getItem("nome") || "",
    cognome: localStorage.getItem("cognome") || "",
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
    setFormData({ email: "", password: "", nome: "", cognome: "" });
  };

  return (
    <div className="bg-green-600 py-16">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Worker Review</h1>
        <h2 className="text-xl mt-2">Registrazione</h2>
      </div>

      <div className="bg-white border-1 border-gray-400 rounded-md p-6 w-72 mx-auto relative mt-12 shadow-2xl">
        <form onSubmit={onLogin}>
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <label>Cognome</label>
          <input
            type="text"
            name="cognome"
            placeholder="Cognome"
            value={formData.cognome}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-green-600 w-full rounded py-2 text-white hover:bg-green-700 cursor-pointer "
          >
            Accedi.
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registrati;
