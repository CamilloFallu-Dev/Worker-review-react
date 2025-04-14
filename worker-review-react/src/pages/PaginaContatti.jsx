import FaqContatti from "./../components/Faqcontatti";
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "../features/global/globalSlice";
import { useContactsMutation } from "../services/apiService";
import toast from "react-hot-toast";
import { useEffect } from "react";

function PaginaContatti() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.global.message) || {};
  const [contacts, { isLoading, error }] = useContactsMutation();

  useEffect(() => {
    const savedContacts = localStorage.getItem("message");
    if (savedContacts) {
      dispatch(setContacts(JSON.parse(savedContacts)));
    }
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedMessage = { ...message, [name]: value };
    dispatch(setContacts(updatedMessage));
    localStorage.setItem("message", JSON.stringify(updatedMessage));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await contacts({
        name: message.nome,
        surname: message.cognome,
        email: message.email,
        message: message.messaggio,
      }).unwrap();
      localStorage.setItem("message", JSON.stringify(response));
      dispatch(setContacts(response));
      toast.success("Messaggio inviato!");
    } catch (err) {
      toast.error("Errore nell' invio del messaggio!");
    }
  };

  return (
    <div>
      <div className=" relative flex flex-col items-center py-16 bg-green-400/20">
        <div className="absolute inset-0">
          <img
            src="/contattipage.jpg"
            alt="LAVORATORE-IMAGE"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-green-950 opacity-50"></div>
        </div>
        <div className=" relative text-center text-black">
          <h1 className="text-4xl font-bold">Worker Review</h1>
          <h2 className="text-xl mt-2">
            Contattaci per informazioni o problemi
          </h2>
        </div>

        <div className=" relative bg-white rounded-md p-6 w-72 mx-auto mt-12 shadow-2xl">
          <form onSubmit={handleSubmit}>
            <label>Nome</label>
            <input
              className="bg-white w-full p-2 mb-4 rounded-lg border border-gray-400"
              type="text"
              name="nome"
              value={message.nome}
              onChange={handleChange}
              placeholder="Nome"
            />
            <label>Cognome</label>
            <input
              className="bg-white w-full p-2 mb-4 rounded-lg border border-gray-400"
              type="text"
              name="cognome"
              value={message.cognome}
              onChange={handleChange}
              placeholder="Cognome"
            />
            <label>Email</label>
            <input
              className="bg-white w-full p-2 mb-4 rounded-lg border border-gray-400"
              type="email"
              name="email"
              value={message.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <label>Messaggio</label>
            <textarea
              className="bg-white w-full p-2 mb-4 rounded-lg border border-gray-400"
              name="messaggio"
              value={message.messaggio}
              onChange={handleChange}
              placeholder="Scrivi qui il tuo messaggio..."
            />
            <button
              className="bg-green-600 w-full rounded-lg py-2 text-white hover:bg-green-700 cursor-pointer"
              type="submit"
            >
              {isLoading ? "Invio messaggio..." : "Invia"}
            </button>
            {error && (
              <p className="text-red-500 text-sm mt-2">
                Errore: {error.data?.message || "Qualcosa è andato storto"}
              </p>
            )}
          </form>
        </div>
      </div>
      <FaqContatti />
    </div>
  );
}

export default PaginaContatti;
