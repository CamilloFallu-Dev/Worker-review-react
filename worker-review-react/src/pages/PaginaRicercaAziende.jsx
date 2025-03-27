import { useState } from "react";
import CardAziendeRicerca from "../components/CardAziendeRicerca";
import { useGetCompaniesQuery } from "../services/apiService";
import Aziende from "../components/Aziende";
import AziendePartner from "../components/AziendePartner";

function PaginaRicercaAziende() {
  const [modal, setModal] = useState(false);
  const [filterSector, setFilterSector] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleModal = () => setModal((prev) => !prev);

  const toggleFilterSector = (sector) => {
    setFilterSector((prev) => {
      if (prev.includes(sector)) {
        return prev.filter((s) => s !== sector);
      } else {
        return [...prev, sector];
      }
    });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const { data, error, isLoading } = useGetCompaniesQuery();

  const filteredCompanies =
    data &&
    data.filter((company) => {
      const matchesSector =
        filterSector.length === 0 ||
        company.workSector.some((sector) => filterSector.includes(sector));

      const matchesSearch = company.slug.toLowerCase().includes(searchQuery);

      return matchesSector && matchesSearch;
    });

  return (
    <div>
      <div className="relative flex items-center justify-between w-full p-4 bg-green-500/20">
        <button onClick={handleModal} className="cursor-pointer">
          <svg
            fill="#000000"
            width="50"
            height="50"
            viewBox="-1 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-2.882-2.625a.396.396 0 0 0-.396-.396h-.855a1.58 1.58 0 0 0-3.058 0H3.912a.396.396 0 0 0 0 .792h5.314a1.58 1.58 0 0 0 3.058 0h.855a.396.396 0 0 0 .396-.396zm0 2.63a.396.396 0 0 0-.396-.396H7.825a1.58 1.58 0 0 0-3.058 0h-.855a.396.396 0 0 0 0 .792h.855a1.58 1.58 0 0 0 3.058 0h5.314a.396.396 0 0 0 .396-.396zm0 2.63a.396.396 0 0 0-.396-.396h-.855a1.58 1.58 0 0 0-3.058 0H3.912a.396.396 0 1 0 0 .791h5.314a1.58 1.58 0 0 0 3.058 0h.855a.396.396 0 0 0 .396-.396zm-6.452-2.63a.788.788 0 1 1-.787-.788.788.788 0 0 1 .787.788zm4.46-2.63a.787.787 0 1 1-.788-.787.788.788 0 0 1 .787.787zm0 5.26a.787.787 0 1 1-.788-.788.788.788 0 0 1 .787.787z" />
          </svg>
        </button>
        {modal && (
          <div className="absolute z-50 top-20 grid grid-cols-3 bg-green-300 p-3 rounded-lg">
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={filterSector.includes("IT")}
                onChange={() => toggleFilterSector("IT")}
              />
              <p>IT</p>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={filterSector.includes("Finanza")}
                onChange={() => toggleFilterSector("Finanza")}
              />
              <p>Finanza</p>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={filterSector.includes("AI")}
                onChange={() => toggleFilterSector("AI")}
              />
              <p>AI</p>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={filterSector.includes("Agricoltura")}
                onChange={() => toggleFilterSector("Agricoltura")}
              />
              <p>Agricoltura</p>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={filterSector.includes("Edilizia")}
                onChange={() => toggleFilterSector("Edilizia")}
              />
              <p>Edilizia</p>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={filterSector.includes("Sanità")}
                onChange={() => toggleFilterSector("Sanità")}
              />
              <p>Sanità</p>
            </div>
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
      <div className="bg-green-500/20 flex gap-2">
        <button className="p-1 rounded-lg bg-gray-300 focus:bg-black focus:text-white hover:bg-gray-400 cursor-pointer">
          Migliore valutazione
        </button>
        <button className="p-1 rounded-lg bg-gray-300 focus:bg-black focus:text-white hover:bg-gray-400 cursor-pointer">
          Peggiore valutazione
        </button>
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
        {isLoading && <p>Caricamento delle aziende</p>}
      </div>
      <Aziende />
      <AziendePartner />
    </div>
  );
}

export default PaginaRicercaAziende;
