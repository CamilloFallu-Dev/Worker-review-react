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
    <div>
      <p className="text-3xl flex justify-center">Il nostro staff</p>
      <div className="flex flex-wrap justify-center sm:flex-col gap-5 lg:flex-row md:flex-row ">
        {staff.length > 0 ? (
          staff.map((staff, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:w-full mb-8 md:mb-0 p-5  lg:w-1/3 md:w-1/2 w-full"
            >
              <img
                src={staff.url}
                alt={staff.name}
                className="rounded-full object-fill w-10 h-10 sm:w-12 sm:h-12 sm:rounded-full"
              />
              <div className="space-y-2 font-medium dark:text-white text-left rtl:text-right sm:ms-3">
                <div className="text-black font-semibold">{staff.name}</div>
              </div>
            </div>
          ))
        ) : (
          <p>Caricamento...</p>
        )}
      </div>
    </div>
  );
}
