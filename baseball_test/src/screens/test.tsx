import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SelectSeats = () => {
  const navigate = useNavigate();

  const handleSelectSeat = () => {
    navigate("/select-items");
  };

  return (
    <Container>
      <Title>야구장 티켓 선택</Title>
      <Options>
        <OptionButton onClick={handleSelectSeat}>1루석</OptionButton>
        <OptionButton onClick={handleSelectSeat}>3루석</OptionButton>
        <OptionButton onClick={handleSelectSeat}>외야석</OptionButton>
        <OptionButton onClick={handleSelectSeat}>VIP석</OptionButton>
      </Options>
    </Container>
  );
};

export default SelectSeats;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
`;

const Options = styled.div`
  display: flex;
  gap: 10px;
`;

const OptionButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background-color: #1379ff;
  color: white;

  &:hover {
    background-color: #0e5bcc;
  }
`;
