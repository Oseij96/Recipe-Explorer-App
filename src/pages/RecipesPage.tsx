import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';
import { Recipe, Category, RecipeFilter } from '../types';

const RecipesPage: React.FC = () => {
  const [filter, setFilter] = useState<RecipeFilter>({
    query: '',
    categories: [],
  });
  
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

  useEffect(() => {
    let result = [...recipes];
    
    // Filter by search query
    if (filter.query) {
      const lowercaseQuery = filter.query.toLowerCase();
      result = result.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(lowercaseQuery) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(lowercaseQuery)
          )
      );
    }
    
    // Filter by categories
    if (filter.categories.length > 0) {
      result = result.filter((recipe) =>
        filter.categories.some((category) => recipe.categories.includes(category))
      );
    }
    
    setFilteredRecipes(result);
  }, [filter]);

  const handleSearch = (query: string) => {
    setFilter((prev) => ({ ...prev, query }));
  };

  const handleCategoryChange = (categories: Category[]) => {
    setFilter((prev) => ({ ...prev, categories }));
  };

  return (
    <div className="container-custom py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-6">Browse Recipes</h1>
        
        <div className="mb-6">
          <SearchBar onSearch={handleSearch} initialQuery={filter.query} />
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Filter by Category</h2>
          <CategoryFilter
            selectedCategories={filter.categories}
            onChange={handleCategoryChange}
          />
        </div>
        
        {filteredRecipes.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No recipes found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RecipesPage;