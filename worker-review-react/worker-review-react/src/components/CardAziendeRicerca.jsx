import { Link } from "react-router-dom";

function CardAziendeRicerca({ company }) {
  return (
    <div className="flex flex-wrap justify-center p-2 sm:flex-col gap-5 lg:grid lg:grid-cols-3">
      <Link
        to={`/company-page/${company.slug}`}
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
      </Link>
    </div>
  );
}

export default CardAziendeRicerca;
