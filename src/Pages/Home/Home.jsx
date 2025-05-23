import React from 'react';
import TopRecipes from '../../Components/recipe/TopRecipes';
import Slider from '../../Components/common/Slider';
import Section1 from '../../Components/common/Section1';
import Section2 from '../../Components/common/Section2';

const Home = () => {
    const topRecipeDataPromise= fetch('https://assignment10-server-seven-delta.vercel.app/topRecipe').then(res=>res.json())
    console.log(topRecipeDataPromise);
    return (
        <div className=''>
            <div>
                <button className="btn btn-neutral">Neutral</button>
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-accent">Accent</button>
                <button className="btn btn-info">Info</button>
                <button className="btn btn-success">Success</button>
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-error">Error</button>
            </div>
            <Slider></Slider>
            <Section2></Section2>
            <div className="topRecipeContainer bg-slate-100">
            <TopRecipes  topRecipeDataPromise={topRecipeDataPromise}></TopRecipes>
            </div>
            <Section1></Section1>

        </div>
    );
};

export default Home;