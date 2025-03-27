export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="./../src/assets/imageuno.jpg"
          alt="LAVORATORE-IMAGE"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center ">
        <h1 className="text-6xl font-bold leading-tight mb-4 transform transition duration-700 hover:scale-150">
          WORKER REVIEW
        </h1>
        <p className="text-2xl text-gray-300 mb-8">
          La tua recensione con un click!
        </p>
      </div>
    </div>
  );
}
