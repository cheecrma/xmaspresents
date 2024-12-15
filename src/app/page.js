// src/app/page.js
"use client"; // 클라이언트 컴포넌트로 설정

import Wardrobe from "../components/Wardrobe";
import styled from "styled-components";
import { useEffect } from "react"; // 클라이언트 전용 훅 예시

const HomeContainer = styled.div`
  background-color: #f5f0e1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 50px 20px 0;
  overflow: hidden;
  margin: 0;
`;

const Title = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 48px;
  color: #5a3e36;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #7d5a50;
  margin-bottom: 30px;
`;

const WardrobeContainer = styled.div`
  cursor: pointer;
`;

export default function Home() {
  useEffect(() => {
    console.log("페이지가 로드되었습니다.");
  }, []);

  return (
    <HomeContainer>
      <Title>신비한 옷장에 오신 것을 환영합니다</Title>
      <Subtitle>옷장을 클릭해서 모험을 시작하세요</Subtitle>
      <WardrobeContainer>
        <Wardrobe />
      </WardrobeContainer>
    </HomeContainer>
  );
}
