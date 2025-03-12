import { useState } from "react";
import { Link } from "react-router-dom";
import ChiSiamo from "../components/ChiSiamo";

function Login() {
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
            <button
              type="submit"
              className="bg-green-600 w-full rounded-lg py-2 text-white hover:bg-green-700 cursor-pointer"
            >
              Accedi
            </button>
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
