import { useState, useRef, useEffect } from "react";
import CardAziendeRicerca from "../components/CardAziendeRicerca";
import {
  useGetCompaniesQuery,
  useGetReviewsQuery,
} from "../services/apiService";

const sectors = [
  "Automotive",
  "Cloud Computing",
  "Consulting",
  "E-commerce",
  "Elettronics",
  "Entertainment",
  "Gaming",
  "Hospitality",
  "IA",
  "IT",
  "Music Streaming",
  "Social Media",
  "Software",
  "Streaming",
  "Technology",
  "Telecommunications",
  "Transportation",
];

function PaginaRicercaAziende() {
  const [modal, setModal] = useState(false);
  const [filterSector, setFilterSector] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortByRating, setSortByRating] = useState("");
  const { data: companies, error, isLoading } = useGetCompaniesQuery();
  const { data: reviews, isLoading: isLoadingReviews } = useGetReviewsQuery();

  const handleModal = () => setModal((prev) => !prev);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        const filterButton = document.querySelector(
          'button[onClick="handleModal"]'
        );
        if (!filterButton || !filterButton.contains(event.target)) {
          setModal(false);
        }
      }
    };
    if (modal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modal]);

  const toggleFilterSector = (sector) => {
    setFilterSector((prev) =>
      prev.includes(sector)
        ? prev.filter((s) => s !== sector)
        : [...prev, sector]
    );
  };

  const handleSearch = (e) => setSearchQuery(e.target.value.toLowerCase());

  const calculateAverageRating = (companyId) => {
    const companyReviews = reviews.filter(
      (review) => review.companyId?.toString() === companyId.toString()
    );
    console.log(companies);
    console.log(reviews);
    if (companyReviews.length === 0) return 0;
    const total = companyReviews.reduce((sum, r) => sum + Number(r.vote), 0);
    return total / companyReviews.length;
  };

  if (isLoadingReviews || isLoading) {
    return (
      <div className="p-10 text-center text-lg">
        Caricamento dei dati in corso...
      </div>
    );
  }

  let filteredCompanies = companies
    .map((company) => ({
      ...company,
      averageRating: calculateAverageRating(company.id),
    }))
    .filter((company) => {
      const matchesSector =
        filterSector.length === 0 ||
        (Array.isArray(company.workSector) &&
          company.workSector.some((sector) => filterSector.includes(sector)));

      const matchesSearch = (company.slug || "")
        .toLowerCase()
        .includes(searchQuery);

      return matchesSector && matchesSearch;
    });

  if (sortByRating === "best") {
    filteredCompanies = filteredCompanies.sort(
      (a, b) => (b.averageRating || 0) - (a.averageRating || 0)
    );
  } else if (sortByRating === "worst") {
    filteredCompanies = filteredCompanies.sort(
      (a, b) => (a.averageRating || 0) - (b.averageRating || 0)
    );
  }

  const resetAllFilters = () => {
    setFilterSector([]);
    setSearchQuery("");
    setSortByRating("");
  };

  return (
    <div className="">
      <div className="lg:relative lg:flex lg:gap-10 lg:items-center lg:w-full lg:p-4 lg:bg-green-500/20 flex justify-center items-center p-2 ">
        <button onClick={handleModal} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
        </button>
        {modal && (
          <div
            ref={modalRef}
            className="absolute z-50 left-53 sm:left-88 top-35 sm:top-20 transform -translate-x-1/2 w-full sm:w-auto bg-green-300 p-3 rounded-lg"
          >
            <p className="p-2 font-bold text-center">Filtra per:</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {sectors.map((sector) => (
                <div key={sector} className="flex items-center gap-2 p-1">
                  <input
                    type="checkbox"
                    id={sector}
                    className="hidden peer"
                    checked={filterSector.includes(sector)}
                    onChange={() => toggleFilterSector(sector)}
                  />
                  <label
                    htmlFor={sector}
                    className={`w-12 h-6 bg-gray-300 rounded-full flex items-center p-1 cursor-pointer transition-colors duration-300 peer-checked:bg-green-700`}
                  >
                    <span
                      className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                        filterSector.includes(sector) ? "translate-x-6" : ""
                      }`}
                    ></span>
                  </label>
                  <p>{sector}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="relative w-full">
          <input
            className="bg-white border w-full border-gray-300 rounded-xl p-2"
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Cerca azienda..."
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg
              width="35"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z"
                fill="#080341"
              />
            </svg>
          </span>
        </div>

        <button
          onClick={() => setSortByRating("best")}
          className={`p-2 rounded-xl cursor-pointer w-1/3 sm:block hidden ${
            sortByRating === "best"
              ? "bg-black text-white"
              : "bg-green-600 hover:bg-gray-400"
          }`}
        >
          Migliore valutazione
        </button>

        <button
          onClick={() => setSortByRating("worst")}
          className={`p-2 rounded-xl cursor-pointer w-1/3 sm:block hidden ${
            sortByRating === "worst"
              ? "bg-black text-white"
              : "bg-green-600 hover:bg-gray-400"
          }`}
        >
          Peggiore valutazione
        </button>
      </div>

      <div className="bg-green-500/20 text-center p-2 lg:hidden flex gap-2">
        <button
          onClick={() => setSortByRating("best")}
          className={`p-2 rounded-xl cursor-pointer w-1/2 ${
            sortByRating === "best"
              ? "bg-black text-white"
              : "bg-green-600 hover:bg-gray-400"
          }`}
        >
          Migliore valutazione
        </button>
        <button
          onClick={() => setSortByRating("worst")}
          className={`p-2 rounded-xl cursor-pointer w-1/2 ${
            sortByRating === "worst"
              ? "bg-black text-white"
              : "bg-green-600 hover:bg-gray-400"
          }`}
        >
          Peggiore valutazione
        </button>
      </div>
      <div className="bg-green-500/20 flex justify-end">
        <button
          onClick={resetAllFilters}
          className="m-2 text-sm bg-red-500 hover:bg-red-600 cursor-pointer text-white px-2 py-1 rounded-xl"
        >
          Resetta filtri
        </button>
      </div>

      <div className="bg-green-500/20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {!isLoading && !error && filteredCompanies.length === 0 && (
          <p className="col-span-full text-center">Nessuna azienda trovata.</p>
        )}
        {!isLoading &&
          !error &&
          filteredCompanies.map((company) => {
            return (
              <CardAziendeRicerca
                key={company.id}
                company={company}
                rating={company.averageRating}
              />
            );
          })}
        {error && (
          <p className="col-span-full text-center">
            Errore durante il caricamento
          </p>
        )}
        {isLoading && (
          <p className="col-span-full text-center">
            Caricamento delle aziende...
          </p>
        )}
      </div>
    </div>
  );
}

export default PaginaRicercaAziende;
