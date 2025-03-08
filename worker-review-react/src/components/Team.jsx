import { useEffect, useState } from "react";

export default function Team() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/staff")
      .then((response) => response.json())
      .then((data) => {
        setStaff(data);
      })
      .catch((error) =>
        console.error("Errore nel caricamento dei dati:", error)
      );
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  bg-green-200">
      <p className="text-4xl font-bold p-4 flex justify-center items-center">
        Il nostro staff
      </p>
      <div className=" rounded-lg p-6 my-6 text-center lg:flex lg:flex-row lg:justify-around lg:gap-10 bg-white shadow-lg m-5">
        {staff.length > 0 ? (
          staff.map((staff, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <img
                src={staff.url}
                alt={staff.name}
                className=" w-20 rounded-full mb-4 shadow-lg"
              />

              <p className="text-xl  w-full font-semibold mb-2">{staff.name}</p>
            </div>
          ))
        ) : (
          <p>Caricamento...</p>
        )}
      </div>
    </div>
  );
}
