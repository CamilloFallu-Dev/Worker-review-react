import AziendePartner from "../components/Aziendepartner";
import CardAziendaHome from "../components/CardAziendaHome";
import ChiSiamo from "../components/ChiSiamo";
import ChiSiamoDue from "../components/ChiSiamoDue";
import Hero from "../components/Hero";
import StatsHomepage from "../components/StatsHomepage";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="bg-green-200 pb-20 pt-20">
        <p className="text-4xl font-bold p-2 text-center">
          Le aziende più visitate
        </p>
        <p className="text-2xl pl-2 pb-10 text-center">Scopri di più...</p>
        <div>
          <CardAziendaHome />
        </div>
      </div>
      <div>
        <ChiSiamo />
      </div>
      <div>
        <StatsHomepage />
      </div>
      <div>
        <ChiSiamoDue />
        <AziendePartner />
      </div>
    </div>
  );
}
