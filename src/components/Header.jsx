import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / App Name */}
        <div className="text-black text-4xl font-extrabold">
          <Link to="/" className="hover:text-gray-700 transition duration-300">
            Generative AI
          </Link>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-10">
          <ul className="flex space-x-10">
            <li>
              <Link
                to="/"
                className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/image"
                className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
              >
                Image Generation
              </Link>
            </li>
            <li>
              <Link
                to="/audio"
                className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
              >
                Audio-to-Text
              </Link>
            </li>
            <li>
              <Link
                to="/recipe"
                className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
              >
                Recipe Generator
              </Link>
            </li>
            <li>
              <Link
                to="/aboutDeveloper"
                className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
              >
                About Developer
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu for small screens */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="space-y-6 bg-white p-6 shadow-lg">
          <li>
            <Link
              to="/"
              className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/image"
              className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Image Generation
            </Link>
          </li>
          <li>
            <Link
              to="/audio"
              className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Audio-to-Text
            </Link>
          </li>
          <li>
            <Link
              to="/recipe"
              className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Recipe Generator
            </Link>
          </li>
          <li>
            <Link
              to="/aboutDeveloper"
              className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About Developer
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
