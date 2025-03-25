import { useState } from "react";
import Information from "../components/Information";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/global/globalSlice";

function Registrati() {
const dispatch= useDispatch();
const {user}= useSelector((state) => state.global);



  
  const onLogin = (event) => {
    event.preventDefault();
    dispatch(setUser({nome:"",cognome:"",email:"",password:""}))
  };

  return (
    <div>
      <div className="relative bg-green-600 py-16">
        <div className="absolute inset-0">
          <img
            src="/registrati.jpg"
            alt="LAVORATORE-IMAGE"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-green-950 opacity-50"></div>
        </div>
        <div className=" relative text-center text-white">
          <h1 className="text-4xl font-bold">Worker Review</h1>
          <h2 className="text-xl mt-2">
            Registrati e condividi con la community le tue esperienze
          </h2>
        </div>

        <div className="relative bg-white border-1 border-gray-400 rounded-lg p-6 w-72 mx-auto mt-12 shadow-2xl">
          <form onSubmit={onLogin}>
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              
              
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <label>Cognome</label>
            <input
              type="text"
              name="cognome"
              placeholder="Cognome"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              
              
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
             
            
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="bg-green-600 w-full rounded-lg py-2 text-white hover:bg-green-700 cursor-pointer"
            >
              Accedi
            </button>
          </form>
        </div>
      </div>

      <Information />
    </div>
  );
}

export default Registrati;
