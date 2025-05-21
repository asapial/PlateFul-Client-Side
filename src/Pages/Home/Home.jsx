import React from 'react';
import TopRecipes from '../../Components/recipe/TopRecipes';
import Lottie from 'lottie-react';
import groovyWalkAnimation from "/src/assets/walking.json";

const Home = () => {
    const topRecipeDataPromise= fetch('http://localhost:3000/topRecipe').then(res=>res.json())
    console.log(topRecipeDataPromise);
    return (
        <div className=''>
            <TopRecipes topRecipeDataPromise={topRecipeDataPromise}></TopRecipes>
            <Lottie animationData={groovyWalkAnimation} className=' h-[400px]' />;

        </div>
    );
};

export default Home;