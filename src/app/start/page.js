// src/app/start/page.js
import PresentAnimation from "../../components/PresentAnimation";

export default function Start() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <PresentAnimation />
    </div>
  );
}
