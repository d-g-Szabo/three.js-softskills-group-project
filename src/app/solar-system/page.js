"use client";

import dynamic from "next/dynamic"; // Import dynamic
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

import { Suspense } from "react";
import { useState, useEffect } from "react";
import { TextureLoader } from "three";
// import { useLoader } from "@react-three/fiber";
// const useLoader = dynamic(
//   () => import("@react-three/fiber").then((mod) => mod.useLoader),
//   { ssr: false }
// );

import Scene from "@/components/Scene";
import Link from "next/link";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [textures, setTextures] = useState(null);

  useEffect(() => {
    // This code runs after component mount, which happens only in the client
    setIsClient(true);
    if (isClient) {
      // Load textures directly using TextureLoader not useLoader
      const loader = new TextureLoader();
      const textures = {
        EarthTexture: loader.load("/2k_earth_daymap.jpg"),
        MercuryTexture: loader.load("/2k_mercury.jpg"),
        SunTexture: loader.load("/2k_sun.jpg"),
        VenusTexture: loader.load("/2k_venus_atmosphere.jpg"),
        MarsTexture: loader.load("/2k_mars.jpg"),
        JupiterTexture: loader.load("/2k_jupiter.jpg"),
        SaturnTexture: loader.load("/2k_saturn.jpg"),
        UranusTexture: loader.load("/2k_uranus.jpg"),
        NeptuneTexture: loader.load("/2k_neptune.jpg"),
      };
      setTextures(textures);
    }
  }, [isClient]);

  if (!isClient || !textures) {
    return null; // Render nothing until textures are loaded
  }

  return (
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
        <Suspense fallback={<span>Loading textures...</span>}>
          <Mercury map={textures.MercuryTexture} />
          <Venus map={textures.VenusTexture} />
          <Earth map={textures.EarthTexture} />
          <Mars map={textures.MarsTexture} />
          <Jupiter map={textures.JupiterTexture} />
          <Saturn map={textures.SaturnTexture} />
          <Uranus map={textures.UranusTexture} />
          <Neptune map={textures.NeptuneTexture} />
          <Sun map={textures.SunTexture} />
        </Suspense>
        <ambientLight color={"white"} intensity={0.5} />
      </Canvas>
    </div>
  );
}
