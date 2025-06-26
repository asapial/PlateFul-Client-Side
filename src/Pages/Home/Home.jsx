import React from "react";
import TopRecipes from "../../Components/recipe/TopRecipes";
import Slider from "../../Components/common/Slider";
import Section1 from "../../Components/common/Section1";
import Section2 from "../../Components/common/Section2";
import BlogSection from "../../Components/recipe/BlogSection";
import FeaturedChefs from "../../Components/recipe/FeaturedChefs";

const Home = () => {

  return (
    <div className=" bg-base-300">
      <Slider></Slider>
      <Section2></Section2>
      <div className="topRecipeContainer bg-base-100">
        <TopRecipes></TopRecipes>
      </div>
      <div className="blogSectionContainer bg-base-300">
        <BlogSection></BlogSection>
      </div>

      <div className="topRatedItemsContainer bg-base-100">
        <FeaturedChefs></FeaturedChefs>
      </div>
            <Section1></Section1>
    </div>
  );
};

export default Home;

// topRecipeDataPromise={topRecipeDataPromise}
