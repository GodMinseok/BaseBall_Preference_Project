import React from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// const Container = styled.div``;
// const Title = styled.div``;
// const StartButton = styled.div``;

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <Container>
//       <Title>야구 관람 유형 테스트</Title>
//       <StartButton onClick={() => navigate("/test")}>시작하기</StartButton>
//     </Container>
//   );
// };

// export default Home;

// Home 컴포넌트
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>야구 관람 유형 테스트</Title>
      <StartButton onClick={() => navigate("/select-seats")}>
        시작하기
      </StartButton>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #005662;
  margin-bottom: 20px;
`;

const StartButton = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  background-color: #1379ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0e5bcc;
  }
`;
