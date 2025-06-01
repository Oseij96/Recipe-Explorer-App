import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChefHat } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary-600"
            onClick={closeMenu}
          >
            <ChefHat className="h-6 w-6" />
            <span className="text-xl font-semibold">Recipe Explorer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                isActive('/') ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/recipes" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                isActive('/recipes') ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Recipes
            </Link>
            <Link 
              to="/favorites" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                isActive('/favorites') ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Favorites
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  isActive('/') ? 'text-primary-600' : 'text-gray-700'
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/recipes" 
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  isActive('/recipes') ? 'text-primary-600' : 'text-gray-700'
                }`}
                onClick={closeMenu}
              >
                Recipes
              </Link>
              <Link 
                to="/favorites" 
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  isActive('/favorites') ? 'text-primary-600' : 'text-gray-700'
                }`}
                onClick={closeMenu}
              >
                Favorites
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;