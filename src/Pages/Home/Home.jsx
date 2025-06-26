import React from 'react';
import TopRecipes from '../../Components/recipe/TopRecipes';
import Slider from '../../Components/common/Slider';
import Section1 from '../../Components/common/Section1';
import Section2 from '../../Components/common/Section2';
import { Fade } from 'react-awesome-reveal';
import TopRatedItems from '../../Components/recipe/TopRatedItems';
import BlogSection from '../../Components/recipe/BlogSection';

const Home = () => {
    // const topRecipeDataPromise= fetch('https://assignment10-server-seven-delta.vercel.app/topRecipe').then(res=>res.json())

    return (
        <div className=' bg-base-300'>
            <Slider></Slider>
            <Section2></Section2>
            <div className="topRecipeContainer bg-base-100">
            <TopRecipes  ></TopRecipes>
            </div>
            <Section1></Section1>
                        <div className="blogSectionContainer bg-base-100">
            <BlogSection></BlogSection>
            </div>

                        <div className="topRatedItemsContainer bg-base-100">
            <TopRatedItems></TopRatedItems>
            </div>
            


        </div>
    );
};

export default Home;

// topRecipeDataPromise={topRecipeDataPromise}