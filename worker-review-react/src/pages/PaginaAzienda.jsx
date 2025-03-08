import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
// import { aziende } from "../Utilites/FakeData";

export default function PaginaAzienda() {
  const [azienda, setAzienda] = useState(aziende[2]);
  const [nome, setNome] = useState("");
  const [recensione, setRecensione] = useState("");
  const [voto, setVoto] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim() === "" || recensione.trim() === "") return;

    const nuovaRecensione = { title: recensione, author: nome, vote: voto };
    setAzienda((prev) => ({
      ...prev,
      reviews: [...prev.reviews, nuovaRecensione],
    }));

    setNome("");
    setRecensione("");
    setVoto(1);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center text-center">
        <div className="p-4 rounded-lg">
          <img src={azienda.logo} alt={azienda.name} className="h-32 w-auto" />
        </div>
        <p className="mt-2 font-medium">{azienda.name}</p>
        <p className="mt-2">{azienda.country}</p>
        <p className="mt-2">{azienda.address}</p>
      </div>
      <p className="mt-4 text-gray-700 text-center">{azienda.description}</p>

      <form
        className="mt-14 flex flex-col items-center w-60 mx-auto"
        onSubmit={handleSubmit}
      >
        <label className="self-start mb-1">Nome e Cognome</label>
        <input
          placeholder="nome e cognome"
          className="w-full p-2 border rounded mb-2"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label className="self-start mb-1">Dai un voto</label>
        <select
          className="w-full p-2 border rounded mb-2"
          value={voto}
          onChange={(e) => setVoto(Number(e.target.value))}
        >
          <option key={1} value={1}>
            1 ★
          </option>
          <option key={2} value={2}>
            2 ★★
          </option>
          <option key={3} value={3}>
            3 ★★★
          </option>
          <option key={4} value={4}>
            4 ★★★★
          </option>
          <option key={5} value={5}>
            5 ★★★★★
          </option>
        </select>

        <label className="self-start mb-1">Scrivi la recensione</label>
        <textarea
          placeholder="recensione..."
          className="w-full p-2 border rounded mb-2"
          value={recensione}
          onChange={(e) => setRecensione(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white text-s px-2 py-1 border rounded"
        >
          Invia
        </button>
      </form>

      <h2 className="mt-8 text-lg font-bold">Recensioni azienda</h2>
      <div className="mt-4 space-y-4">
        {azienda.reviews.map((review, index) => (
          <ReviewCard
            key={index}
            title={review.title}
            author={review.author}
            vote={review.vote}
          />
        ))}
      </div>
    </div>
  );
}

{
  /** 
          * CODICE ALTERNATIVO PER LA SELEZIONE DELLE STELLE da sostituire a <select>
          * <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer text-2xl ${
                index < voto ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setVoto(index + 1)}
            >
              ★
            </span>
          ))}
        </div><div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer text-2xl ${
                index < voto ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setVoto(index + 1)}
            >
              ★
            </span>
          ))}
        </div> */
}
