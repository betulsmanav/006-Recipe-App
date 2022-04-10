
import axios from 'axios';
import React, { useState } from 'react'
import Header from '../../components/header/Header';
import {HomeImg,ImgDiv,MainContainer} from "./HomeStyles"
import RecipeCardComp from './RecipeCardComp';
import homeSvg from "../../assets/home.svg"

const APP_ID = "ea2a0dd0";
const APP_KEY = "8d9e3b604282560023d974739d4fa5a0";

const Home = () => {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState();
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"]
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  
  
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      setFood(result.data.hits)
      console.log(result.data.hits)
      // console.log(result)
    }else{console.log("lutfen formu doldur!")}
      
  }
  return (
    <div>
      <Header
        setQuery={setQuery}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
      />
      {food ? (
        <MainContainer>
          {food.map((foodListe, index) => (
            <RecipeCardComp key={index} karsilamaRecipe={foodListe.recipe}/>
          ))}

        </MainContainer>
      ) : (
          <ImgDiv>
            <HomeImg src={homeSvg}/>
        </ImgDiv>)}
    </div>
  )
}

export default Home;