import React from 'react';
import TopRecipes from '../../Components/recipe/TopRecipes';
import Slider from '../../Components/common/Slider';
import Section1 from '../../Components/common/Section1';
import Section2 from '../../Components/common/Section2';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
    const topRecipeDataPromise= fetch('https://assignment10-server-seven-delta.vercel.app/topRecipe').then(res=>res.json())

    return (
        <div className=' bg-base-300'>
            <Slider></Slider>
            <Section2></Section2>
            <div className="topRecipeContainer bg-base-100">
            <TopRecipes  topRecipeDataPromise={topRecipeDataPromise}></TopRecipes>
            </div>
            <Section1></Section1>

        </div>
    );
};

export default Home;