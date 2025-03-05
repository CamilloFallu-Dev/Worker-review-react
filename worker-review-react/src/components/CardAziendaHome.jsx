export default function CardAziendaHome({ azienda }) {
  return (
    <div className="flex justify-center items-start gap-5 relative shadow-2xl rounded-lg bg-white m-2 p-4">
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
