import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Heart } from 'lucide-react';
import { Recipe } from '../types';
import { useFavorites } from '../context/FavoritesContext';
import { motion } from 'framer-motion';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(recipe.id);

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (favorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="card h-full flex flex-col"
    >
      <Link to={`/recipe/${recipe.id}`} className="flex flex-col h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <button
            onClick={handleFavoriteToggle}
            className={`absolute top-2 right-2 p-2 rounded-full ${
              favorite ? 'bg-primary-50 text-primary-600' : 'bg-gray-100 text-gray-400'
            } hover:bg-primary-100 transition-colors`}
            aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`h-5 w-5 ${favorite ? 'fill-primary-600' : ''}`} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <div className="flex gap-3 text-white text-xs">
              {recipe.categories.slice(0, 2).map((category) => (
                <span key={category} className="badge bg-primary-500 text-white">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-medium text-gray-900 mb-2">{recipe.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{recipe.description}</p>
          <div className="flex justify-between text-gray-500 text-sm">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{recipe.prepTime + recipe.cookTime} min</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RecipeCard;