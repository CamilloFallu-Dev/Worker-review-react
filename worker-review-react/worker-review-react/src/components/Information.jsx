export default function Information() {
  return (
    <div className="mt-20">
      <section>
        <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold text-center sm:text-5xl">
              Funzionalità
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
              Esplora le ultime funzionalità che migliorano la tua esperienza di
              apprendimento e la rendono ancora più entusiasmante.
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-4 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="lucide lucide-rocket"
                      >
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi ">
                      Recensioni sempre nuove
                    </h4>
                    <p className="mt-2 ">
                      Offriamo opinioni aggiornate su aziende e servizi, per
                      aiutarti a fare scelte consapevoli. Ogni recensione è
                      imparziale e tempestiva, garantendo contenuti freschi e
                      utili.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="lucide lucide-bookmark-plus"
                      >
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                        <line x1="12" x2="12" y1="7" y2="13"></line>
                        <line x1="15" x2="9" y1="10" y2="10"></line>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi ">
                      Verifica delle recensioni
                    </h4>
                    <p className="mt-2 ">
                      Ci dedichiamo e garantire l'affidabilità delle opinioni
                      online, filtrando informazioni false o ingannevoli.
                      Forniamo analisi accurate per aiutarti a distinguere le
                      recensioni autentiche da quelle manipolate.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="lucide lucide-video"
                      >
                        <path d="m22 8-6 4 6 4V8Z"></path>
                        <rect
                          width="14"
                          height="12"
                          x="2"
                          y="6"
                          rx="2"
                          ry="2"
                        ></rect>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi ">
                      Filtri per settore
                    </h4>
                    <p className="mt-2 ">
                      Permettono di selezionare recensioni e informazioni
                      specifiche per categoria, semplificando la ricerca. Ideali
                      per chi cerca opinioni mirate in settori particolari come
                      tecnologia, salute, moda e altro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                width="600"
                height="600"
                src={"/public/logoWR.png"}
                className="mx-auto dark-bg-gray-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
