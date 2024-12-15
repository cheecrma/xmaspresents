// src/components/Wardrobe.js
"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Wardrobe() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/start");
  };

  return (
    <div
      style={{ cursor: "pointer", textAlign: "center" }}
      onClick={handleClick}
    >
      <img
        src="/images/wardrobe.png"
        alt="Wardrobe"
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
}
