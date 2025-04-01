import { useState } from "react";
import CardAziendeRicerca from "../components/CardAziendeRicerca";
import { useGetCompaniesQuery } from "../services/apiService";

const sectors = ["IT", "Finanza", "AI", "Agricoltura", "Edilizia", "Sanità"];

function PaginaRicercaAziende() {
  const [modal, setModal] = useState(false);
  const [filterSector, setFilterSector] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleModal = () => setModal((prev) => !prev);

  const toggleFilterSector = (sector) => {
    setFilterSector((prev) =>
      prev.includes(sector)
        ? prev.filter((s) => s !== sector)
        : [...prev, sector]
    );
  };

  const handleSearch = (e) => setSearchQuery(e.target.value.toLowerCase());

  const { data, error, isLoading } = useGetCompaniesQuery();

  const filteredCompanies = data
    ? data.filter((company) => {
        const matchesSector =
          filterSector.length === 0 ||
          (company.workSector || []).some((sector) =>
            filterSector.includes(sector)
          );

        const matchesSearch = company.slug.toLowerCase().includes(searchQuery);

        return matchesSector && matchesSearch;
      })
    : [];

  return (
    <div>
      <div className="relative flex items-center justify-between w-full p-4 bg-green-500/20">
        <button onClick={handleModal} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
        </button>

        {modal && (
          <div className="absolute z-50 top-20 grid grid-cols-3 bg-green-300 p-3 rounded-lg">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="flex grid-cols-3 gap-2 items-center p-1"
              >
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
        )}

        <div className="relative">
          <input
            className="bg-white border border-gray-300 rounded-3xl p-2"
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
      </div>

      <div className="bg-green-500/20 pt-2 pb-2">
        {!isLoading && !error && filteredCompanies.length === 0 && (
          <p>Nessuna azienda trovata.</p>
        )}
        {!isLoading &&
          !error &&
          filteredCompanies.map((company) => (
            <CardAziendeRicerca key={company.id} company={company} />
          ))}
        {error && <p>Errore durante il caricamento</p>}
        {isLoading && <p>Caricamento delle aziende...</p>}
      </div>
    </div>
  );
}

export default PaginaRicercaAziende;
