import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recipes" element={<RecipesPage />} />
              <Route path="/recipe/:id" element={<RecipeDetailPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-white py-8">
            <div className="container-custom">
              <div className="text-center">
                <p className="text-sm text-gray-400">
                  &copy; {new Date().getFullYear()} Recipe Explorer. Created for portfolio demonstration.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;