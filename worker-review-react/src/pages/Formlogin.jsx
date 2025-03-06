import React from "react";
import { Link } from "react-router-dom";

function Formlogin() {
  const onLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    console.log({
      name: form.email.value,
      name: form.password.value,
    });
  };

  const loginWithFormData = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target.form);
    console.log({
      email: formData.get("email"),
      password: formData.get("password"),
    });
  };

  return (
    <div className="bg-green-600 py-16">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Worker Review</h1>
        <h2 className="text-xl mt-2">Accedi ed inizia a recensire</h2>
      </div>

      <div className="bg-white border-1 border-gray-400 rounded-md  p-6 w-72 mx-auto relative mt-12">
        <p>Email</p>
        <form onSubmit={onLogin}>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <button
            type="button"
            onClick={loginWithFormData}
            className="bg-green-600 w-full rounded py-2 text-white hover:bg-green-700"
          >
            Accedi
          </button>
        </form>
        <p className="mt-4 text-center text-black-600 cursor-pointer">
          Non sei registrato? <Link to="/Registrati">Registrati</Link>
        </p>
        <p className="mt-4 text-center text-black-600 cursor-pointer">
          Non sei registrato? <Link to="/Registrati">Registrati</Link>
        </p>
      </div>
    </div>
  );
}

export default Formlogin;
