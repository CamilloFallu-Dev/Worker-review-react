export default function ReviewCard({ title, author, vote }) {
  return (
    <div className="bg-green-600 text-black p-4 rounded-xl shadow-md">
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((i, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            className={index < vote ? "fill-black" : "fill-none stroke-black"}>
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <h2 className="font-bold">{title}</h2>
      <h2 className="mt-2 font-bold">{author}</h2>
    </div>
  );
}

{/** CODICE ALTERNATIVO PER LA SELEZIONE DELLE STELLE da sostituire a <svg>
            <div className="flex gap-1 mb-2">
            {[...Array(5)].map((i, index) => (
              <span key={index} className={`text-2xl ${index < vote ? "text-yellow-500" : "text-gray-300"}`}>
                ★ 
              </span>
            ))}
          </div>*/}