"use client";
import css from "@/styles/alexHome.module.css";
import { Canvas } from "@react-three/fiber";
import Floor from "@/components/Floor";
import Box from "@/components/Box";
import LightBulb from "@/components/LightBulb";
import OrbitControls from "@/components/OrbitControls";
import Draggable from "@/components/Draggable";
export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <Draggable>
          <Box rotateX={3} rotateY={0.2} /> <LightBulb position={[0.5, 3, 1]} />
          <Box />
        </Draggable>
        <ambientLight color={"white"} intensity={0.3} />
        <OrbitControls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
