export default function Chisiamodue() {
  return (
    <div className="pt-10 pb-10">
      <section className="overflow-hidden sm:grid sm:grid-cols-2 ">
        <img
          alt="Descrizione immagine"
          src="/public/imagewr.png"
          className="h-56 w-150 object-cover shadow-2xl sm:h-full mx-auto"
        />

        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl p-2">
              Come lavoriamo...
            </h2>

            <p className="text-gray-500 md:mt-4 md:block text-left">
              Nel nostro sito di recensioni, gli utenti possono creare un
              profilo per condividere le loro esperienze con aziende, prodotti e
              servizi. Ogni recensione è accompagnata da una valutazione da 1 a
              5 stelle e può essere letta da altri utenti per aiutarli a
              prendere decisioni informate. Le aziende possono rispondere alle
              recensioni per mostrare trasparenza e impegno verso il
              miglioramento. Offriamo filtri di ricerca per trovare facilmente
              ciò che cerchi e garantiamo che tutte le recensioni siano
              autentiche e rispettino le linee guida per un ambiente di fiducia.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded-sm bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
              >
                Inizia a recensire
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
