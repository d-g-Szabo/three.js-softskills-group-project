"use client";

import dynamic from "next/dynamic"; // Import dynamic
// Step 2: Use dynamic imports with { ssr: false }
const OrbitControls = dynamic(() => import("@/components/OrbitControls"), {
  ssr: false,
});
const Sun = dynamic(() => import("@/components/Sun"), { ssr: false });
const Earth = dynamic(() => import("@/components/Earth"), { ssr: false });
const Mercury = dynamic(() => import("@/components/Mercury"), { ssr: false });
const Venus = dynamic(() => import("@/components/Venus"), { ssr: false });
const Mars = dynamic(() => import("@/components/Mars"), { ssr: false });
const Jupiter = dynamic(() => import("@/components/Jupiter"), { ssr: false });
const Saturn = dynamic(() => import("@/components/Saturn"), { ssr: false });
const Uranus = dynamic(() => import("@/components/Uranus"), { ssr: false });
const Neptune = dynamic(() => import("@/components/Neptune"), { ssr: false });
import css from "@/styles/alexHome.module.css";
// import { Canvas } from "@react-three/fiber";
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);
// import OrbitControls from "@/components/OrbitControls";
// import Draggable from "@/components/Draggable";
// import Sun from "@/components/Sun";
// import Earth from "@/components/Earth";
import { Suspense } from "react";
import { useState, useEffect } from "react";
import { TextureLoader } from "three";
// import { useLoader } from "@react-three/fiber";
const useLoader = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.useLoader),
  { ssr: false }
);
// import Mercury from "@/components/Mercury";
// import Venus from "@/components/Venus";
// import Mars from "@/components/Mars";
// import Jupiter from "@/components/Jupiter";
// import Saturn from "@/components/Saturn";
// import Uranus from "@/components/Uranus";
// import Neptune from "@/components/Neptune";
import { RGBELoader } from "../utils/RGBELoader";
import * as THREE from "three";
import { extend, createRoot, events } from "@react-three/fiber";
import { Environment, useEnvironment } from "@react-three/drei";
import Scene from "@/components/Scene";
import LightBulb from "@/components/LightBulb";
import Link from "next/link";
// import Flares from "@/components/Flares";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This code runs after component mount, which happens only in the client
    setIsClient(true);
  }, []);

  const earthTexture = useLoader(TextureLoader, "/2k_earth_daymap.jpg");
  const mercuryTexture = useLoader(TextureLoader, "/2k_mercury.jpg");
  const sunTexture = useLoader(TextureLoader, "/2k_sun.jpg");
  const venusTexture = useLoader(TextureLoader, "/2k_venus_atmosphere.jpg");
  const marsTexture = useLoader(TextureLoader, "/2k_mars.jpg");
  const jupiterTexture = useLoader(TextureLoader, "/2k_jupiter.jpg");
  const saturnTexture = useLoader(TextureLoader, "/2k_saturn.jpg");
  const uranusTexture = useLoader(TextureLoader, "/2k_uranus.jpg");
  const neptuneTexture = useLoader(TextureLoader, "/2k_neptune.jpg");

  // const starsTexture = useLoader(TextureLoader, "/stars.jpg");

  return (
    <>
      {isClient && (
        <div className={css.scene}>
          <Link href={"/"} className="fixed z-10 bg-opacity-0 m-5">
            Home
          </Link>

          <Canvas
            shadows
            className={css.canvas}
            camera={{
              position: [-6, 7, 7],
            }}
          >
            <Scene />
            {/* <Draggable> */}
            <Suspense fallback={null}>
              {/* <LightBulb /> */}
              <Mercury map={mercuryTexture} />
              <Venus map={venusTexture} />
              <Earth map={earthTexture} />
              <Mars map={marsTexture} />
              <Jupiter map={jupiterTexture} />
              <Saturn map={saturnTexture} />
              <Uranus map={uranusTexture} />
              <Neptune map={neptuneTexture} />
              <Sun map={sunTexture} />
            </Suspense>
            {/* </Draggable> */}
            <ambientLight color={"white"} intensity={0.5} />
          </Canvas>
        </div>
      )}
    </>
  );
}
