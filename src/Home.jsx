import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const Home = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate('/');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100 text-center px-4">
      <h1 className="text-4xl font-bold text-purple-800 mb-2">
        Hello, {user?.displayName || 'User'}! 👋
      </h1>
      <p className="text-gray-700 mb-6 text-lg">
        Welcome to your mental wellness space ✨
      </p>

      <button
        onClick={() => navigate('/mindcheck')}
        className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-800 transition mb-4"
      >
        Go to MindCheck 🧠
      </button>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-700 transition"
      >
        Logout 🔒
      </button>
    </div>
  );
};

export default Home;