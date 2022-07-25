import create from "zustand";
import { recipesList } from "./data";

export const useStore = create((set) => ({
  recipes: recipesList,
  currentRecipe: recipesList[0],
  updateRecipe: (id) => {
    const findRecipe = recipesList.find((r) => id === r.id);
    set({ currentRecipe: findRecipe });
  },
}));
