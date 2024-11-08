import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "../redux/slices/testSlice";
import styled from "styled-components";

const QuestionForm = ({ id }) => {
  const [questionValue, setQuestionValue] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setQuestionValue(event.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    const newQuestion = {
      id: Date.now().toString(),
      title: questionValue,
      questions: [],
      mainId: id,
    };
    dispatch(addQuestion(newQuestion));
    
    setQuestionValue("");
  };

  return (
    <StyledCon>
      <form onSubmit={handlerSubmit}>
        <Title htmlFor="test">Вопросы:</Title>
        <InputContainer
          type="text"
          onChange={handleInputChange}
          value={questionValue}
        />
        <Button type="submit">Добавить вопрос:</Button>
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
`;

export default QuestionForm;
