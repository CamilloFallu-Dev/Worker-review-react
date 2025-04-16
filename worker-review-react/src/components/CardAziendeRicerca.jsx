import { Link } from "react-router-dom";
import Avatar from "react-avatar";

function CardAziendeRicerca({ company, rating }) {
  return (
    <div className="sm:flex-col ml-2 mr-2 mt-2 p-2 bg-white rounded-lg">
      <Link
        to={`/company-page/${company.slug}`}
        className="bg-white flex items-center p-2 gap-2"
      >
        {company.url ? (
          <img
            src={company.url}
            alt={company.name}
            className="rounded-full object-contain w-10 h-10 sm:w-12 sm:h-12 bg-white"
          />
        ) : (
          <Avatar
            name={company.name}
            size="48"
            round={true}
            color="#22c55e"
            textSizeRatio={2}
            className="shadow border border-white"
          />
        )}
        <div className="space-y-1 font-medium text-left sm:ms-3">
          <div className="text-black font-semibold">{company.name}</div>

          <div className="text-sm text-gray-500">{company.description}</div>

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

