import { useDispatch, useSelector } from "react-redux";
import Avatar from "react-avatar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../features/global/globalSlice";

function UserPage() {
  const { user } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  if (!user) return null;

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow-md text-center">
      <Avatar
        name={`${user.name} ${user.surname}`}
        size="80"
        round
        className="mx-auto mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">
        {user.name} {user.surname}
      </h1>
      <p className="text-gray-600 mb-1">{user.email}</p>
      <p className="text-sm text-gray-500">ID Utente: {user.id}</p>
      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default UserPage;
