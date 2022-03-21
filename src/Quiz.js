import React from "react";
import styled from "styled-components";

function Quiz() {
  return (
    <QuestionDiv>
      <h3>문제 1번</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iure
        labore tempora sapiente commodi cum libero eos ducimus. Ullam, velit
        placeat nam consequuntur ratione quaerat dolorem error magni odit fugit!
      </p>
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
