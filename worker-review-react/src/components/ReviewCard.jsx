import { useState } from "react";

export default function ReviewCard({
  reviewTitle,
  reviewText,
  author,
  vote,
  date,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-black p-3 rounded-xl shadow-md bg-white hover:border-2 hover: border-green-500 flex flex-col gap-2">
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className={
              index < vote ? "fill-green-600" : "fill-none stroke-green-600"
            }
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <h2 className="font-bold text-lg break-words">{reviewTitle}</h2>
      <p className="text-sm break-words">
        {isExpanded ? reviewText : `${reviewText.substring(0, 300)}...`}
      </p>
      <button className="text-white-600 text-xs mt-2" onClick={toggleText}>
        {isExpanded ? "chiudi" : "leggi altro"}
      </button>
      <p className="text-sm font-medium break-words">{author}</p>
      {date && (
        <p className="text-xs text-gray-600">
          {new Date(date).toLocaleString()}
        </p>
      )}
    </div>
  );
}
