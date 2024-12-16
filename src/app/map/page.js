"use client"; // 클라이언트 컴포넌트 선언

import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import Quiz1 from "../../components/quiz/Quiz1";
import Quiz2 from "../../components/quiz/Quiz2";
import Quiz3 from "../../components/quiz/Quiz3";
import Quiz4 from "../../components/quiz/Quiz4";
import Quiz5 from "../../components/quiz/Quiz5";
import Quiz6 from "../../components/quiz/Quiz6";
import Quiz7 from "../../components/quiz/Quiz7";
import Quiz8 from "../../components/quiz/Quiz8";
import Quiz9 from "../../components/quiz/Quiz9";
import Quiz10 from "../../components/quiz/Quiz10";
import Quiz11 from "../../components/quiz/Quiz11";
import Quiz12 from "../../components/quiz/Quiz12";
import Quiz13 from "../../components/quiz/Quiz13";

const characterMessages = {
  "/images/character1.png":
    "당신의 용기와 강인함이 모든 어려움을 이겨냈습니다!",
  "/images/character2.png":
    "당신의 지혜와 신중함이 빛을 발한 멋진 모험이었습니다!",
  "/images/character3.png": "에너지 넘치는 탐험으로 모든 모험을 정복했네요!",
  "/images/character4.png": "신비롭고 예리한 마법이 모든 도전을 해결했습니다!",
};

const CompletionWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
`;

const CompletionOverlay = styled.div`
  background-color: #fff;
  color: #5a3e36;
  padding: 40px 20px;
  border: 5px solid #5a3e36;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  width: 320px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #5a3e36;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #7d5a50;
  }
`;

const CertificateHeader = styled.h2`
  font-size: 24px;
  color: #5a3e36;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 2px solid #5a3e36;
  padding-bottom: 10px;
`;

const CertificateBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const CertificateCharacter = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #5a3e36;
`;

const CertificateName = styled.h3`
  font-size: 28px;
  color: #5a3e36;
  margin: 0;
`;

const CertificateText = styled.p`
  font-size: 16px;
  color: #333;
  text-align: center;
  line-height: 1.5;
`;

const CertificateDate = styled.p`
  font-size: 14px;
  color: #777;
  margin-top: 10px;
  text-align: center;
  font-style: italic;
`;

const handleSave = () => {
  const certificateElement = document.getElementById("certificate");
  if (certificateElement) {
    html2canvas(certificateElement, { backgroundColor: null }).then(
      (canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "certificate.png";
        link.click();
      }
    );
  }
};

// 링크 복사 함수
const handleCopyLink = () => {
  navigator.clipboard
    .writeText(window.location.origin)
    .then(() => {
      alert("링크가 복사되었습니다!");
    })
    .catch((err) => {
      console.error("링크 복사 중 오류가 발생했습니다:", err);
    });
};

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f0e1;
  margin: 0;
  overflow: hidden;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  max-width: 780px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #5a3e36;
  color: white;
  padding: 8px 15px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  position: relative;
`;

const Title = styled.div`
  font-family: "Dancing Script", cursive;
  font-size: 20px;
  text-align: center;
  flex: 1;
`;

const CharacterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CharacterImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px; /* 최대 너비 설정 */
  margin: auto;
`;

const MapImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border: 5px solid #5a3e36;
  border-radius: 10px;
`;

const StageButton = styled.img`
  position: absolute;
  width: 7vw; /* 화면 폭에 따라 버튼 크기 조정 */
  max-width: 50px;
  height: auto;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  border: 2px solid #fff; /* 버튼 테두리 */
  border-radius: 10px;
  transition: transform 0.2s, box-shadow 0.3s;

  /* 불빛 효과 */
  box-shadow: 0 0 15px rgba(255, 223, 0, 0.7); /* 노란색 불빛 효과 */

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(255, 223, 0, 1); /* 호버 시 불빛 강화 */
  }

  @media (max-width: 600px) {
    width: 10vw; /* 작은 화면에서 버튼 크기 조정 */
  }
`;

const ClearStamp = styled.img`
  position: absolute;
  width: 7vw; /* 버튼과 동일한 크기 */
  max-width: 50px;
  height: auto;
  pointer-events: none;

  @media (max-width: 600px) {
    width: 10vw; /* 작은 화면에서 스탬프 크기 조정 */
  }
`;

const HelpBox = styled.div`
  background-color: #fff;
  color: #5a3e36;
  padding: 15px;
  border: 2px solid #5a3e36;
  border-radius: 10px;
  position: absolute;
  top: 50px;
  right: 10px;
  max-width: 300px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const quizComponents = [
  Quiz1,
  Quiz2,
  Quiz3,
  Quiz4,
  Quiz5,
  Quiz6,
  Quiz7,
  Quiz8,
  Quiz9,
  Quiz10,
  Quiz11,
  Quiz12,
  Quiz13,
];

const buttonPositions = [
  { top: "22%", left: "39%" }, // Stage 1 더플라자 호텔
  { top: "18%", left: "68%" }, // Stage 2 브리드호텔 양양
  { top: "12%", left: "60%" }, // Stage 3 설악 쏘라노
  { top: "45%", left: "30%" }, // Stage 4 대천 파로스
  { top: "25%", left: "57%" }, // Stage 5 평창 리조트
  { top: "35%", left: "42%" }, // Stage 6 용인 베잔송
  { top: "14%", left: "44%" }, // Stage 7 산정호수 안시
  { top: "52%", left: "72%" }, // Stage 8 경주 리조트
  { top: "67%", left: "57%" }, // Stage 9 거제 리조트
  { top: "64%", left: "71%" }, // Stage 10 부산 마티에
  { top: "72%", left: "45%" }, // Stage 11 여수 벨메르
  { top: "68%", left: "65%" }, // Stage 12 해운대 리조트
  { top: "91%", left: "26%" }, // Stage 13 제주 리조트
];

export default function Map() {
  const [clearedStages, setClearedStages] = useState(Array(13).fill(false));
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const [character, setCharacter] = useState(null);
  const [characterName, setCharacterName] = useState("");

  useEffect(() => {
    setCharacter(localStorage.getItem("selectedCharacter"));
    setCharacterName(localStorage.getItem("characterName"));
  }, []);

  const toggleHelp = () => setShowHelp((prev) => !prev);
  const handleStageClick = (index) => setCurrentQuiz(index);
  const handleQuizClose = () => setCurrentQuiz(null);

  const allStagesCleared = clearedStages.every((stage) => stage);

  return (
    <PageContainer onClick={() => setShowHelp(false)}>
      <Header onClick={(e) => e.stopPropagation()}>
        <CharacterContainer>
          <CharacterImage src={character} alt="Character" />
          <span>{characterName}</span>
        </CharacterContainer>
        <Title>도지리앤호화한</Title>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            toggleHelp();
          }}
        >
          도움말
        </Button>
        {showHelp && (
          <HelpBox onClick={(e) => e.stopPropagation()}>
            <p>게임 플레이 설명:</p>
            <p>
              각 스테이지를 선택하고 문제를 해결하세요. 13개의 스테이지를
              완료하면 특별한 선물이 있습니다!
            </p>
          </HelpBox>
        )}
      </Header>

      <MapContainer>
        <MapImage src="/images/map.png" alt="Stage Map" />
        {buttonPositions.map((position, index) => (
          <div key={index}>
            <StageButton
              src={`/images/button${index + 1}.png`}
              alt={`Stage ${index + 1}`}
              style={{ top: position.top, left: position.left }}
              onClick={() => handleStageClick(index)}
              disabled={clearedStages[index]}
            />
            {clearedStages[index] && (
              <ClearStamp
                src="/images/clear_stamp.png"
                alt="Clear Stamp"
                style={{ top: position.top, left: position.left }}
              />
            )}
          </div>
        ))}
      </MapContainer>

      {currentQuiz !== null &&
        (() => {
          const CurrentQuizComponent = quizComponents[currentQuiz];
          return (
            <CurrentQuizComponent
              onCorrect={() => {
                setClearedStages((prev) => {
                  const newClearedStages = [...prev];
                  newClearedStages[currentQuiz] = true;
                  return newClearedStages;
                });
                setCurrentQuiz(null);
              }}
              onClose={handleQuizClose}
            />
          );
        })()}

      {allStagesCleared && (
        <CompletionWrapper>
          <CompletionOverlay id="certificate">
            <CertificateHeader>🎖️ 모험 완료 증명서 🎖️</CertificateHeader>
            <CertificateBody>
              <CertificateCharacter src={character} alt="Character" />
              <CertificateName>{characterName}</CertificateName>
              <CertificateText>
                용감한 <strong>{characterName}</strong>님!
                <br />
                {characterMessages[character] ||
                  "당신은 모든 모험을 완수하고 전설적인 용사가 되었습니다!"}
                <br />그 용기와 지혜에 큰 박수를 보냅니다. 🎉
              </CertificateText>
              <CertificateDate>
                발급일: {new Date().toLocaleDateString()}
              </CertificateDate>
            </CertificateBody>
          </CompletionOverlay>

          <ButtonContainer>
            <Button onClick={handleSave}>📸 화면 저장</Button>
            <Button onClick={handleCopyLink}>🔗 링크 복사</Button>
            <Button onClick={() => (window.location.href = "/")}>
              🏠 처음으로 돌아가기
            </Button>
          </ButtonContainer>
        </CompletionWrapper>
      )}
    </PageContainer>
  );
}
