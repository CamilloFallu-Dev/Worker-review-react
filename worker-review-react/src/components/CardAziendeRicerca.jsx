import { useEffect, useState } from "react";

function CardAziendeRicerca() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/companies")
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data);
      })
      .catch((error) =>
        console.error("Errore nel caricamento dei dati:", error)
      );
  }, []);

  return (
    <div className="flex flex-wrap justify-center p-2 sm:flex-col gap-5 lg:grid lg:grid-cols-3">
      {companies.length > 0 ? (
        companies.map((company, index) => (
          <div
            key={index}
            className="flex flex-col m-0 sm:flex-row sm:w-full mb-8 p-5 shadow-md rounded-xl bg-white transform transition duration-700 hover:scale-110"
          >
            <img
              src={company.url}
              alt={company.name}
              className="rounded-full object-contain w-10 h-10 sm:w-12 sm:h-12 sm:rounded-full"
            />
            <div className="space-y-2 font-medium dark:text-white text-left rtl:text-right sm:ms-3">
              <div className="text-black font-semibold">{company.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {company.description}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Caricamento...</p>
      )}
    </div>
  );
}

export default CardAziendeRicerca;
