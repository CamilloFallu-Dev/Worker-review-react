import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

export default function PaginaAzienda() {
  const { companyName } = useParams();
  const [azienda, setAzienda] = useState(null);
  const [nome, setNome] = useState("");
  const [titolo, setTitolo] = useState("");
  const [recensione, setRecensione] = useState("");
  const [voto, setVoto] = useState(1);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        const aziendaSelezionata = data.companies.find(
          (c) => c.name.toLowerCase() === companyName.toLowerCase()
        );
        if (aziendaSelezionata) {
          const recensioniAzienda = JSON.parse(
            localStorage.getItem(`reviews-company-${aziendaSelezionata.id}`) ||
              "[]"
          );
          setAzienda({ ...aziendaSelezionata, reviews: recensioniAzienda });
        }
      })
      .catch((error) => console.error("Errore nel caricamento dati:", error));
  }, [companyName]);

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
    setAzienda((prev) => ({ ...prev, reviews: newReviews }));
    localStorage.setItem(
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
    <div>
      <div className="p-4 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
        {/* HERO */}
        <div className="relative w-full h-auto mb-10">
          <div className="relative w-full max-h-[400px] overflow-hidden rounded-b-xl shadow-lg">
            <img
              src="./../src/assets/Azienda-del-futuro.jpg"
              alt="LAVORATORE-IMAGE"
              className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <img
            src={azienda.url}
            alt={azienda.name}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 max-w-40 h-auto rounded-full object-cover border-4 border-white shadow-xl hover:scale-105"
          />
        </div>

        {/* Sezione principale */}
        <div className="w-full bg-white p-6 rounded-lg shadow-md flex flex-col items-center mt-10">
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-gray-800 tracking-wide">
            {azienda.name}
          </h1>
          <p className="mt-2 text-gray-700 md:text-xl md:font-bold md:text-black">
            {azienda.country}
          </p>
          <p className="mt-2 text-gray-700 md:text-xl md:font-bold md:text-black">
            {azienda.address}
          </p>
          <p className="mt-2 text-gray-600">{azienda.description}</p>

          {/* Form recensioni */}
          <form
            className="mt-6 w-full max-w-sm bg-white"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl p-3 font-bold text-green-600">
              {" "}
              Scrivi la tua recensione{" "}
            </h2>
            <label className="mb-1 font-semibold text-gray-700">
              Nome e Cognome
            </label>
            <input
              placeholder="nome e cognome"
              className="w-full p-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label className="mb-1 font-semibold text-gray-700">
              Dai un voto
            </label>
            <select
              className="w-full p-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
              value={voto}
              onChange={(e) => setVoto(Number(e.target.value))}
            >
              <option value={1}>1 ★</option>
              <option value={2}>2 ★★</option>
              <option value={3}>3 ★★★</option>
              <option value={4}>4 ★★★★</option>
              <option value={5}>5 ★★★★★</option>
            </select>
            <label className="mb-1 font-semibold text-gray-700">
              Titolo recensione
            </label>
            <input
              placeholder="titolo della recensione"
              className="w-full p-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
              type="text"
              value={titolo}
              onChange={(e) => setTitolo(e.target.value)}
            />
            <label className="mb-1 font-semibold text-gray-700">
              Scrivi la recensione
            </label>
            <textarea
              placeholder="recensione..."
              className="w-full p-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
              value={recensione}
              onChange={(e) => setRecensione(e.target.value)}
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 text-white text-s px-4 py-2 border rounded hover:bg-green-700 transition-colors"
              >
                Invia
              </button>
            </div>
          </form>
        </div>

        
      </div>
      {/* Recensioni */}
      <h2 className="mt-8 text-lg font-bold text-gray-800 text-center">
          Recensioni azienda
        </h2>
        <div className="flex gap-5 justify-between ">
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
