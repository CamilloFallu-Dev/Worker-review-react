import { useState, useEffect } from "react";
import ReviewCard from "../components/ReviewCard";

export default function PaginaAzienda() {
  const [azienda, setAzienda] = useState(null);
  const [nome, setNome] = useState("");
  const [titolo, setTitolo] = useState("");
  const [recensione, setRecensione] = useState("");
  const [voto, setVoto] = useState(1);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        const aziendaSelezionata = data.companies.find((c) => c.id === 1);
        if (aziendaSelezionata) {
          const recensioniAzienda = JSON.parse(
            localStorage.getItem(`reviews-company-${aziendaSelezionata.id}`) || "[]");
          setAzienda({ ...aziendaSelezionata, reviews: recensioniAzienda });
        }
      })
      .catch((error) => console.error("Errore nel caricamento dati:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !azienda ||
      nome.trim() === "" ||
      titolo.trim() === "" ||
      recensione.trim() === ""
    )
      return;

    const nuovaRecensione = {
      reviewTitle: titolo,
      reviewText: recensione,
      author: nome,
      vote: voto,
      date: new Date().toISOString(),
      companyId: azienda.id,
    };

    const newReviews = [...azienda.reviews, nuovaRecensione];
    setAzienda((prev) => ({
      ...prev,
      reviews: newReviews,
    }));

    localStorage.setItem( // Salva le recensioni in localStorage
      `reviews-company-${azienda.id}`,
      JSON.stringify(newReviews)
    );

    setNome("");
    setTitolo("");
    setRecensione("");
    setVoto(1);
  };

  if (!azienda) return <p>Caricamento...</p>;

  return (
    <div className="p-4">
      <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left">
        <div className="p-4 rounded-lg md:w-1/3 md:justify-start">
          <img
            src={azienda.url}
            alt={azienda.name}
            className=" h-32 w-auto md:h-100 object-contain"
          />
        </div>
        <div className="md:w-2/3 items-center flex flex-col md:items-start">
          <h1 className="mt-2 md:text-5xl font-bold">{azienda.name}</h1>
          <p className="mt-2 text-gray-700 md:text-xl md:font-bold md:text-black">{azienda.country}</p>
          <p className="mt-2 text-gray-700 md:text-xl md:font-bold md:text-black">{azienda.address}</p>
          <p className="mt-2">{azienda.description}</p>

          <form
            className="mt-4 flex flex-col items-center md:items-start w-full max-w-sm"
            onSubmit={handleSubmit}
          >
            <label className="mb-1">Nome e Cognome</label>
            <input
              placeholder="nome e cognome"
              className="w-full p-2 border rounded mb-2"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label className="mb-1">Dai un voto</label>
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

            <label className="mb-1">Titolo recensione</label>
            <input
              placeholder="titolo della recensione"
              className="w-full p-2 border rounded mb-2"
              type="text"
              value={titolo}
              onChange={(e) => setTitolo(e.target.value)}
            />

            <label className="mb-1">Scrivi la recensione</label>
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
        </div>
      </div>

      <h2 className="mt-8 text-lg font-bold">Recensioni azienda</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {azienda.reviews.map((review, index) => (
          <ReviewCard
            key={index}
            reviewTitle={review.reviewTitle || review.text}
            reviewText={review.reviewText || review.text}
            author={review.author}
            vote={review.vote}
            date={review.date}
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
