import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { recipes } from '../data/recipes';
import { useFavorites } from '../context/FavoritesContext';

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  
  const recipe = recipes.find((r) => r.id === id);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!recipe) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
        <p className="mb-6">The recipe you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={() => navigate('/recipes')}
          className="btn btn-primary"
        >
          Browse Recipes
        </button>
      </div>
    );
  }

  const favorite = isFavorite(recipe.id);

  const handleFavoriteToggle = () => {
    if (favorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: recipe.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="bg-white">
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <button
          className="absolute top-4 left-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-colors"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5 text-gray-700" />
        </button>
      </div>
      
      <div className="container-custom -mt-16 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-t-2xl shadow-lg px-6 py-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex gap-2 mb-3">
                {recipe.categories.map((category) => (
                  <span key={category} className="badge bg-primary-100 text-primary-800">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{recipe.title}</h1>
              <p className="text-gray-600">{recipe.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleFavoriteToggle}
                className={`btn ${
                  favorite ? 'btn-primary' : 'btn-outline'
                } flex items-center gap-1`}
              >
                <Heart className={`h-5 w-5 ${favorite ? 'fill-white' : ''}`} />
                <span>{favorite ? 'Saved' : 'Save'}</span>
              </button>
              <button
                onClick={handleShare}
                className="btn btn-outline flex items-center gap-1"
              >
                <Share2 className="h-5 w-5" />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1 text-primary-600">
                <Clock className="h-5 w-5" />
              </div>
              <p className="text-sm text-gray-500">Total Time</p>
              <p className="font-medium">{totalTime} min</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1 text-primary-600">
                <ChefHat className="h-5 w-5" />
              </div>
              <p className="text-sm text-gray-500">Difficulty</p>
              <p className="font-medium capitalize">{recipe.difficulty}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1 text-primary-600">
                <Users className="h-5 w-5" />
              </div>
              <p className="text-sm text-gray-500">Servings</p>
              <p className="font-medium">{recipe.servings}</p>
            </div>
          </div>
          
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-6">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-3"></span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-6">Instructions</h2>
            <ol className="space-y-6">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-800 font-bold mr-4">
                    {index + 1}
                  </span>
                  <span className="pt-1">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;