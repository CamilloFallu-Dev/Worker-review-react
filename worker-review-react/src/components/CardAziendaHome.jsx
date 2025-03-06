export default function CardAziendaHome({ azienda }) {
  return (
    <div className="flex sm:w-full mb-8 md:mb-0 p-5 shadow-md rounded-xl mr-3 ml-3 lg:w-full md:w-full bg-white transform transition duration-700 hover:scale-110">
      <div className="w-full text-left ">
        <img src={azienda.imageUrl} className="mb-5 h-10 w-10" />
        <div>
          <p className="text-md text-gray-800 text-left leading-normal mb-5 font-lf-normal">
            {azienda.title}
          </p>
          <p className="text-md text-gray-800 text-left leading-normal mb-5 font-lf-normal">
            {azienda.descrizione}
          </p>
        </div>
      </div>
    </div>
  );
}
