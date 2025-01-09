import React from "react";
import styled from "styled-components";

const Result = () => {
  return (
    <Container>
      <Title>당신의 야구 관람 유형은...</Title>
      <ResultText>열정적인 팬입니다! ⚾</ResultText>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ResultText = styled.p`
  font-size: 1.5rem;
  color: #005662;
`;
