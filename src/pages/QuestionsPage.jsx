import { useSelector } from "react-redux";
import QuestionForm from "../components/QuestionForm";
import styled from "styled-components";
import VariantForm from "../components/VariantForm";

const QuestionsPage = () => {
  const { test } = useSelector((state) => state.test);


  return (
    <div>
      {test.map((item) => (
        <div key={item.id}>
          <StyledH1>{item.title}</StyledH1>
          <QuestionForm id={item.id} />
          {item.question.map((element) => (
            <div key={element.id}>
              <StyledH1> {element.id}</StyledH1>
              <VariantForm id={element.id}/>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const StyledH1 = styled.h1`
  text-align: center;
`;
export default QuestionsPage;
