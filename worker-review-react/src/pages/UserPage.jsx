import { useDispatch, useSelector } from "react-redux";
import Avatar from "react-avatar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../features/global/globalSlice";
import { FaPen } from "react-icons/fa";
import { toast } from "react-hot-toast";

function UserPage() {
  const { user } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(user.description || "");

  useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("user");
    window.location.reload();
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDescriptionSave = async () => {
    try {
      const res = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
      });
  
      if (!res.ok) {
        const error = await res.text();
        throw new Error(error);
      }
  
      setIsEditing(false);
      toast.success("Descrizione aggiornata!");
    } catch (err) {
      toast.error("Errore durante il salvataggio della descrizione");
      console.error(err);
    }
  };

  const handleDescriptionEdit = () => {
    setIsEditing(true);
  };

  if (!user) return null;

  return (
    <div className="relative bg-green-600 py-16 min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/BackgroundUtente.jpg"
          alt="USER-BACKGROUND"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-green-950 opacity-50"></div>
      </div>
      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold">Benvenuto in Worker Review</h1>
        <h2 className="text-xl mt-2">Questa è la tua area personale</h2>
      </div>
      <div className="relative max-w-lg mx-auto bg-white p-8 rounded-xl shadow-xl z-10 mt-12">
        <div className="flex items-center mb-6">
          <Avatar
            name={`${user.name} ${user.surname}`}
            size="120"
            round
            className="mr-6"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-1">
              {user.name} {user.surname}
            </h1>
            <span className="text-sm text-gray-500">ID: {user.id}</span>
            <p className="text-lg text-gray-600 mt-1">{user.email}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Descrizione</h2>
          {isEditing ? (
            <div className="flex items-center">
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                className="border p-2 rounded-md w-full"
                rows="4"
              />
              <button
                onClick={handleDescriptionSave}
                className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Salva
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <p className="text-gray-600 w-full">{description || "Nessuna descrizione."}</p>
              <FaPen
                onClick={handleDescriptionEdit}
                className="text-gray-500 cursor-pointer ml-2 hover:text-green-500"
                size={18}
              />
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
