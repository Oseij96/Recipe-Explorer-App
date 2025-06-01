import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';
import { useFavorites } from '../context/FavoritesContext';

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();
  
  const favoriteRecipes = recipes.filter((recipe) => 
    favorites.includes(recipe.id)
  );

  return (
    <div className="container-custom py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-6">Your Favorite Recipes</h1>
        
        {favoriteRecipes.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <Heart className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium mb-2">No favorites yet</h3>
            <p className="text-gray-600 mb-6">
              Save your favorite recipes to access them quickly later.
            </p>
            <Link to="/recipes" className="btn btn-primary">
              Browse Recipes
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default FavoritesPage;