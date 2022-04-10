import React from 'react'
import {FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput} from './LoginStyles'
import meal from '../../assets/meal.svg'
const Login = () => {
  
  const user = {
    username: "user"
  };

  const siteyeGir = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user",JSON.stringify(user))
    window.location.href="/home"
  }
  return (
    <LoginContainer>
      <FormContainer onSubmit={siteyeGir}>
        <StyledImg src={meal} />
        <Header>{"<BETUL>"}Recipe</Header>
        <StyledForm>
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">LOGIN</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>

  )
}

export default Login
