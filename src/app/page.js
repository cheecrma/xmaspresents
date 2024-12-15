// src/app/page.js

"use client";

import Wardrobe from "../components/Wardrobe";
import styled from "styled-components";

const HomeContainer = styled.div`
  background-color: #f5f0e1; // 따뜻한 베이지 톤 배경
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // 위쪽으로 정렬
  align-items: center;
  text-align: center;
  padding: 50px 20px 0; // 상단 패딩을 늘려서 위로 배치
  overflow: hidden; // 스크롤 방지
  margin: 0; // 여백 제거
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
