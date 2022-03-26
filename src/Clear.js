import React from "react";
import styled from "styled-components";

function Clear() {
  return (
    <ResultDiv>
      <h3>100점</h3>
      <p>
        사자성어를 많이 아는 당신은 입이 박학다식 하군요. <br />매 대화에
        사자성어를 섞어 똑똑한 척을 하는 당신은 입이 청산유수일 가능성이
        높습니다 <br />
        하지만 다른사람 입장에서는 당신의 말이 이해 못할수 있으므로 허세 적당히
        부리고 그만 섞어 쓰세요
      </p>
      <pre>"이해하기 쉽게 말하는 사람이 진정한 언변의 마술사입니다"</pre>
      <button>다시하기</button>
    </ResultDiv>
  );
}

export default Clear;

const ResultDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid;
  height: 100%;
  padding: 0 40px 0 40px;
  h3 {
    margin: 70px 0 0 0;
    color: #0068ff;
    font-weight: 700;
    font-size: 80px;
    text-shadow: 0 1px 0 #eeedff, 0 2px 0 #eeedff, 0 3px 0 #eeedff,
      0 4px 0 #eeedff, 0 5px 0 #eeedff, 0 6px 1px rgba(0, 0, 0, 0.1),
      0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
      0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.15) 8px 8px 0px;
  }
  p {
    background: none;
    border: none;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
  }

  pre {
    font-size: 28px;
    font-weight: 700;
    padding-bottom: 5px;
    color: #fff;
    text-shadow: 0 0 40px white, 0 0 30px white, 0 0 10px black, 0 0 20px black;
  }
  button {
    width: 200px;
    height: 70px;
    border-radius: 10px;
    background-color: #39b48e;
    color: #fff;
    font-weight: 700;
    font-size: 28px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.15) 6px 6px 0px;
    cursor: pointer;
    margin-bottom: 40px;
  }
`;
