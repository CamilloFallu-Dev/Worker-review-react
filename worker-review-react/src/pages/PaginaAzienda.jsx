import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import Footer from "../components/Footer";

export default function PaginaAzienda () {
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const reviews = [
    { title: "Ottimo servizio", author: "Marta Rossi" },
    { title: "Molto professionali", author: "Angelo Rossi" },
    { title: "Servizio eccellente", author: "Maria Bianchi" }
  ];

  return (
    <div className="p-4">
      <div className="bg-yellow-400 p-8 text-center rounded-xl">
        <img
          src={imageUrl}
          alt="Poste Italiane"
          className="mx-auto"
        />
      </div>
      <p className="mt-4 text-gray-700 text-center">
        {description}
      </p>

      <form className="mt-4 bg-green-100 p-4 rounded-xl shadow-md flex flex-col items-center">
        <label className="block mb-2">Nome e Cognome</label>
        <input
          placeholder="Nome e Cognome..."
          className="w-full p-2 border rounded mb-2 bg-white"
          type="text"
        />

        <label className="block mb-2">Scrivi la recensione</label>
        <textarea
          placeholder="Recensione..."
          className="w-full p-2 border rounded mb-2 bg-white"
        ></textarea>

        <button className="w-50 bg-black text-white p-2 rounded mt-4">
          Invia recensione
        </button>
      </form>

      <h2 className="mt-8 text-lg font-bold">Recensioni azienda</h2>
      <div className="mt-4 space-y-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} title={review.title} author={review.author} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
