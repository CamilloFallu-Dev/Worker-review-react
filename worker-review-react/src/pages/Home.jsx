import CardAziendaHome from "../components/CardAziendaHome";
import ChiSiamo from "../components/ChiSiamo";
import Hero from "../components/Hero";
import Team from "../components/Team";

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
      <div>
        <Hero />
      </div>
      <div className="bg-green-200 pb-20 pt-20">
        <p className="text-4xl font-bold p-2 text-center">
          Le aziende più recensite
        </p>
        <p className="text-2xl pl-2 pb-10 text-center">Scopri di più...</p>
        <div className="lg:grid lg:grid-cols-2 lg:w-220 lg:mx-auto md:grid md:grid-cols-2 md:w-180 md:mx-auto gap-5 ">
          {aziende.map((card, i) => (
            <CardAziendaHome key={i} azienda={card} />
          ))}
        </div>
      </div>
      <div>
        <ChiSiamo />
      </div>
      <div>
        <Team />
      </div>
    </div>
  );
}
