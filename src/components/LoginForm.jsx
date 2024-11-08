import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === auth.email && password === auth.password) {
      navigate("/new-test")
    }else{
      navigate("/tests")
    }
  };

  return (
    <Container>
    <StyledLogin>
    <form onSubmit={handleSubmit}>
      <div>
        <Title htmlFor="email">Email:</Title>
        <Input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Title htmlFor="password">Password:</Title>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button type="submit">войти</Button>
    </form>
    </StyledLogin>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`

const StyledLogin = styled.div`
    /* background-color: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 300px; */
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 340px;
`
const Title = styled.label`
  margin-bottom: 20px;
  text-align: center;
  /* color: #333; */
  font-family: 'Arial', sans-serif;
  color: #333;
`

const Input = styled.input`
  /* width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #2575fc;
    outline: none;
  } */
  width: 320px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: #007bff; 
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`

const Button = styled.button`
  /* width: 100%;
  padding: 12px;
  background-color: #2575fc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
 
  &:hover {
    background-color: #1e61b3;
  } */
    width: 100%;
  padding: 10px;
  background-color: #007bff; 
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; 
  }
  `