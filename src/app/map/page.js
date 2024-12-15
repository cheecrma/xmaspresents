// src/app/map/page.js

"use client";

import { useState, useRef } from "react";
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
  position: relative; // 도움말 팝업 위치 기준점
`;

const Title = styled.div`
  font-family: "Dancing Script", cursive;
  font-size: 20px;
  text-align: center;
  flex: 1;
`;

const MapContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  position: relative;
`;

const MapImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border: 5px solid #5a3e36;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;

const StageButton = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ClearStamp = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
`;

const HelpBox = styled.div`
  background-color: #fff;
  color: #5a3e36;
  padding: 15px;
  border: 2px solid #5a3e36;
  border-radius: 10px;
  position: absolute;
  top: 100%; // 상단 바 바로 아래에 위치
  right: 0;
  max-width: 300px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #5a3e36;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #7d5a50;
  }
`;

const CompletionOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  z-index: 20;
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
  { top: "20%", left: "30%" },
  { top: "25%", left: "50%" },
  { top: "30%", left: "70%" },
  { top: "35%", left: "40%" },
  { top: "40%", left: "60%" },
  { top: "45%", left: "20%" },
  { top: "50%", left: "50%" },
  { top: "55%", left: "70%" },
  { top: "60%", left: "30%" },
  { top: "65%", left: "50%" },
  { top: "70%", left: "40%" },
  { top: "75%", left: "60%" },
  { top: "80%", left: "35%" },
];

export default function Map() {
  const [clearedStages, setClearedStages] = useState(Array(13).fill(false));
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const [captured, setCaptured] = useState(false);
  const mapRef = useRef(null);

  const toggleHelp = () => setShowHelp((prev) => !prev);
  const handleStageClick = (index) => setCurrentQuiz(index);
  const handleQuizClose = () => setCurrentQuiz(null);
  const handleQuizCorrect = (index) => {
    const newClearedStages = [...clearedStages];
    newClearedStages[index] = true;
    setClearedStages(newClearedStages);
    setCurrentQuiz(null);
  };

  const captureScreen = () => {
    setCaptured(true);

    // 캡처 버튼 숨기기
    const captureButton = document.getElementById("capture-button");
    if (captureButton) {
      captureButton.style.display = "none";
    }

    // 캡처 실행
    html2canvas(mapRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "stage_map.png";
      link.click();

      // 캡처 버튼 다시 보이기
      if (captureButton) {
        captureButton.style.display = "inline-block";
      }
    });
  };

  const allStagesCleared = clearedStages.every((stage) => stage);

  return (
    <PageContainer ref={mapRef} onClick={() => setShowHelp(false)}>
      <Header>
        <div>{new Date().toLocaleDateString()}</div>
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
            <br />
            <p>
              (주의: 해당 모험을 떠나게 되면 저장되지 않으므로 원타임으로 모험의
              도착지까지 플레이 해주시기 바랍니다.)
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
            />
            {clearedStages[index] && (
              <ClearStamp
                src="/images/clear_stamp.png"
                alt="Clear"
                style={{ top: position.top, left: position.left }}
              />
            )}
          </div>
        ))}
      </MapContainer>

      {allStagesCleared && !captured && (
        <CompletionOverlay>
          <h2>🎉 축하합니다! 모든 스테이지를 클리어했습니다! 🎉</h2>
          <Button id="capture-button" onClick={captureScreen}>
            화면 캡처
          </Button>
        </CompletionOverlay>
      )}

      {currentQuiz !== null &&
        (() => {
          const CurrentQuizComponent = quizComponents[currentQuiz];
          return (
            <CurrentQuizComponent
              onCorrect={() => handleQuizCorrect(currentQuiz)}
              onClose={handleQuizClose}
            />
          );
        })()}
    </PageContainer>
  );
}
