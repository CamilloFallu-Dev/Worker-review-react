export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="container px-4 mx-auto">
        <div className="pt-24 pb-11 mx-auto max-w-4xl">
          <p className="block md:mx-auto mb-5 max-w-max">
            <img
              width="175"
              height="100"
              src="/public/logoWR.png"
              className="transform transition duration-700 hover:scale-150"
            ></img>
          </p>
          <div className="flex flex-wrap justify-center  lg:-mx-6">
            <div className="w-full md:w-auto p-3 ">
              <p className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium cursor-pointer">
                Termini e condizioni
              </p>
            </div>
            <div className="w-full md:w-auto p-3 ">
              <p className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium cursor-pointer">
                Privacy
              </p>
            </div>
            <div className="w-full md:w-auto p-3 ">
              <p className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium cursor-pointer">
                Contatti
              </p>
            </div>
            <div className="w-full md:w-auto p-3 ">
              <p className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium cursor-pointer">
                Lavora con noi
              </p>
            </div>
            <div className="w-full md:w-auto p-3 ">
              <p className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium cursor-pointer">
                Altro
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <p className="py-10 md:pb-20 text-md text-gray-400 font-medium text-center">
          © 2025 workerreview.it tutti i diritti riservati
        </p>
      </div>
    </footer>
  );
}
