import React from "react";
import { useNavigate } from "react-router-dom";

const  StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-5xl font-bold mb-3 tracking-wide">HISTOPEDIA</h1>
      <p className="text-gray-400 text-lg mb-8">Select an option to continue.</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/admin-login")}
          className="bg-[#1f1f1f] hover:bg-[#2a2a2a] text-white px-6 py-3 rounded-md transition duration-200"
        >
          Log in as Admin
        </button>
        <button
          onClick={() => navigate("/sign-up")}
          className="bg-[#1f1f1f] hover:bg-[#2a2a2a] text-white px-6 py-3 rounded-md transition duration-200"
        >
          Continue as User
        </button>
        <button
          onClick={() => navigate("/home")}
          className="bg-[#1f1f1f] hover:bg-[#2a2a2a] text-white px-6 py-3 rounded-md transition duration-200"
        >
          Continue without registration
        </button>
      </div>
    </div>
  );
};

export default StartPage;