import React from 'react'
import { FormContainer,FoodInput,Button,Select } from './HeaderStyles';
  

const Form = ({ setMeal, setQuery, getData, mealTypes }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput type='text' placeholder='search'
        onChange={(e) => setQuery(e.target.value)} />
      <Button type='submit'>Search</Button>
      <Select name='mealTypes' id='mealTypes'
        onChange={(e) => setMeal(e.target.value)}>
        {
          mealTypes.map((item,index)=> <option key={index} value={item.toLowerCase()}>{item}</option>)
        }
      </Select>
   </FormContainer>
  )
}

export default Form
