

import React from 'react'
import { useNavigate } from 'react-router-dom'
import {RecipeCard, RecipeHeader, RecipeImage,Button} from './HomeStyles'

const RecipeCardComp = ({ karsilamaRecipe }) => {
  const navigate = useNavigate();
  const moreClick = () => {
    navigate("/details",{state:{karsilamaRecipe}})
  }
 

  return (
    <div>
      <RecipeCard>
        <RecipeHeader>
          {karsilamaRecipe.label}
        </RecipeHeader>
        <RecipeImage src={karsilamaRecipe.image} />
        <Button onClick={moreClick}>View More</Button>
      </RecipeCard>
    </div>
  )
}

export default RecipeCardComp;