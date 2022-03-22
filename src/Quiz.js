import React from "react";
import styled from "styled-components";
import useStore from "./store";

function Quiz() {
  const { data } = useStore();
  const { result } = useStore();
  console.log("dsadsasad", result);

  // const showQuiz = (result) => {
  //   data.forEach(() => {
  //     if (el.answer == result) {
  //       el;
  //     }
  //   });
  // };

  return (
    <QuestionDiv>
      <h3>문제 1번</h3>
      {data && data.map((el) => <p>{el.quiz}</p>)}
    </QuestionDiv>
  );
}

export default Quiz;

const QuestionDiv = styled.div`
  /* border: 1px solid; */
  margin: 80px 0 45px 0;
  /* padding: 80px 0; */
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 36px;
    margin-bottom: 30px;
    color: #0068ff;
    font-weight: 700;
  }
  p {
    font-size: 28px;
    border: 2px solid #71cd84;
    border-radius: 15px;
    padding: 30px;
    background-color: #fff;
    margin: 0px 40px;
    height: 160px;
  }
`;
