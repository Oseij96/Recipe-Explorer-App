export type Category = 
  | 'breakfast'
  | 'lunch'
  | 'dinner'
  | 'dessert'
  | 'snack'
  | 'vegetarian'
  | 'vegan'
  | 'quick'
  | 'healthy';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  categories: Category[];
  ingredients: string[];
  instructions: string[];
  isFavorite?: boolean;
}

export interface RecipeFilter {
  query: string;
  categories: Category[];
}