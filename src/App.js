import styled, { createGlobalStyle } from "styled-components";
import Quiz from "./Quiz";
import { useRef, useState } from "react";
import useStore from "./store";

function App() {
  const { result } = useStore();
  const setResult = useStore((state) => state.setResult);

  return (
    <ContainerDiv>
      <ContentDiv>
        <h2>똑척퀴즈</h2>
        <Quiz />
        <AnswerDiv>
          <input type="text" onChange={setResult} />
          <button>정답</button>
        </AnswerDiv>
      </ContentDiv>
    </ContainerDiv>
  );
}

export default App;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

const ContainerDiv = styled.div`
  /* border: 1px solid; */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #39b48e, #71cd84);
`;

const ContentDiv = styled.div`
  border-radius: 30px;
  width: 750px;
  height: 600px;
  position: relative;
  background-color: #d7fadb;
  box-shadow: rgba(0, 0, 0, 0.15) 8px 8px 0px;
  h2 {
    font-size: 70px;
    font-weight: 700;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
      0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.15);
    color: #fff;
    position: absolute;
    top: -35px;
    left: 30px;
  }
`;

const AnswerDiv = styled.div`
  margin: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0 40px 0 40px; */
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
