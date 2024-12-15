// src/components/PresentAnimation.js
import React from "react";
import styled, { keyframes } from "styled-components";

// 필기체 애니메이션
const handwriting = keyframes`
  0% {
    width: 0;
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
`;

const blinkCaret = keyframes`
  50% {
    border-color: transparent;
  }
`;

// 필기체 스타일 및 애니메이션 적용
const PresentText = styled.p`
  font-family: "Dancing Script", cursive;
  font-size: 2rem;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  letter-spacing: 0.1em;
  border-right: 0.1em solid black;
  animation: ${handwriting} 3s steps(14) 1s forwards,
    ${blinkCaret} 0.75s step-end infinite;
`;

export default function PresentAnimation() {
  return (
    <div>
      <PresentText>Present for you</PresentText>
    </div>
  );
}
