import { Link } from "react-router-dom";

function CardAziendeRicerca({ company, rating }) {
  return (
    <div className="sm:flex-col ml-2 mr-2 mt-2 p-2 bg-white rounded-lg">
      <Link
        to={`/company-page/${company.slug}`}
        className="bg-white flex p-2 gap-2"
      >
        <img
          src={company.url}
          alt={company.name}
          className="rounded-full object-contain w-10 h-10 sm:w-12 sm:h-12 sm:rounded-full bg-white"
        />
        <div className="space-y-2 font-medium dark:text-white text-left rtl:text-right sm:ms-3">
          <div className="text-black font-semibold">{company.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {company.description}
          </div>
          {rating !== null && (
            <div className="text-sm text-yellow-600">
              ⭐ {rating.toFixed(1)} / 5
            </div>
          )}
          {rating === null && (
            <div className="text-sm text-gray-400 italic">
              Nessuna valutazione
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default CardAziendeRicerca;
