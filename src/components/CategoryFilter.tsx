import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  selectedCategories: Category[];
  onChange: (categories: Category[]) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'dinner', label: 'Dinner' },
  { value: 'dessert', label: 'Dessert' },
  { value: 'snack', label: 'Snack' },
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'quick', label: 'Quick & Easy' },
  { value: 'healthy', label: 'Healthy' },
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategories, onChange }) => {
  const toggleCategory = (category: Category) => {
    if (selectedCategories.includes(category)) {
      onChange(selectedCategories.filter(c => c !== category));
    } else {
      onChange([...selectedCategories, category]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 my-4">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => toggleCategory(category.value)}
          className={`badge transition-colors ${
            selectedCategories.includes(category.value)
              ? 'bg-primary-100 text-primary-800 border border-primary-300'
              : 'bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200'
          } px-3 py-1 rounded-full text-sm`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;