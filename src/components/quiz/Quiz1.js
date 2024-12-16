// src/components/quiz/Quiz1.js

"use client";

import styled from "styled-components";

const QuizContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 2px solid #5a3e36;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 2;
  text-align: center;
`;

const Question = styled.h3`
  margin-bottom: 20px;
  color: #5a3e36;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OptionButton = styled.button`
  padding: 10px 20px;
  background-color: #f5f0e1;
  color: #5a3e36;
  border: 1px solid #5a3e36;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #5a3e36;
    color: #fff;
  }
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ccc;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #bbb;
  }
`;

export default function Quiz1({ onCorrect, onClose }) {
  const correctAnswer = "B";

  const handleOptionClick = (option) => {
    if (option === correctAnswer) {
      onCorrect();
    } else {
      alert("틀렸습니다! 다시 시도해 보세요.");
    }
    onClose();
  };

  return (
    <QuizContainer>
      <Question>소공로: 서울 중구에서 가장 좋은 호텔은?</Question>
      <OptionsContainer>
        <OptionButton onClick={() => handleOptionClick("A")}>
          A. 롯데호텔
        </OptionButton>
        <OptionButton onClick={() => handleOptionClick("B")}>
          B. 더플라자호텔
        </OptionButton>
        <OptionButton onClick={() => handleOptionClick("C")}>
          C. 조선호텔
        </OptionButton>
        <OptionButton onClick={() => handleOptionClick("D")}>
          D. 라마다호텔
        </OptionButton>
      </OptionsContainer>
      <CloseButton onClick={onClose}>닫기</CloseButton>
    </QuizContainer>
  );
}
