export default function ChiSiamo() {
  return (
    <div className="pt-10 pb-10">
      <section className="overflow-hidden sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl p-2">
              Chi siamo...
            </h2>

            <p className=" text-gray-500 md:mt-4 md:block text-left">
              La nostra app di recensioni per i lavoratori ti permette di
              scoprire cosa ti aspetta nel tuo prossimo impiego. Prima di
              prendere una decisione importante, consulta le esperienze di altri
              dipendenti e ottieni informazioni verificate su ambiente di
              lavoro, retribuzione, orari e tanto altro. Evita passi falsi e fai
              scelte più consapevoli per il tuo futuro professionale. Con
              recensioni sincere e trasparenti, la nostra app ti aiuta a capire
              se un azienda fa per te. Unisciti alla comunità e condividi la tua
              esperienza per aiutare gli altri!
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

        <img
          alt=""
          src="./../src/assets/ragazzalogo2.png"
          className="h-56 w-150 object-cover shadow-2xl sm:h-full md:h-full mx-auto"
        />
      </section>
    </div>
  );
}
