// src/app/instructions/page.js

"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";

const InstructionsContainer = styled.div`
  background-color: #f5f0e1; // 따뜻한 베이지 배경
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  font-family: "Arial, sans-serif";
`;

const Signboard = styled.div`
  background-color: #fff;
  border: 5px solid #5a3e36; // 표지판 테두리
  border-radius: 15px;
  padding: 30px 20px;
  max-width: 500px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 36px;
  color: #5a3e36;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 18px;
  color: #7d5a50;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: #5a3e36;
  color: #fff;
  font-size: 18px;
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7d5a50;
  }
`;

export default function Instructions() {
  const router = useRouter();

  const handleProceed = () => {
    router.push("/map");
  };

  return (
    <InstructionsContainer>
      <Signboard>
        <Title>신비한 옷장에 오신 것을 환영합니다</Title>
        <Message>
          이 모험은 올 한 해 수고한 여러분을 위해 준비한 작은 놀이터입니다.
          <br />
          가볍게 즐기며 소소한 재미를 느껴보세요!
          <br />
          (제작자들이 업무 시간 외에 취미로 만든 프로젝트로 재밌게 귀엽게
          봐주시길 바랍니다)
        </Message>
        <Button onClick={handleProceed}>시작하기</Button>
      </Signboard>
    </InstructionsContainer>
  );
}
