import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useClerk, UserButton, useUser } from "@clerk/clerk-react";

export const Menubar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openSignIn, openSignUp, loaded } = useClerk();
  const { user, isLoaded } = useUser();

  const handleRegister = () => {
    setMenuOpen(false); 
    openSignUp({});
  };

  const handleLogin = () => {
    setMenuOpen(false);
    openSignIn({});
  };

  // close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".mobile-menu-container") && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 md:px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      {/* Left side: logo + text */}
      <Link to="/" className="flex items-center space-x-3">
        <div className="p-1 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
          <img
            src={assets.logo}
            className="w-7 h-7 object-contain cursor-pointer filter brightness-0 invert"
            alt="Logo"
          />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 bg-clip-text text-transparent cursor-pointer">
          Remove.<span className="text-gray-400 cursor-pointer">bg</span>
        </span>
      </Link>

      {/* Right side: desktop menu */}
      <div className="hidden md:flex items-center space-x-6">
        {!loaded || !isLoaded ? (
          // Loading skeleton
          <div className="flex items-center space-x-4">
            <div className="h-10 w-16 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-10 w-24 bg-gray-200 rounded-xl animate-pulse"></div>
          </div>
        ) : (
          <>
            <SignedOut>
              <button
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                onClick={handleRegister} 
              >
                Get Started
              </button>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-2 sm:gap-3">
                <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-5 py-1.5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer">
                  <img src={assets.credits} alt="Credits" className="w-4 h-4" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    Credits: <span className="text-indigo-600">0</span>
                  </span>
                </button>
                <p className="text-gray-600 max-sm:hidden">Hi, {user?.fullName || 'User'}</p>
              </div>
              <UserButton />
            </SignedIn>
          </>
        )}
      </div>

      {/* Mobile menu button (Hamburger) */}
      <div className="flex md:hidden mobile-menu-container relative">
        <button
          aria-label="Toggle menu"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={28} className="text-gray-700" />
          ) : (
            <Menu size={28} className="text-gray-700" />
          )}
        </button>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-14 right-0 bg-white shadow-xl rounded-2xl border border-gray-100 flex flex-col w-52 p-3 animate-in slide-in-from-top-2 duration-200 backdrop-blur-sm">
            {!loaded || !isLoaded ? (
              <div className="p-4">
                <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ) : (
              <>
                <SignedOut>
                  <button
                    onClick={handleLogin}
                    className="text-gray-600 hover:text-indigo-600 hover:bg-gray-50 font-medium p-3 rounded-xl transition-all duration-200 text-center"
                  >
                    Login
                  </button>
                  <div className="h-px bg-gray-100 my-1"></div>
                  <button
                    onClick={handleRegister}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-3 rounded-xl font-medium transition-all duration-200 mt-2"
                  >
                    Sign Up
                  </button>
                </SignedOut>
                <SignedIn>
                  <div className="flex items-center gap-2 sm:gap-3 py-2">
                    <button className="flex items-center gap-2 bg-blue-100 px-4 sm:py-2.5 py-1.5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer">
                      <img src={assets.credits} alt="Credits" className="w-4 h-4" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">
                        Credits: <span className="text-indigo-600">0</span>
                      </span>
                    </button>
                  </div>
                  <UserButton />
                </SignedIn>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
