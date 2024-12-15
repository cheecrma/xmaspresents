// src/app/page.js
import Wardrobe from "../components/Wardrobe";

export default function Home() {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Click the Wardrobe to Start the Game</h1>
      <Wardrobe />
    </div>
  );
}
