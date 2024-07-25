"use client";
import { Environment, useEnvironment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  const starsTexture = useEnvironment({ files: ["stars.hdr"] });

  return (
    <>
      {" "}
      <OrbitControls />
      <Environment map={starsTexture} background backgroundIntensity={5} />
    </>
  );
}
