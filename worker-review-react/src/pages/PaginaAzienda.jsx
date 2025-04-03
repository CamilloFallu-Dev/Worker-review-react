import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import {
  useGetCompanyBySlugQuery,
  useGetReviewsQuery,
} from "../services/apiService";
import { useAddReviewMutation } from "../services/apiService";
import { toast } from "react-hot-toast";

export default function PaginaAzienda() {
  const { slug } = useParams();
  const [azienda, setAzienda] = useState(null);
  const [nome, setNome] = useState("");
  const [titolo, setTitolo] = useState("");
  const [recensione, setRecensione] = useState("");
  const [voto, setVoto] = useState(1);
  const { data, error, isLoading } = useGetCompanyBySlugQuery(slug);
  const [addReview] = useAddReviewMutation();
  const { refetch } = useGetReviewsQuery(azienda?.id, { skip: !azienda });

  useEffect(() => {
    if (data) {
      const aziendaSelezionata = Array.isArray(data) ? data[0] : data;
      if (aziendaSelezionata) {
        setAzienda(aziendaSelezionata);
      }
    }
  }, [data]);

  const {
    data: reviewsData,
    error: reviewsError,
    isLoading: reviewsLoading,
  } = useGetReviewsQuery(azienda?.id, {
    skip: !azienda,
  });

  useEffect(() => {
    if (reviewsData) {
      setAzienda((prev) => ({ ...prev, reviews: reviewsData }));
    }
  }, [reviewsData]);

  const handleSubmit = async (e) => {
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

    const loadingToast = toast.loading("Invio recensione...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      await addReview(nuovaRecensione).unwrap();
      await refetch();
      setNome("");
      setTitolo("");
      setRecensione("");
      setVoto(1);
  
      toast.success("Recensione inviata con successo!", { id: loadingToast });
    } catch (error) {
      console.error("Errore nell'invio della recensione:", error);
      toast.error("Errore nell'invio della recensione!", { id: loadingToast });
    }
  
  };

  if (isLoading || reviewsLoading) return <p>Caricamento...</p>;
  if (error || reviewsError) return <p>Errore nel caricamento dati</p>;
  if (!azienda) return <p>Nessuna azienda trovata</p>;

  return (
    <div>
      <div className="p-4 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
        {/* HERO */}
        <div className="relative w-full h-auto mb-10">
          <div className="relative w-full max-h-[400px] overflow-hidden rounded-b-xl shadow-lg ">
            <img
              src="./../src/assets/Azienda-del-futuro.jpg"
              alt="LAVORATORE-IMAGE"
              className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <img
            src={azienda.url}
            alt={azienda.name}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 max-w-40 h-auto rounded-full object-cover border-4 border-white shadow-xl hover:scale-105 bg-white"
          />
        </div>

        {/* Sezione principale */}
        <div className="w-full p-6 flex flex-col items-center mt-10">
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-gray-800 tracking-wide">
            {azienda.name}
          </h1>
          <p className="mt-2 text-gray-700 md:text-xl md:font-bold md:text-black">
            {azienda.country}
          </p>
          <p className="mt-2 text-gray-700 md:text-xl md:font-bold md:text-black">
            {azienda.address}
          </p>
          <p className="mt-2 text-gray-600 w-3xl flex justify-center">
            {azienda.description}
          </p>

          {/* Form recensioni */}
          <form className="mt-6 w-full max-w-sm" onSubmit={handleSubmit}>
            <h2 className="text-3xl p-5 font-bold text-green-600 flex justify-center">
              Scrivi la tua recensione
            </h2>
            <label className="mb-1 font-semibold text-gray-700">
              Nome e Cognome
            </label>
            <input
              placeholder="nome e cognome"
              className="mb-3 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label className="mb-1 font-semibold text-gray-700">
              Dai un voto
            </label>
            <select
              className="mb-3 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
              className="mb-3 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              value={titolo}
              onChange={(e) => setTitolo(e.target.value)}
            />
            <label className="mb-1 font-semibold text-gray-700">
              Scrivi la recensione
            </label>
            <textarea
              placeholder="recensione..."
              className="mb-3 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={recensione}
              onChange={(e) => setRecensione(e.target.value)}
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-3 bg-green-600 text-white text-s px-4 py-2 border rounded hover:bg-green-700 transition-colors"
              >
                Invia
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Recensioni */}
      <div className="bg-gray-50">
        <h2 className="bg-gray-50 text-lg font-bold text-gray-800 text-center">
          Recensioni azienda
        </h2>
      </div>
      {/* Recensioni */}
      <div className="bg-gray-50 p-4 grid grid-cols-3 gap-3">
        {azienda.reviews && azienda.reviews.length > 0 ? (
          azienda.reviews.map((review, index) => (
            <ReviewCard
              key={index}
              reviewTitle={review.reviewTitle || review.text}
              reviewText={review.reviewText || review.text}
              author={review.author}
              vote={review.vote}
              date={review.date}
            />
          ))
        ) : (
          <p>Nessuna recensione disponibile.</p>
        )}
      </div>
    </div>
  );
}
