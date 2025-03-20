import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CardAziendaHome() {
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
    <div className="flex flex-wrap justify-center sm:flex-col gap-5 lg:flex-row md:flex-row">
      {companies.length > 0 ? (
        companies.map((company, index) => (
          <Link
            key={index}
            to={`/company-page/${company.name.toLowerCase().replace(/\s+/g, '-')}`} 
            className="flex flex-col sm:flex-row sm:w-full mb-8 md:mb-0 p-5 shadow-md rounded-xl lg:w-1/3 md:w-1/2 w-full bg-white transform transition duration-700 hover:scale-110"
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
          </Link>
        ))
      ) : (
        <p>Caricamento...</p>
      )}
    </div>
  );
}
