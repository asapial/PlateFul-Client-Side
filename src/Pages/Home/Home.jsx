import React from 'react';
import TopRecipes from '../../Components/recipe/TopRecipes';

const Home = () => {
    const topRecipeDataPromise= fetch('http://localhost:3000/topRecipe').then(res=>res.json())
    console.log(topRecipeDataPromise);
    return (
        <div className=''>
            <TopRecipes topRecipeDataPromise={topRecipeDataPromise}></TopRecipes>
            

        </div>
    );
};

export default Home;