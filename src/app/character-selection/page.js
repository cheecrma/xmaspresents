"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const CharacterGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
  flex-wrap: wrap; /* 화면 크기가 줄어들 때 이미지가 한 줄에 쌓이지 않도록 설정 */
`;

const CharacterOption = styled.img`
  width: 100%; /* 부모 크기에 맞춰 이미지 크기를 100%로 조정 */
  max-width: 100px; /* 최대 크기 설정 */
  height: auto; /* 비율 유지 */
  cursor: pointer;
  border: ${({ selected }) =>
    selected ? "3px solid #5a3e36" : "3px solid transparent"};
  border-radius: 10px;
  transition: transform 0.2s, border 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  ${({ selected }) =>
    selected &&
    `
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(90, 62, 54, 0.5);
  `}
`;

const CharacterDescription = styled.p`
  font-size: 16px;
  color: #555;
  margin: 20px 0;
  min-height: 40px; /* 최소 높이 설정 */
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin: 20px 0;
  border: 2px solid #5a3e36;
  border-radius: 5px;
  width: 250px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #5a3e36;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #7d5a50;
  }
`;

const characters = [
  {
    id: 1,
    src: "/images/character1.png",
    alt: "Character 1",
    description: "용감하고 강인한 모험가",
  },
  {
    id: 2,
    src: "/images/character2.png",
    alt: "Character 2",
    description: "지혜롭고 신중한 전략가",
  },
  {
    id: 3,
    src: "/images/character3.png",
    alt: "Character 3",
    description: "활발하고 에너지 넘치는 탐험가",
  },
  {
    id: 4,
    src: "/images/character4.png",
    alt: "Character 4",
    description: "신비롭고 예리한 마법사",
  },
];

export default function CharacterSelection() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characterName, setCharacterName] = useState("");
  const [characterDescription, setCharacterDescription] = useState("");
  const router = useRouter();

  const handleCharacterClick = (char) => {
    setSelectedCharacter(char.src);
    setCharacterDescription(char.description);
  };

  const handleProceed = () => {
    const trimmedName = characterName.trim();
    if (selectedCharacter && trimmedName) {
      localStorage.setItem("selectedCharacter", selectedCharacter);
      localStorage.setItem("characterName", trimmedName);
      router.push("/map");
    } else {
      alert("캐릭터를 선택하고 이름을 입력해주세요!");
    }
  };

  return (
    <Container>
      <h1>캐릭터 선택</h1>
      <p>모험을 함께할 캐릭터를 선택하고 이름을 지어주세요!</p>
      <CharacterGrid>
        {characters.map((char) => (
          <CharacterOption
            key={char.id}
            src={char.src}
            alt={char.alt}
            selected={selectedCharacter === char.src}
            onClick={() => handleCharacterClick(char)}
          />
        ))}
      </CharacterGrid>
      <CharacterDescription>
        {characterDescription || "캐릭터를 선택하면 성격이 여기에 표시됩니다."}
      </CharacterDescription>
      <Input
        type="text"
        placeholder="캐릭터 이름을 입력하세요"
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value.slice(0, 7))}
        maxLength={7}
      />
      <p style={{ fontSize: "14px", color: "#777", margin: "0px 0 50px" }}>
        이름은 최대 7글자까지 입력할 수 있습니다.
      </p>
      <div>
        <Button onClick={handleProceed}>모험 시작</Button>
      </div>
    </Container>
  );
}
