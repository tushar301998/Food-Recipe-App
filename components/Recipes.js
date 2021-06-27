import React from 'react'
import RecipeItem from './RecipeItem'

const Recipes = props=>{
    const {recipe} = props;
    return (
        <div class = "row">
            {recipe.map(recipe =>(
                <RecipeItem 
                name = {recipe.recipe.label}
                image = {recipe.recipe.image}
                ingredientLines = {recipe.recipe.ingredientLines}
                />
            ))}
        </div>
    );
}


export default Recipes;