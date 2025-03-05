import CardAziendaHome from "../components/CardAziendaHome";

export default function Home() {
  const aziende = [
    {
      imageUrl: "./../src/assets/justeat.png",
      title: "Google",
      descrizione:
        "Google LLC è un'azienda statunitense che offre il più grande servizio di ricerca online al mondo",
    },
    {
      imageUrl: "./../src/assets/wrimage.png",
      title: "Apple",
      descrizione:
        "è un'azienda multinazionale statunitense che produce sistemi operativi, smartphone, computer e dispositivi multimediali",
    },
    {
      imageUrl: "./../src/assets/justeat.png",
      title: "Amazon",
      descrizione:
        "Scopri Migliaia di Prodotti. Leggi le Recensioni dei Clienti e Trova i Più Venduti. Ampia selezione di gioielli di marca",
    },
    {
      imageUrl: "./../src/assets/justeat.png",
      title: "Amazon",
      descrizione:
        "Scopri Migliaia di Prodotti. Leggi le Recensioni dei Clienti e Trova i Più Venduti. Ampia selezione di gioielli di marca",
    },
  ];
  return (
    <div>
      <div className="relative w-full h-64">
        <img
          src="./../src/assets/imageuno.jpg"
          alt="Immagine"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-green-800 opacity-80"></div>

        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white">
          <h1 className="text-4xl font-bold transform transition duration-700 hover:scale-150">
            Worker Review
          </h1>
          <h2 className="text-xl mt-2">La tua recensione con un click!</h2>
        </div>
      </div>
      <div className="bg-green-200 p-2">
        <p className="text-lg font-bold p-2">Le aizende più recensite</p>
        <p className="text-md pl-2 pb-10">Scopri di più...</p>
        <div className="lg:grid lg:grid-cols-2 lg:w-220 lg:mx-auto md:grid md:grid-cols-2 md:w-180 md:mx-auto">
          {aziende.map((card, i) => (
            <CardAziendaHome key={i} azienda={card} />
          ))}
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center ">
        <img
          src="./../src/assets/wrimage.png"
          alt="Immagine"
          className="transform transition duration-700 hover:scale-105 w-100 mx-auto"
        />
        <div className="mx-auto lg:w-200">
          <p className="font-bold p-4">Chi siamo...</p>
          <p className="p-4 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            porro adipisci reprehenderit dicta deserunt obcaecati minus odio,
            quis voluptas, natus qui magni ea sit possimus alias incidunt odit
            mollitia ex. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Voluptates debitis minus unde facere! Reprehenderit, autem!
            Eligendi, explicabo molestiae debitis provident reprehenderit, saepe
            recusandae eum numquam nobis velit magnam expedita necessitatibus.
          </p>
        </div>
      </div>
    </div>
  );
}
