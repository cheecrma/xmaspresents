// src/components/Wardrobe.js
import { useRouter } from "next/navigation";

export default function Wardrobe() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/start");
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src="/images/wardrobe.png" alt="Wardrobe" width="200" />
      <p>Start</p>
    </div>
  );
}
