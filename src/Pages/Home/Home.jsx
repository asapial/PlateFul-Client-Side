import React from 'react';
import TopRecipes from '../../Components/recipe/TopRecipes';
import Lottie from 'lottie-react';
import groovyWalkAnimation from "/src/assets/walking.json";
import Slider from '../../Components/common/Slider';

const Home = () => {
    const topRecipeDataPromise= fetch('http://localhost:3000/topRecipe').then(res=>res.json())
    console.log(topRecipeDataPromise);
    return (
        <div className=''>
            <Slider></Slider>
            <TopRecipes topRecipeDataPromise={topRecipeDataPromise}></TopRecipes>
            <Lottie animationData={groovyWalkAnimation} className=' h-[400px]' />;

        </div>
    );
};

export default Home;