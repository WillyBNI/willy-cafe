import { useRef, useState } from "react";
import { loadDoom } from "./doomLoader";


export default function Doom() {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [started, setStarted] = useState(false);


  async function startDoom() {

    if (!canvasRef.current)
      return;


    setStarted(true);

    await loadDoom(canvasRef.current);

    console.log("Doom started!");

  }


  return (
    <div>

      {!started &&
        <button onClick={startDoom}>
          Start Doom
        </button>
      }


      <canvas
        ref={canvasRef}
        width={640}
        height={400}
      />

    </div>
  );
}