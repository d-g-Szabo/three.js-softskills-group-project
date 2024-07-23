"use client";
import css from "@/styles/alexHome.module.css";
import { Canvas } from "@react-three/fiber";
import Floor from "@/components/Floor";
import Box from "@/components/Box";
import LightBulb from "@/components/LightBulb";
import OrbitControls from "@/components/OrbitControls";
import Draggable from "@/components/Draggable";
import Sphere from "@/components/Sphere";
import Moon from "@/components/Moon";
import { Suspense } from "react";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import Mercury from "@/components/Mercury";
import Venus from "@/components/Venus";
import Mars from "@/components/Mars";
import Jupiter from "@/components/Jupiter";
import Saturn from "@/components/Saturn";
import Uranus from "@/components/Uranus";
import Neptune from "@/components/Neptune";
export default function Home() {
  const moonTexture = useLoader(TextureLoader, "/2k_earth_daymap.jpg");
  const mercuryTexture = useLoader(TextureLoader, "/2k_mercury.jpg");
  const sunTexture = useLoader(TextureLoader, "/2k_sun.jpg");
  const venusTexture = useLoader(TextureLoader, "/2k_venus_atmosphere.jpg");
  const marsTexture = useLoader(TextureLoader, "/2k_mars.jpg");
  const jupiterTexture = useLoader(TextureLoader, "/2k_jupiter.jpg");
  const saturnTexture = useLoader(TextureLoader, "/2k_saturn.jpg");
  const uranusTexture = useLoader(TextureLoader, "/2k_uranus.jpg");
  const neptuneTexture = useLoader(TextureLoader, "/2k_neptune.jpg");
  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        {/* <Suspense fallback={null}> */}
        <Mercury map={mercuryTexture} />
        <Venus map={venusTexture} />
        <Moon map={moonTexture} />
        <Mars map={marsTexture} />
        <Jupiter map={jupiterTexture} />
        <Saturn map={saturnTexture} />
        <Uranus map={uranusTexture} />
        <Neptune map={neptuneTexture} />
        <Sphere map={sunTexture} />
        {/* </Suspense> */}
        <Draggable></Draggable>
        <ambientLight color={"white"} intensity={0.3} />
        <OrbitControls />
        {/* <Floor position={[0, -5, 0]} /> */}
      </Canvas>
    </div>
  );
}
