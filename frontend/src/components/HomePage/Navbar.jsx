import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("users");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-[#1d1d1b] shadow-lg font-sans">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <Link to="/" className="transition-transform hover:scale-105 duration-300">
          <h1 className="text-3xl font-bold mb-3 tracking-wide text-white">HISTOPEDIA</h1>

        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 text-white text-lg font-semibold flex-wrap mt-4 sm:mt-0 tracking-wide">
          {[
            { name: "Home", to: "/" },
            { name: "Encyclopedia", to: "/encyclopedia" },
            { name: "Timeline", to: "/Timeline" },
            { name: "Word Map", to: "/map" },
            { name: "Blog", to: "/blogs" },
            { name: "Quiz", to: "/quizz" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="relative transition duration-300 hover:text-[#fca311] after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 hover:after:w-full after:h-[2px] after:bg-[#fca311] after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}

          {user ? (
            <Link
              to="/Profile"
              className="relative transition duration-300 hover:text-[#fca311] after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 hover:after:w-full after:h-[2px] after:bg-[#fca311] after:transition-all after:duration-300"
            >
              Profile
            </Link>
          ) : (
            <Link
              to="/sign-up"
              className="bg-[#fca311] text-black px-5 py-1.5 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-lg hover:bg-white transition duration-300"
            >
              Join Us
            </Link>
          )}
        </nav>


      </div>
    </header>
  );
};

export default Navbar;
