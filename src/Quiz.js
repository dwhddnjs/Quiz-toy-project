import React, { useRef } from "react";
import styled from "styled-components";
import useStore from "./store";
import Clear from "./Clear";

function Quiz() {
  const { data } = useStore();
  const { result } = useStore();
  const answerHandler = useStore((state) => state.answerHandler);
  const setResult = useStore((state) => state.setResult);
  const resetInput = useStore((state) => state.resetInput);
  const InputFocus = useRef();

  const compareAnswer = (result) => {
    if (data[0].answer === result) {
      answerHandler();
      InputFocus.current.focus();
    } else {
      alert("다시 생각해보자");
      resetInput();
      InputFocus.current.focus();
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      compareAnswer(result);
    }
  };

  return (
    <>
      {data.length !== 0 ? (
        <QuestionDiv>
          <h3>문제 {data[0].id}번</h3>
          <p>{data[0].quiz}</p>
          <AnswerDiv>
            <input
              type="text"
              onChange={setResult}
              value={result}
              ref={InputFocus}
              onKeyPress={onKeyPress}
            />
            <button onClick={() => compareAnswer(result)}>정답</button>
          </AnswerDiv>
        </QuestionDiv>
      ) : (
        <Clear />
      )}
    </>
  );
}

export default Quiz;

const QuestionDiv = styled.div`
  margin: 80px 0 45px 0;
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

const AnswerDiv = styled.div`
  margin: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  input {
    width: 450px;
    height: 120px;
    border: none;
    border-bottom: 6px solid #39b48e;
    margin-right: 30px;
    font-size: 80px;
    text-align: center;
    letter-spacing: 15px;
    padding-top: 5px;
    font-weight: 800;
    color: #000;
    outline: none;
    background: #d7fadb;
  }

  button {
    width: 170px;
    height: 140px;
    border-radius: 50%;
    border: none;
    background: #ff6347;
    color: #ffff00;
    font-weight: 700;
    font-size: 35px;
    box-shadow: #ff9000 0 10px 0;
    cursor: pointer;
  }
`;
