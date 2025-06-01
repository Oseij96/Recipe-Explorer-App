import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Margherita Pizza',
    description: 'A simple yet delicious traditional Italian pizza with fresh mozzarella, tomatoes, and basil.',
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: 'easy',
    categories: ['dinner', 'vegetarian'],
    ingredients: [
      '1 pizza dough ball',
      '1/4 cup tomato sauce',
      '8 oz fresh mozzarella, sliced',
      '5-6 fresh basil leaves',
      '2 tbsp olive oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Preheat oven to 475°F (245°C) with a pizza stone if available.',
      'Roll out the pizza dough on a floured surface to your desired thickness.',
      'Spread tomato sauce evenly over the dough, leaving a small border for the crust.',
      'Arrange mozzarella slices over the sauce.',
      'Bake for 12-15 minutes until crust is golden and cheese is bubbly.',
      'Remove from oven, top with fresh basil leaves, drizzle with olive oil, and season with salt and pepper.',
      'Slice and serve immediately.'
    ]
  },
  {
    id: '2',
    title: 'Avocado Toast with Poached Egg',
    description: 'A nutritious breakfast favorite with creamy avocado and perfectly poached eggs on artisan bread.',
    image: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    difficulty: 'easy',
    categories: ['breakfast', 'vegetarian', 'healthy', 'quick'],
    ingredients: [
      '2 slices of artisan bread',
      '1 ripe avocado',
      '2 eggs',
      '1 tbsp white vinegar',
      'Red pepper flakes',
      'Salt and pepper to taste',
      'Optional: microgreens or sprouts for garnish'
    ],
    instructions: [
      'Toast the bread slices until golden brown.',
      'In a small bowl, mash the avocado with a fork. Season with salt and pepper.',
      'Bring a pot of water to a gentle simmer. Add vinegar.',
      'Crack each egg into a small cup, then gently slide into the simmering water.',
      'Poach eggs for 3-4 minutes until whites are set but yolks are still runny.',
      'Spread mashed avocado on the toast slices.',
      'Top each toast with a poached egg, sprinkle with red pepper flakes, and add optional microgreens.',
      'Serve immediately.'
    ]
  },
  {
    id: '3',
    title: 'Berry Smoothie Bowl',
    description: 'A refreshing and nutritious smoothie bowl packed with antioxidant-rich berries and customizable toppings.',
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 10,
    cookTime: 0,
    servings: 1,
    difficulty: 'easy',
    categories: ['breakfast', 'snack', 'vegetarian', 'vegan', 'healthy', 'quick'],
    ingredients: [
      '1 cup mixed frozen berries (strawberries, blueberries, raspberries)',
      '1 frozen banana',
      '1/2 cup plant-based milk (almond, oat, or coconut)',
      '1 tbsp chia seeds',
      'Toppings: sliced fresh fruits, granola, coconut flakes, nuts, or seeds'
    ],
    instructions: [
      'Add frozen berries, banana, and plant-based milk to a blender.',
      'Blend until smooth and creamy. The mixture should be thick enough to eat with a spoon.',
      'Pour into a bowl and sprinkle chia seeds on top.',
      'Add your choice of toppings: fresh fruits, granola, coconut flakes, and nuts or seeds.',
      'Serve immediately and enjoy with a spoon!'
    ]
  },
  {
    id: '4',
    title: 'Chocolate Lava Cake',
    description: 'Indulgent individual chocolate cakes with a warm, gooey center. Perfect for chocolate lovers!',
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    difficulty: 'medium',
    categories: ['dessert'],
    ingredients: [
      '4 oz semi-sweet chocolate',
      '1/2 cup unsalted butter',
      '1 cup powdered sugar',
      '2 whole eggs',
      '2 egg yolks',
      '6 tbsp all-purpose flour',
      '1 tsp vanilla extract',
      'Pinch of salt',
      'Optional: powdered sugar or vanilla ice cream for serving'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C). Butter and lightly flour four 6-oz ramekins.',
      'In a microwave-safe bowl, melt chocolate and butter in 30-second intervals, stirring between each interval until smooth.',
      'Whisk in powdered sugar until well blended.',
      'Whisk in eggs and egg yolks, then add vanilla extract.',
      'Stir in flour and salt until just combined.',
      'Divide the batter evenly among the prepared ramekins.',
      'Place ramekins on a baking sheet and bake for 12-14 minutes until the sides are firm but the center is soft.',
      'Let stand for 1 minute, then run a knife around the edges and invert onto dessert plates.',
      'Dust with powdered sugar or serve with vanilla ice cream if desired.'
    ]
  },
  {
    id: '5',
    title: 'Fresh Spring Rolls with Peanut Sauce',
    description: 'Light and refreshing rice paper rolls filled with vegetables, herbs, and your choice of protein.',
    image: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 30,
    cookTime: 0,
    servings: 4,
    difficulty: 'medium',
    categories: ['lunch', 'dinner', 'vegetarian', 'vegan', 'healthy'],
    ingredients: [
      '8 rice paper wrappers',
      '2 cups lettuce leaves, torn',
      '1 large carrot, julienned',
      '1 cucumber, julienned',
      '1 bell pepper, thinly sliced',
      '1 cup fresh herbs (mint, cilantro, basil)',
      'Optional protein: tofu, shrimp, or chicken',
      'For peanut sauce:',
      '1/4 cup natural peanut butter',
      '2 tbsp soy sauce or tamari',
      '1 tbsp lime juice',
      '1 tbsp honey or maple syrup',
      '1 tsp sriracha or chili garlic sauce',
      '2-3 tbsp water to thin'
    ],
    instructions: [
      'Prepare all vegetables and herbs, arranging them on a plate for easy assembly.',
      'If using protein, ensure it is cooked and sliced into strips.',
      'Fill a large, shallow dish with warm water.',
      'Dip one rice paper wrapper in warm water for about 10-15 seconds until it begins to soften.',
      'Lay the softened wrapper on a clean work surface.',
      'Place lettuce leaves in the center, then add a small amount of each vegetable, herb, and protein.',
      'Fold the bottom edge up over the filling, then fold in the sides and roll tightly.',
      'Repeat with remaining wrappers and filling.',
      'For the peanut sauce, whisk together all sauce ingredients until smooth.',
      'Serve spring rolls with peanut dipping sauce.'
    ]
  },
  {
    id: '6',
    title: 'Homemade Pasta Carbonara',
    description: 'A classic Italian pasta dish with a creamy egg sauce, pancetta, and Parmesan cheese.',
    image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: 'medium',
    categories: ['dinner'],
    ingredients: [
      '1 lb spaghetti or fettuccine',
      '8 oz pancetta or bacon, diced',
      '4 large eggs',
      '1 cup freshly grated Parmesan cheese, plus more for serving',
      '4 garlic cloves, minced',
      'Freshly ground black pepper',
      '2 tbsp chopped fresh parsley for garnish',
      'Salt for pasta water'
    ],
    instructions: [
      'Bring a large pot of salted water to a boil and cook pasta according to package directions until al dente.',
      'While pasta cooks, heat a large skillet over medium heat. Add pancetta or bacon and cook until crispy, about 7-8 minutes.',
      'Add minced garlic to the pancetta and cook for 30 seconds until fragrant.',
      'In a separate bowl, whisk together eggs and grated Parmesan cheese.',
      'Reserve 1 cup of pasta cooking water, then drain the pasta.',
      'Working quickly, add the hot pasta to the skillet with pancetta and toss to combine.',
      'Remove skillet from heat and pour in the egg and cheese mixture, tossing continuously to coat the pasta and create a creamy sauce. If needed, add a splash of reserved pasta water to thin the sauce.',
      'Season generously with freshly ground black pepper.',
      'Serve immediately, garnished with additional Parmesan cheese and chopped parsley.'
    ]
  }
];