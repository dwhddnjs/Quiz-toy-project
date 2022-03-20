import styled, { createGlobalStyle } from "styled-components";

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
  height: 900px;
  position: relative;
  background-color: #d7fadb;

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

function App() {
  return (
    <ContainerDiv>
      <ContentDiv>
        <h2>똑척퀴즈</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iure
            labore tempora sapiente commodi cum libero eos ducimus. Ullam, velit
            placeat nam consequuntur ratione quaerat dolorem error magni odit
            fugit!
          </p>
        </div>
        <div>
          <input type="text" />
        </div>
      </ContentDiv>
    </ContainerDiv>
  );
}

export default App;
