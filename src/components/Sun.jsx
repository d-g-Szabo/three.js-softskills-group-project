"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { TextureLoader } from "three";
export default function Sun(props) {
  const sunRef = useRef();
  useFrame(() => {
    sunRef.current.rotation.y += 0.002;
  });
  return (
    <mesh {...props} ref={sunRef}>
      <pointLight castShadow decay={1.3} power={700} />
      <sphereGeometry />

      <meshStandardMaterial
        map={props.map}
        emissive={"red"}
        emissiveIntensity={2}
      />

      {/* <meshPhysicalMaterial color={"yellow"} /> */}
    </mesh>
  );
}
