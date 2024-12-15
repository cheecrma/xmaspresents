// src/app/instructions/page.js
"use client"; // 추가

import { useRouter } from "next/navigation";

export default function Instructions() {
  const router = useRouter();

  const handleProceed = () => {
    router.push("/map");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Game Instructions</h1>
      <p>Clear all 13 stages by solving each challenge. Good luck!</p>
      <button
        onClick={handleProceed}
        style={{ padding: "10px 20px", marginTop: "20px" }}
      >
        Start Game
      </button>
    </div>
  );
}
