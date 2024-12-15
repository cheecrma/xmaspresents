// src/components/StageMap.js
export default function StageMap() {
  const stages = Array.from({ length: 13 }, (_, i) => i + 1);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {stages.map((stage) => (
        <div
          key={stage}
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "#ccc",
            textAlign: "center",
            lineHeight: "60px",
          }}
        >
          Stage {stage}
        </div>
      ))}
    </div>
  );
}
