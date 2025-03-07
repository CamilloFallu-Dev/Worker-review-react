import React, { useState } from "react";
import { Link } from "react-router-dom";

function Formlogin() {
  const [formData, setFormData] = useState({
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
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
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="bg-green-600 py-16">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Worker Review</h1>
        <h2 className="text-xl mt-2">Accedi ed inizia a recensire</h2>
      </div>

      <div className="bg-white border-1 border-gray-400 rounded-md mx-4 p-6 w-72 mx-auto relative mt-12 shadow-2xl">
        <label>Email</label>
        <form onSubmit={onLogin}>
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
            className="bg-green-600 w-full rounded py-2 text-white hover:bg-green-700 cursor-pointer"
          >
            Accedi
          </button>
        </form>
        <p className="mt-4 text-center text-black-600 cursor-pointer">
          Non sei registrato? <Link to="/Registrati">Registrati</Link>
        </p>
      </div>
    </div>
  );
}

export default Formlogin;
