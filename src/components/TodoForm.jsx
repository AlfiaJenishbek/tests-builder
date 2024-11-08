import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addTodo } from "../redux/slices/testSlice";

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now().toString(),
      title: inputValue,
      questions: [],
    };
    dispatch(addTodo(newTodo));
    navigate("/questions");
  };

  return (
    <StyledCon>
      <form onSubmit={handleSubmit}>
        <Title htmlFor="test">Введите называния теста:</Title>
        <InputContainer type="text" onChange={handleInputChange} value={inputValue} />
        <Button type="submit">Добавить</Button>
      </form>
    </StyledCon>
  );
};

  const StyledCon = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  `;

  const Title = styled.label`
    text-align: center;
  `;

  const InputContainer = styled.input`
    display: flex;
    margin-bottom: 10px;
  `;

  const Button = styled.button`
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  `

