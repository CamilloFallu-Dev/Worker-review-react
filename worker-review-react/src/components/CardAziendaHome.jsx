export default function CardAziendaHome({ azienda }) {
  return (
    <div className="flex justify-center items-start gap-10 relative shadow-xl rounded-lg bg-white m-2 p-4 transform transition duration-700 hover:scale-105 ">
      <div className="flex justify-between gap-5">
        <img src={azienda.imageUrl} className="w-15 h-15" />
        <div>
          <p className="text-lg font-bold">{azienda.title}</p>
          <p className="text-sm">{azienda.descrizione}</p>
        </div>
      </div>
    </div>
  );
}
