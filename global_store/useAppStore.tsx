import React from "react";
import create from "zustand";
import { Recipe } from "../models/recipe_model";

interface IAppStore {
    selectedRecipes: Recipe[],
    onSelectRecipe: Function,
    firstname: string,
    email: string,
    handleUserInfoChange: Function,
}

const useAppStore = create<IAppStore>((set, get) => ({
    selectedRecipes: [],
    onSelectRecipe: (recipe: Recipe) => {
        let selectedRecipes: Recipe[] = get().selectedRecipes
        if(selectedRecipes.find((r) => r.id === recipe.id)){ selectedRecipes = selectedRecipes.filter((rec) => rec.id !== recipe.id) } 
        else{  selectedRecipes.push(recipe)  }
        set({ selectedRecipes })  
    },
    firstname: '',
    email: '',
    handleUserInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        set({ [id]: value })
    }
}))

export default useAppStore