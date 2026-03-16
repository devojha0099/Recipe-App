import React from "react";
import Slider from "react-slick";
import { useFetch } from "./useFetch";
import RecipeCard from "./RecipeCard";
import { Clock, Loader } from "lucide-react";

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);
  console.log(data?.meals);
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  if(loading)return(
    <div className="text-center p-8 text-gray-300">
      <Loader className="animate-spin inline-block mr-2 text-blue-400"/>
      Loading {title}...
    </div>
  )
  return (
    <>
      <section className="mt-2 mx-auto ">
        <h2 className="text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-1-4 border-yellow-400 pl-4 flex items-center">
          <Clock className="w-6 h-6 mr-3 text-blue-500" />
          {title}
        </h2>

        <div style={{ width: "90%", margin: "auto", padding: "10px" }}>
          <Slider {...settings}>
            {meals.map((meal) => (
              <div key={meal.idMeal} className="px-10 flex justify-center">
                <RecipeCard key={meal.idMeal} meal={meal} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default RecipeSlider;
