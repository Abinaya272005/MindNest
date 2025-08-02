import React, { useState, useEffect } from 'react';
import { FaShare, FaArrowLeft } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { Think } from './Tips';
import { Link } from 'react-router-dom';

function Mindcheck() {
  const [select, setSelect] = useState('');
  const [tips, setTips] = useState([]);
  const [visibleTips, setVisibleTips] = useState([]);

  const handleSend = () => {
    const thinkObj = Think.find((m) => m.key === select);
    if (thinkObj) {
      setTips(thinkObj.tips);
      setVisibleTips([]);
    }
  };

  useEffect(() => {
    let timer;
    if (tips.length > 0) {
      setVisibleTips([]);
      tips.forEach((tip, index) => {
        timer = setTimeout(() => {
          setVisibleTips((prev) => [...prev, tip]);
        }, 1200 * index);
      });
    }
    return () => clearTimeout(timer);
  }, [tips]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-pink-100 flex flex-col items-center justify-center px-4 py-6">
      <h1 className="text-4xl font-bold text-purple-800 mb-6 text-center">Mind Mirror</h1>

      <div className="flex gap-2 mb-6">
        <select
          value={select}
          onChange={(e) => setSelect(e.target.value)}
          className="p-2 rounded-md border border-purple-300 shadow-sm text-gray-700"
        >
          <option value="">Select a mood</option>
          {Think.map((mood) => (
            <option key={mood.key} value={mood.key}>
              {mood.emoji} {mood.title}
            </option>
          ))}
        </select>

        <button
          onClick={handleSend}
          className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-800 shadow-lg"
        >
          <FaShare />
        </button>
      </div>

      {visibleTips.length > 0 && (
        <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-md text-left mb-6">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">
            Here are some tips:
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            {visibleTips.map((tip, index) => (
              <li key={index}>
                <Typewriter
                  words={[tip]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={40}
                  deleteSpeed={0}
                  delaySpeed={0}
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link to="/home">
        <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-800 shadow-md transition">
          <FaArrowLeft /> Back to Home
        </button>
      </Link>
    </div>
  );
}

export default Mindcheck;