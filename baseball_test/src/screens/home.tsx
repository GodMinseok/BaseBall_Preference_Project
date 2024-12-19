import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.div``;
const StartButton = styled.div``;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>야구 관람 유형 테스트</Title>
      <StartButton onClick={() => navigate("/test")}>시작하기</StartButton>
    </Container>
  );
};

export default Home;
