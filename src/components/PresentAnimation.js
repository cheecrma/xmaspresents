// src/components/PresentAnimation.js

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styled, { keyframes, css } from "styled-components";

// 일정한 속도의 타이핑 효과를 위한 애니메이션
const typing = keyframes`
  from {
    clip-path: inset(0 100% 0 0); // 오른쪽에서부터 텍스트를 가림
  }
  to {
    clip-path: inset(0 0 0 0); // 텍스트를 완전히 보여줌
  }
`;

const AnimationContainer = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px; // 양쪽에 여백 추가
`;

const AnimationText = styled.div`
  font-family: "Dancing Script", cursive;
  font-size: 24px;
  color: white;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  animation: ${typing} 5s forwards; // 5초 동안 타이핑 애니메이션 적용

  ${({ $isAnimationDone }) =>
    $isAnimationDone &&
    css`
      border-right: none; // 애니메이션이 끝나면 커서 효과 제거
    `}
`;

export default function PresentAnimation() {
  const router = useRouter();
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationDone(true);
      router.push("/instructions");
    }, 6000); // 애니메이션 지속 시간과 동일하게 설정 (6초)

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [router]);

  return (
    <AnimationContainer>
      <AnimationText $isAnimationDone={isAnimationDone}>
        Present for you
      </AnimationText>
    </AnimationContainer>
  );
}
