import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, UtensilsCrossed, Timer, Award } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';

const HomePage: React.FC = () => {
  // Featured recipes for the hero section
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Delicious Recipes for Every Occasion
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-100">
              Explore our collection of easy-to-follow recipes, from quick weeknight dinners to impressive desserts.
            </p>
            <Link
              to="/recipes"
              className="btn bg-white text-primary-700 hover:bg-primary-50 px-6 py-3 rounded-lg inline-flex items-center"
            >
              Browse Recipes
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why You'll Love Our Recipes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Carefully curated and tested recipes to make your cooking experience enjoyable and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-center p-6 rounded-lg border border-gray-100 shadow-sm"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 text-primary-600 rounded-full mb-4">
                <UtensilsCrossed className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Simple Ingredients</h3>
              <p className="text-gray-600">
                Our recipes use easy-to-find ingredients you might already have in your pantry.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-center p-6 rounded-lg border border-gray-100 shadow-sm"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 text-primary-600 rounded-full mb-4">
                <Timer className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick & Easy</h3>
              <p className="text-gray-600">
                From prep to table in no time with our efficient cooking methods and clear instructions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-center p-6 rounded-lg border border-gray-100 shadow-sm"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 text-primary-600 rounded-full mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tested & Perfected</h3>
              <p className="text-gray-600">
                Every recipe is thoroughly tested to ensure consistent, delicious results every time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Recipes</h2>
            <Link 
              to="/recipes" 
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
            >
              View All
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start cooking?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our full collection of recipes and find your next favorite dish.
          </p>
          <Link
            to="/recipes"
            className="btn btn-primary px-8 py-3 rounded-lg"
          >
            Explore All Recipes
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;