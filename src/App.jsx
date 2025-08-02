import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import Login from './Login';
import Home from './Home';
import Mindcheck from './Mindcheck';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login user={user} setUser={setUser} />} />
      <Route path="/home" element={user ? <Home user={user} setUser={setUser} /> : <Navigate to="/" />} />
      <Route path="/mindcheck" element={user ? <Mindcheck /> : <Navigate to="/" />} />
    </Routes>
  );
}

export default App;