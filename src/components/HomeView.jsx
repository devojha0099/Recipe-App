import React from "react";

import RecipeSlider from "./RecipeSlider";
import TrendingRecipe from "./TrendingRecipe";
import CategorySection from "./CategorySelection";

import { API_URL } from "./useFetch";

const HomeView = ({filterByCategory}) => {
  return (
    <>
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <RecipeSlider
          title="Staff Curated Picks"
          fetchUrl={`${API_URL}search.php?f=c`}
        />

        <TrendingRecipe
          title="Quick & Easy Meals"
          fetchUrl={`${API_URL}filter.php?a=Canadian`}
        />

        <CategorySection filterByCategory={filterByCategory} />
      </main>
    </>
  );
};

export default HomeView;