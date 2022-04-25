import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: '../assets/sc.jfif',
      ingredient: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: '../assets/spa.jfif',
      ingredient: ['Spaghetti', 'Meat', 'Tomatoes'],
    },
    {
      id: 'r3',
      title: 'Chocolate cookies',
      imageUrl: '../assets/cookies.jfif',
      ingredient: [
        'butter',
        'white sugar',
        'eggs',
        'vanilla extract',
        'baking soda',
        'flour',
        'chocolate chips',
      ],
    },
    {
      id: 'r4',
      title: 'Pizza',
      imageUrl: '../assets/pizza.jfif',
      ingredient: [
        'pizza bread',
        'tomato sauce',
        'canola oil',
        'oregano',
        'basil',
        'pepper',
        'mozzarella cheese',
      ],
    },
    {
      id: 'r5',
      title: 'Pancake',
      imageUrl: '../assets/pancake.jfif',
      ingredient: [
        'flour',
        'baking powder',
        'salt',
        'white sugar',
        'milk',
        'eggs',
        'butter',
      ],
    },
    {
      id: 'r6',
      title: 'Bagels',
      imageUrl: '../assets/bagel.jfif',
      ingredient: [
        'warm water',
        'dry yeast',
        'bread flour',
        'brown sugar',
        'salt',
        'olive oil',
        'eggs',
      ],
    },
    {
      id: 'r7',
      title: 'Chocolate shake',
      imageUrl: '../assets/chocolate_shake.jfif',
      ingredient: ['chocolate ice cream', 'cold milk', 'chocolate syrup'],
    },
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => recipe.id === recipeId),
    };
  }

  deleteRecipe(recipeId: string) {
    // eslint-disable-next-line arrow-body-style
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }
}
